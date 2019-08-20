jQuery(document).ready(function() {


	$("#typed").typed({
		// strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
		stringsElement: $('#typed-strings'),
		typeSpeed: 50,
		backDelay: 1000,
		loop: true,
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount: false,
		callback: function(){ foo(); },
		resetCallback: function() { newTyped(); }
	});

	$(".reset").click(function(){
		$("#typed").typed('reset');
	});


    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }


});

function popup(box) {
	comment= confirm("Do you want to leave a comment?")
	if(comment)
	{
	document.write("comment_box")
	}
	else
	{
	document.write("You cancelled")
	}
}
//-->
