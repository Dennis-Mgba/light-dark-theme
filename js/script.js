$(document).ready(function(){
	$('ul').click(function(){ // on click the light and dark option perfrom toggle function
		$('ul').toggleClass('active') //Toggle between the light and dark options
		$('section').toggleClass('dark') // targeting the dark option css
	})
})