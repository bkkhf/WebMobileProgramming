var colors = [ "33ccff", "cc9900", "71b5c2", "cc0066", "9933ff", "e6bd01", "104393", "ca4d94"];

function setPreviewColor(color) {
    $('.preview').css('background-color', color);
    $('.color-code').text($('.preview').css('background-color'));
}
function addBox(color) {
    $('#colors').prepend("<div class='item' style='background-color: " + color + ";'><div>");
}
$(document).ready(function(){
    $.each( colors, function( i, val ) {
        addBox(val);
    });

    setPreviewColor(colors[Math.floor(Math.random()*colors.length)]);
    $(document).on('keydown keyup keypress', '#color', function(){
        color = $(this).val();
        setPreviewColor(color);
    })

    //adding favorite color when clicks on a button #to fav-color
    $( "#add-to-favorite" ).click(function() {
        color = $(this).prev().val();
		
		if (color != "") { 
			if (colors.length<9) {
				addBox(color);
				$(this).prev().val("");
				$(this).prev().focus();
			}
			else
			{
				$('#div').remove(".colors");
				addBox(color);
				$(this).prev().val("");
				$(this).prev().focus();
			}
		}
        else {
			alert("Please enter the proper color name.");
			document.getElementById("color").focus();
		}
    });

   //on mouse hover
    $(document).on('mouseover', '.item', function(){
        color = $(this).css("background-color");
        setPreviewColor(color);
    })


});