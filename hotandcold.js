// random number between 1 and 10 
var randomnumber = Math.ceil(Math.random()*10);
var previousguess = 0;


// click submit, get value of #
$(document).ready(function() {
 $('form').submit(function(){ return false; });
	$("#submit").on("click", function() {
	var userguess = $("input[name='number']").val();	
	console.log(userguess);
	if(!$.isNumeric(userguess)) {
		return false;
	}
	if(userguess == randomnumber) {
		$("#wintext").show();
		$("#warmertext").hide();
		$("#coldertext").hide();
	} 
	else {
			if (Math.abs(randomnumber-userguess) < Math.abs(randomnumber-previousguess)) {
				$("#coldertext").hide();
				$("#warmertext").show();
			} else {
				$("#warmertext").hide();
				$("#coldertext").show();
			}
		
		} 
	 previousguess = userguess;
	
	
	});
   $("input[type='text']").keyup(function(event) {
	  console.log("yes");
	   if(event.keyCode == 13) {
	   
		  $("#submit").click(); 
	   }
   });

	
});




// number guessed matched number generated






// if # number matches...then show/hide an image. if number is incorrect then alert.

