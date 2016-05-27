/*jshint devel:true */


// on ready
$(document).ready(function() {



$( "form" ).submit(function( event ) {
	var date = $('.date').val();
	var local = $('.location').val();
	var hours = $('.hours').val();
	var info = $('.description').val();
	console.log(date);
	console.log(local);
	console.log(hours);
	console.log(info);
	event.preventDefault();
});


$.getScript("js/data.js", function(){

   console.log('loaded nigs');
   console.log(data);

});

}); // end of ready
