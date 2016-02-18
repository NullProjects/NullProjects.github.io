<?php
/*_______________________________________________
|                                                |
|    ©2012 Element Technologie - openElement     |
|________________________________________________|
*/


error_reporting (E_ALL);
ini_set("display_errors",1);

require_once "openElement.php";  // ajout de la class globale 

session_start(); // !important

//Definition des objets globaux du script
$objJson = new OEJSON();
$LocalizableString= new OEDataLocalizableString;



// définition de la méthode pour récupération des données.
if ($_SERVER['REQUEST_METHOD'] == "POST") {
	$param = $_POST;
	
} else {
	$param = $_GET;
}

// consider magic quotes:
if (get_magic_quotes_runtime()) set_magic_quotes_runtime(false);
if (get_magic_quotes_gpc()) {
	// remove slashes before apostrophes etc.
	foreach($param as $key=>$value) {
		if (is_array($value)) { // value is an array, not just string (happens if attribut name contains [])
			foreach($value as $vkey=>$vv)	$param[$key][$vkey] = stripslashes($param[$key][$vkey]);
		} else
			$param[$key] = stripslashes($param[$key]); // remove slashes before apostrophes etc.
	}
}


// Data passé diirectement via l'ajax
$SendMailName = $param["WESendMailID"] ; 
$PagePath = $param["PagePath"] ; 
$Culture = $param["Culture"] ; 
$RelativePath = $param["RelativePath"] ; 
$OEVersion = $param["OEVersion"] ; 

$Security->linkIntPageOk($PagePath) or exit;
$Security->linkIntPageOk($RelativePath) or exit;

$SendReceipt = false ; 
$IDReceiptEmail = ""; 
$ReceiptEmail = ""; 
$Attachment = array();

//Chemin des donnéees de la page
$PageVarPhp = "../../".$PagePath."(var).php";

require_once $PageVarPhp; 

if (empty( $OEConfWESendMail)) 
{
 	$json = ""; 
} else {
	$json = $OEConfWESendMail;	
}





//Deserialisation de OEConfWESendMail
$output = $objJson->Decode($json);




//Gestion des erreurs de déserialisation
if ($output==null) {
	$error = new OEReturn("error03",GetErrMessage($objJson,$WEInfoPage,"FormNotConfigure"));
	echo $objJson->Encode($error);
	exit(0);
}

//Recup data captcha
if (!empty( $OEConfWECaptcha )) 
{
	$OutputWECaptcha = $objJson->Decode($OEConfWECaptcha);
}

// recup des donnée d'envoi
$SendMailInfo= $output->$SendMailName->SendMailInfo;
if ($SendMailInfo->SendReceipt == true) {
	$SendReceipt =  true ; 
	$IDReceiptEmail = $SendMailInfo->UserEmailID; 
}
//Configuration des envois d'emails
if (!$output->$SendMailName->ConfSendMail==null) {
	$ConfSendMail=$output->$SendMailName->ConfSendMail;
	} else {
	$ConfSendMail=null;
}


$Body="";
$Upload=false;

//Recupération et parcours des elements du formulaire
$FormLinks = new OEDataFormLinks($output->$SendMailName->FormLinks);

foreach ($FormLinks->TabElementsID as $key => $FormLinksElement){ 

	//construction du nom de la variable de l'élément et deserialisation
	//ElementForm Version2
	$ElemType=$FormLinksElement->Type;
	switch($ElemType) {
		case 'WETextArea2';
			$ElemType='WETextArea';
			break;
		case 'WEUploadFiles2';
			$ElemType='WEUploadFiles';
			break;
		case 'WECaptcha2';
			$ElemType='WECaptcha';
			break;
		case 'WEListBox2';
			$ElemType='WEListBox';
			break;
		case 'WECheckBox2';
			$ElemType='WECheckBox';
			break;
		case 'WETextBox2';
			$ElemType='WETextBox';
			break;
		case 'WERadioButtonList2';
		$ElemType='WERadioButtonList';
			break;
	}
	
	$JsonVar="OEConf".$ElemType;
	
	

	if (! isset($$JsonVar) ) continue; //l'element n'existe plus sur la page
	$ElemConf = $objJson->Decode($$JsonVar);
	
	$FormLinksElemenID=$FormLinksElement->ID;

	$elementExists = isset($ElemConf->$FormLinksElemenID); // false when element is still in SendMail's list of used elements but is no longer on the page
	if (!$elementExists) continue; // ignore completely ghost elements

//Recup de la valeur
	$htmlEntFlags = ENT_NOQUOTES; if (defined('ENT_SUBSTITUTE')) $htmlEntFlags = $htmlEntFlags | ENT_SUBSTITUTE;




	// key in $_POST[] (name attribute):
	$attrName = (isset($param[$FormLinksElement->ID])) 				? $FormLinksElement->ID :
	           ((isset($ElemConf->$FormLinksElemenID->InputName)) 	? $ElemConf->$FormLinksElemenID->InputName : //ElementForm Version2
																	  null);
	$posArray = ($attrName) ? strpos($attrName, '[') : false; // ex. "myCheckBox[]" or "myCheckBox[0]" (to group checkboxes by using same name attribute + array format)
	if ($posArray) $attrName = substr($attrName, 0, $posArray); // remove [] ending, ex. "myCheckBox"
	//$posEndArray = strpos($attrName, ']', $posArray);	//$indArray = ($posEndArray && $posEndArray > $posArray+1) ? intval(substr($attrName, $posArray+1, $posEndArray - ($posArray + 1))) : -1;

	if ($attrName && isset($param[$attrName])) { // DD ex. checkboxes may write nothing at all if unchecked => absent in $param
		$val = $param[$attrName];
		
		if (is_array($val)) { // special case - several values for the same name (if array syntax was used in name attribute - see above)
			if (!isset($arrayDataNames)) 
				$arrayDataNames = array();
			else if (isset($arrayDataNames[$attrName])) 
				continue; // this name is already used+processed by one of previous elements
			$arrayDataNames[$attrName] = true; // mark this name as processed
				
			$val = implode(", ", $val); // list all array values separated by coma
		} 
		
		$val = htmlentities($val, $htmlEntFlags, 'UTF-8'); // ENT_SUBSTITUTE is only from PHP 5.4
		
	} else 
		$val="-";

		
		
		
	//email de l'accuse de reception
	if ($IDReceiptEmail == $FormLinksElement->ID) {
	
		if ($val!="" && !$Security->emailOk($val)) {echo "err"; exit;}
		$ReceiptEmail = $val; 
	}
	
	$title="";


	if (isset($ElemConf->$FormLinksElemenID->Title)) {
		if (!empty($ElemConf->$FormLinksElemenID->Title)) {
			$title= $LocalizableString->Get($ElemConf->$FormLinksElemenID->Title,$Culture);
			//$title=strip_tags($title);
			// $title = htmlentities($title, ENT_NOQUOTES | ENT_SUBSTITUTE, 'UTF-8'); // DD no protection for titles - let users make html tags etc.
		}
	} else {
		//ElementForm Version2
		$title=(isset($SendMailInfo->ListInputTitle->$FormLinksElemenID)) ? $LocalizableString->Get($SendMailInfo->ListInputTitle->$FormLinksElemenID,$Culture) : '';
		if (!empty($title)) {
			//$title=strip_tags($title);
			// $title = htmlentities($title, ENT_NOQUOTES | ENT_SUBSTITUTE, 'UTF-8'); // DD no protection for titles - let users make html tags etc.
		}
	}

	//Construction et mise en page du body
	switch($ElemType) {
		case 'WETextArea';

		//Recuperation du titre dans la chaine localisable
			$Body.=$title ." </br>".$val."<br />" ;
			break;
		case 'WEUploadFiles';
		
			if (!empty($ElemConf->$FormLinksElemenID->AllowedTypesExt)) {
				//$allowedTypesExt=array(".jpg");
				$allowedTypesExt=explode(",",$ElemConf->$FormLinksElemenID->AllowedTypesExt);
			}

			$AllowedSize=0;
			if (!empty($ElemConf->$FormLinksElemenID->AllowedSize)) {
				$AllowedSize=$ElemConf->$FormLinksElemenID->AllowedSize*1024*1024;
			}

			$Upload= new OEUploadFile($allowedTypesExt,$AllowedSize, "../../".$OESiteUploadDirectory);
			$uploadFieldName = (isset($ElemConf->$FormLinksElemenID->InputName)) ? $ElemConf->$FormLinksElemenID->InputName : $FormLinksElement->ID;
			$rep=$Upload->GetFiles($uploadFieldName,$WEInfoPage);
			if ($rep && $rep->State=="error") {
				$error = new OEReturn("error02",utf8_encode($title." : ".$rep->ErrorDescription." (att. er.)"));
				echo $objJson->Encode($error);
				exit(0);
			}
			
			if (!empty($Upload->DestFileNames)) $Attachment = array_merge($Attachment, $Upload->DestFileNames);
			
			break;
		case 'WECaptcha';
			if (WECaptchaCheck($val,$FormLinksElement->ID,$OEVersion)==false) {
	
				$ErrorText=GetErrMessage($objJson,$WEInfoPage,"CaptchaError");//"Captcha incorrect!";
				//Gestion des erreurs de déserialisation
				if ($OEConfWECaptcha!=null && (isset($LocalizableString) && isset($WECaptchaInfo->TextError))) { // DD blocked error "non-object" (shouldn't be necessary now, but keep just in case)
					
					$WECaptchaInfo= $OutputWECaptcha->$FormLinksElemenID;
					$ErrorText= $LocalizableString->Get($WECaptchaInfo->TextError,$Culture);
				}
		
				$error = new OEReturn("",$ErrorText);
				echo $objJson->Encode($error);
				exit(0);
			} 
			
			break;
		default;
			$Body.=$title ." ".$val."<br />" ;
	
		break;
	}

}

if (($LocalizableString->Get($SendMailInfo->AdminEmail,$Culture)=="")  || ($SendMailInfo->ReturnEmail=="") || ($SendMailInfo->Subject=="") ) {
	$error = new OEReturn("error04",GetErrMessage($objJson,$WEInfoPage,"FormNotConfigure")); //"Attention, vous n'avez pas configuré le formulaire"

	echo $objJson->Encode($error);
	exit(0);
}
  
// New: if $SendMailInfo->ReturnEmail does not contain an address with "@", consider it as a field name and try to get the value:
if (   isset($SendMailInfo->ReturnEmail)
	&& $SendMailInfo->ReturnEmail
	&& !strpos($SendMailInfo->ReturnEmail, '@')) {

	$mailFieldName = $SendMailInfo->ReturnEmail;
	$SendMailInfo->ReturnEmail = '';
	if (isset($_POST[$mailFieldName])) {
		$addrFromField = trim($_POST[$mailFieldName]);
		if (	$addrFromField
			&&  preg_match('/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/', $addrFromField)) {
				
			$SendMailInfo->ReturnEmail = $addrFromField;
		}
	}
		
}

$contact = $SendMailInfo->ReturnEmail;
$to =  $LocalizableString->Get($SendMailInfo->AdminEmail,$Culture);
$cc = $LocalizableString->Get($SendMailInfo->CopyEmail,$Culture);
$cci = $LocalizableString->Get($SendMailInfo->CopycacheEmail,$Culture);
$from = ($SendMailInfo->ReturnEmail ? $SendMailInfo->ReturnEmail : $to);
$subject = $SendMailInfo->Subject;//"Un internaute vous a envoyé un e-mail via le formulaire :\r\n";

// Paramètres du message
$mail = new OEMail(true,$ConfSendMail);
$mail->contact = $contact;
$mail->to = $to; // Adresse email de reception
$mail->cc = $cc; 
$mail->cci = $cci; 
$mail->subject = $subject; // Sujet
$mail->body = $Body; // Corps du message
$mail->from = $from; // Adresse email de l'expediteur (optionnel)
$mail->parts=$Attachment; //Liste des piece jointes

// envoi du message
$SendMailReturn=$mail->send();



//Suppression des pieces jointes du serveur
foreach($Attachment as $Path) {
	unlink($Path);
}

if ($SendMailReturn!="") {
		$error = new OEReturn("error02",$SendMailReturn); 
		echo $objJson->Encode($error);
		exit (0) ;
	} else {
		if (!$SendReceipt){
			$error = new OEReturn("success","");
			echo $objJson->Encode($error);
			exit (0) ;
		}
}




// ENVOI de l'accusé de réception ??? 
// Paramètres du message
$isSendHTML = true; // check!
$mail = new OEMail($isSendHTML,$ConfSendMail);
$mail->contact = $contact; 
$mail->to = $ReceiptEmail; // Adresse email de reception
$mail->subject =$LocalizableString->Get($SendMailInfo->ReceiptHeader,$Culture); // Sujet
$mail->body = $LocalizableString->Get($SendMailInfo->ReceiptBody,$Culture); // Corps du message
$mail->from = $from; // Adresse email de l'expediteur (optionnel)

if (!$mail->CheckEmail($ReceiptEmail)) {
	$error = new OEReturn("success",GetErrMessage($objJson,$WEInfoPage,"NoAcknowledgment")); //"Impossible d'envoyer l'accusé de réception : e-mail incorrect"
	echo $objJson->Encode($error);
	exit(0);
}

$SendMailReturn=$mail->send();

if ($SendMailReturn!="") {
		$error = new OEReturn("error02",$SendMailReturn); 
		echo $objJson->Encode($error);
	} else {
		$error = new OEReturn("success","");
		echo $objJson->Encode($error);
}
?>