$(function () {
    register();
});

function register() {
    $("#register").click(function () {
		if ($("#fName").val().length < 1) {  // validating emptiness of first name text box
			alert("Please enter First Name..");
			$("#registered").text("Please Enter First Name.");
			$("#fName").focus();
			return;
		}
		if ($("#lName").val().length < 1) {  // validating emptiness of last name text box
			alert("Please enter Last Name..");
			$("#registered").text("Please Enter Last Name.");
			$("#lName").focus();
			return;
		}
		if ($("#Id").val().length < 1) {  // validating emptiness of student ID text box
			alert("Please enter Student ID..");
			$("#registered").text("Please Enter Student ID.");
			$("#Id").focus();
			return;
		}
		if ($("#sEmail").val().length < 1) {   // validating emptiness of student Email text box
			alert("Please enter Student Email.");
			$("#registered").text("Please Enter Student Email.");
			$("#sEmail").focus();
			return;
		}
        $("#registered").text("Successfully registered");   // displaying the sucess register message..
        $("#remainingSeats").text($("#remainingSeats").text() - 1);   // Decreasing the available seats..
    });
}