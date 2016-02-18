<?php
/*_______________________________________________
|                                                |
|    ©2012 Element Technologie - openElement     |
|________________________________________________|
*/


error_reporting (E_ALL);
ini_set("display_errors",1);

require_once "openElement.php";  // ajout de la class globale 



class OECounterItem {
 	
	//proprietes
	var $Value;
	var $ValInit;
	var $TabIP=array();
	var $TypeCounter;
	var $StartDate;
	var $Lenght;
	
	// constructeur

	function OECounterItem() {
		$this->TabIP=array();
	}

	function Create($ValInit,$TypeCounter,$Lenght) {
		$this->ValInit=$ValInit;
		$this->Value=$ValInit;
		$this->StartDate=time();
		$this->TypeCounter=$TypeCounter;
		$this->Lenght=$Lenght;
	}
	
	function Import($Value,$ValInit,$TabIP,$TypeCounter,$StartDate,$Lenght,$Time) {
		$this->ValInit=$ValInit;
		$this->Value=$Value;
		$this->TabIP=$TabIP;
		$this->StartDate=$StartDate;
		$this->TypeCounter=$TypeCounter;
		$this->Lenght=$Lenght;
		
		$this->ManagePeriodicity($Time);
	}
	
	function AddUnique($IP) {
		
		if (!in_array ($IP,$this->TabIP)) {
			$this->Value++;
			array_push($this->TabIP,$IP);
		}
	}
	
	function Add() {

		$this->Value++;
	}
	
	function ManagePeriodicity($Time) {
//		echo strftime("%d-%m-%Y  %H:%M",$Time); //Exemple d'ecriture de la date

		switch ($this->TypeCounter) {
			case 0: //Depuis de début
				return;
				break;
			case 1: //Journalier
				$date=mktime(0, 0, 0, date('m',$this->StartDate), date('d',$this->StartDate)+1, date('Y',$this->StartDate));
				break;
			case 2: //Hebdomadaire
				$Jour=date("N",mktime(0, 0, 0, date('m',$this->StartDate), date('d',$this->StartDate)+7, date('Y',$this->StartDate))); //Jour de la semaine (lundi=1,......Dimanche=7)
				$date=mktime(0, 0, 0, date('m',$this->StartDate), date('d',$this->StartDate)+7-$Jour+1, date('Y',$this->StartDate));  //(date du 1ier lundi d'apres = date + 7 j - jour de la semaine + 1
				break;
			case 3: //Mensuel
				$date=mktime(0, 0, 0, date('m',$this->StartDate)+1, 1, date('Y',$this->StartDate));
				break;
			case 4: //Annuel
				$date=mktime(0, 0, 0, 1, 1, date('Y',$this->StartDate)+1);
				break;
		}
//	echo $Time." - ".$date."\n";	
		//Reinitialisation du compteur
		if ($Time >= $date) {
			$this->Value=$this->ValInit;
			$this->TabIP=array();
			$this->StartDate=$Time;
		}
		
	}

	
}











// définition de la méthode pour récupération des données.
if ($_SERVER['REQUEST_METHOD'] == "POST") {
	$param = $_POST;
} else {
	$param = $_GET;
}



//Definition des objets globaux du script
$PagePath = $param["PagePath"] ; //Chemin des donnéees de la page
$Culture = $param["Culture"] ; 
$objJson = new OEJSON();



$PageVarPhp = "../../".$PagePath."(var).php";

require $PageVarPhp; 


//$TabCounter = array;


if (empty( $OEConfWECounter)) 
{
 	$json = ""; 
} else {
	$json = $OEConfWECounter;	
}



//Deserialisation de OEConfWESendMail
$output = $objJson->Decode($json);



//Gestion des erreurs de déserialisation
if ($output==null) {
	$error = new OEReturn("errorCounter",utf8_encode(GetErrMessage($objJson,$WEInfoPage,"CounterError"))); //"Impossible de récupéré les données des compteurs."
	echo $objJson->Encode($error);
	exit(0);
}


//Recup des données existante
$JDataName="../../Data/WECounter.json";
if (!file_exists($JDataName)) {
	$JData="";
} else {
	$JData=file_get_contents ($JDataName);
	$tabdata= $objJson->Decode($JData);
}






//Parcours des compteur de la page
foreach ($output as $IDElem => $Elm ) { // key : nro tableau interne

	$ValInit=$output->$IDElem->Config->InitialValue;
//	echo((string) $output->$IDElem->Config->TypeCounter);
//exit(0);
	$TypeCounter=$output->$IDElem->Config->TypeCounter;
	$Lenght=$output->$IDElem->Config->Lenght;

	//La liste n'existe pas
	if (!isset($tabdata)) {
		$tabdata = new stdClass; // DD that fixes bug on first page open, on certain/later PHP versions
		$tabdata->$IDElem=new OECounterItem();
		
		$tabdata->$IDElem->Create($ValInit,$TypeCounter,$Lenght);
		} else {

			//Le compteur n'existe pas deja dans la liste
			if (!array_key_exists($IDElem,$tabdata)) {
				$tabdata->$IDElem=new OECounterItem();
				$tabdata->$IDElem->Create($ValInit,$TypeCounter,$Lenght);
				} else {
				
				//Le compteur existe deja dans la liste
				$Value=$tabdata->$IDElem->Value;
				$TabIP=$tabdata->$IDElem->TabIP;
				$StartDate=$tabdata->$IDElem->StartDate;
				
				
				$Dat=time();
				
				$elm=new OECounterItem();
				$elm->Import($Value,$ValInit,$TabIP,$TypeCounter,$StartDate,$Lenght,$Dat);
				
				
				
				
				if ($output->$IDElem->Config->CountMethod==0) {
					$elm->Add();
				
				} else {
					$IP=$_SERVER["REMOTE_ADDR"];
					$elm->AddUnique($IP) ;
				}
				$tabdata->$IDElem=$elm;
			}
		
		}

}

//echo $objJson->Encode($tabdata);
$res=$objJson->Encode($tabdata);
$fh = fopen($JDataName, 'w') or die("can't open file");
fwrite($fh,$res);
fclose($fh);
echo $res;
?>