
// check if the document has loaded
$ (document) .ready(function()


	{
		// $("h1") .mouseenter(function()
		// {
		// 		$(this).fadeOut().fadeIn();

		// 		//$(this).slideUp(100).slideDown(100) ;

	 //     }); //end

		// $("#project1 h5").hide() ;
		// $("#project img").mouseenter(function()

		// {
		// 	$("#project1 h5").show();{
		// 	//$("#project1 h5").mouseleave(function(){

		
		

		// {

		$('#contact-form').on('submit', function(e){
			
			

			url='/';
			data=$(this).serialize();

			console.log(data);

			$.post(url, data)
			.done(function() {

			alert('Ooops. something went wrong');

            });
			e.preventDefault();

			//validate form user input


			
		});



$("#contact-form").validate({
	  rules: {
	    fullname: "required",
	    email: {
	     required: true,
	     email: true
    	}
  },
  messages: {
	    fullname: "Please specify your name",
	    email: {
	     required: "We need your email address to contact you",
	     email: "Your email address must be in the format of name@domain.com",
	     maxlength: "maximum length should be 20"
    }
  },

  highlight: function(element)
  {
  	$(element).addClass('error');
  }



}); //ends validation for inputs


	// create accordion

	$ ("#accordion").accordion();
     $( "#tabs" ).tabs();





});