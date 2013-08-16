// random number between 1 and 10 
var randomnumber = Math.ceil(Math.random()*10);
var previousguess = 0;
console.log(randomnumber);

// click submit, get value of #
$(document).ready(function() {
	$("#submit").on("click", function() {
	var userguess = $("input[name='number']").val();	
	console.log(userguess);
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
	
});




// number guessed matched number generated






// if # number matches...then show/hide an image. if number is incorrect then alert.

