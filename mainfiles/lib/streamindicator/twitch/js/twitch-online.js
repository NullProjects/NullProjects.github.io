/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 (function() {

  var user_name, api_key, twitch_widget;
  
  user_name = "cybergig22";
  api_key = "JrmG9dGyeFbj6cHQLdOmXEJejBzzYDD02yppPEsK";
  twitch_widget = $("#twitch-widget");

  twitch_widget.attr("href","http://twitch.tv/" + user_name);

  $.getJSON('https://api.twitch.tv/kraken/streams/' + user_name + '?client_id=' + api_key + '&callback=?', function(data) {	
	  if (data.stream) {
		  twitch_widget.html("<span class='online'></span> Online! ");
	  } else {
		  twitch_widget.html("<span class='offline'></span> Offline");
	  }  
  });

})();

