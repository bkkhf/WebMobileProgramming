function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)

    return $.ajax({type: "GET",
        url:"https://api.github.com/users/"+user,
        async: false
    });




}
//2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
function showUser(user) {
    $('#Userprofile h2').html(user.login);
	$('#Userprofile .id').text(user.id);
    //$('#Userprofile .avatar').text(user.avatar_url);
    $('#Userprofile .information').text(user.html_url);
	
	document.getElementById("profileImg").src = user.avatar_url;
	document.getElementById("profileURL").href = user.html_url;
}
//3. No user account message display
function noSuchUser(username) {
    
    $("#Userprofile h2").html(' No User');
	$('#Userprofile .id').text("");
    //$('#Userprofile .avatar').text(user.avatar_url);
    //$('#Userprofile .information').text(user.html_url);
	
	document.getElementById("profileImg").src = "";
	document.getElementById("profileURL").href = "";
}


$(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display error message
            } else {
                noSuchUser(username);
            }
        }
    })
});