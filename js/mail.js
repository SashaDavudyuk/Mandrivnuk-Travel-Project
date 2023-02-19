$( '.js-input' ).keyup(function() {
	if( $(this).val() ) {
	   $(this).addClass('not-empty');
	} else {
	   $(this).removeClass('not-empty');
	}
  });
 
 $(document).ready(function() {
 
	 //E-mail Ajax Send
	 $("form").submit(function() { //Change
		 var th = $(this);
		 $.ajax({
			 type: "POST",
			 url: "../mail.php", //Change
			 data: th.serialize()
		 }).done(function() {
			 alert("Thank you!");
			 setTimeout(function() {
				 // Done Functions
				 th.trigger("reset");
			 }, 1000);
		 });
		 return false;
	 });
 
 });