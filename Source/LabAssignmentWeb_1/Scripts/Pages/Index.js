var educationType = "";
var semester = "";
var option = "";
$(function () {
    $("#education li a").click(function () {  // getting the dropdown items  and validating...
        var edu = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(edu + ' <span class="caret"></span>');
        educationType = $(this).text();
    });

    $("#sem li a").click(function () {   // getting the dropdown items  and validating...
        var sem = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(sem + ' <span class="caret"></span>');
        semester = $(this).text();
    });

    $("#career_option li a").click(function () {   // getting the dropdown items  and validating...
        var op = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(op + ' <span class="caret"></span>');
        option = $(this).text();
    });

    
    $("#availableClasses").dataTable({   // prepares the data table to display based on user selection..
        responsive: true,
        "columnDefs": [
            { "orderable": false, "width": "200px", "targets": [9] }
        ],
        "columns": [
            { "data": "Instructor", className: "min-desktop" },
            { "data": "Course Description", className: "min-desktop" },
            { "data": "Prerequisites", className: "min-desktop" },
            { "data": "Credit hours", className: "min-desktop" },
            { "data": "Duration", className: "min-desktop" },
            { "data": "Rating", className: "min-desktop" },
            { "data": "Reviews", className: "min-desktop" },
            { "data": "Similar courses", className: "min-desktop" },
            { "data": "Image", className: "min-desktop" },
            { "data": "URL", className: "min-desktop" },
        ]
    });
    $('#availableClasses').parents('div.dataTables_wrapper').first().hide();

    $("#availableClasses").hide();
    courseAvailable();
});

function courseAvailable() {
    $("#Submit").click(function () {	
        $("#error").text("");
        if (educationType == "Bachelors" && semester == "Spring" && option == "Computer Science") {  // displays the data for particular selection.
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();
            $("#lee").show();
            $("#choi").hide();
            $("#zheng").hide();
			  $("#thulasi").hide();
            $("#Dhana").hide();
            $("#Bala").hide();
			 $("#Robin").hide();
            $("#John").hide();
            $("#Teresa").hide();
        }
		else if (educationType == "Bachelors" && semester == "Fall" && option == "Computer Science") {  // displays the data for particular selection.
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();
            $("#lee").hide();
            $("#choi").show();
            $("#zheng").hide();
			 $("#thulasi").hide();
            $("#Dhana").hide();
            $("#Bala").hide();
			 $("#Robin").hide();
            $("#John").hide();
            $("#Teresa").hide();
        }
		else if (educationType == "Bachelors" && semester == "Summer" && option == "Computer Science") { // displays the data for particular selection.
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();
            $("#lee").hide();
            $("#choi").hide();
            $("#zheng").show();
			 $("#thulasi").hide();
            $("#Dhana").hide();
            $("#Bala").hide();
			 $("#Robin").hide();
            $("#John").hide();
            $("#Teresa").hide();
        }
		else if (educationType == "Bachelors" && semester == "Spring" && option == "Law"){	  // displays the data for particular selection.
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();		
			$("#lee").hide();
            $("#choi").hide();
            $("#zheng").hide();
			 $("#thulasi").hide();
            $("#Dhana").hide();
            $("#Bala").hide();
			 $("#Robin").show();
            $("#John").hide();
            $("#Teresa").hide();
			
		}
		else if (educationType == "Bachelors" && semester == "Fall" && option == "Law") {  // displays the data for particular selection.
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();
            $("#lee").hide();
            $("#choi").hide();
            $("#zheng").hide();
			  $("#thulasi").hide();
            $("#Dhana").hide();
            $("#Bala").hide();
			 $("#Robin").hide();
            $("#John").show();
            $("#Teresa").hide();
        }
		else if (educationType == "Bachelors" && semester == "Summer" && option == "Law") {  // displays the data for particular selection.
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();
            $("#lee").hide();
            $("#choi").hide();
            $("#zheng").hide();
			 $("#thulasi").hide();
            $("#Dhana").hide();
            $("#Bala").hide();
			 $("#Robin").hide();
            $("#John").hide();
            $("#Teresa").show();
        }
		else if (educationType == "Masters" && semester == "Spring" && option == "Computer Science") {  // displays the data for particular selection.
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();
            $("#lee").hide();
            $("#choi").hide();
            $("#zheng").show();
			 $("#thulasi").hide();
            $("#Dhana").hide();
            $("#Bala").hide();
			 $("#Robin").hide();
            $("#John").hide();
            $("#Teresa").hide();
        }
		else if (educationType == "Masters" && semester == "Fall" && option == "Computer Science"){	 // displays the data for particular selection.
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();		
			$("#lee").hide();
            $("#choi").show();
            $("#zheng").hide();
			 $("#thulasi").hide();
            $("#Dhana").hide();
            $("#Bala").hide();
			 $("#Robin").hide();
            $("#John").hide();
            $("#Teresa").hide();
			
		}
		else if (educationType == "Masters" && semester == "Summer" && option == "Computer Science"){	  // displays the data for particular selection.
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();		
			$("#lee").show();
            $("#choi").hide();
            $("#zheng").hide();
			 $("#thulasi").hide();
            $("#Dhana").hide();
            $("#Bala").hide();
			 $("#Robin").hide();
            $("#John").hide();
            $("#Teresa").hide();
			
		}
		else if (educationType == "Masters" && semester == "Spring" && option == "Law") {   // displays the data for particular selection.
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();
            $("#lee").hide();
            $("#choi").hide();
            $("#zheng").hide();
			 $("#thulasi").hide();
            $("#Dhana").hide();
            $("#Bala").hide();
			 $("#Robin").hide();
            $("#John").hide();
            $("#Teresa").show();
        }
		else if (educationType == "Masters" && semester == "Fall" && option == "Law"){		  // displays the data for particular selection.
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();		
			$("#lee").hide();
            $("#choi").hide();
            $("#zheng").hide();
			 $("#thulasi").hide();
            $("#Dhana").hide();
            $("#Bala").hide();
			 $("#Robin").hide();
            $("#John").show();
            $("#Teresa").hide();
			
		}
		else if (educationType == "Masters" && semester == "Summer" && option == "Law"){	  // displays the data for particular selection.
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();		
			$("#lee").hide();
            $("#choi").hide();
            $("#zheng").hide();
			 $("#thulasi").hide();
            $("#Dhana").hide();
            $("#Bala").hide();
			$("#Robin").show();
            $("#John").hide();
            $("#Teresa").hide();
			
		}
		else if (educationType == "" || semester == "" || option == "") {  // If nothing is selected
            $("#error").text("Please select all options");
        } else {
            $("#availableClasses").show();
            $('#availableClasses').parents('div.dataTables_wrapper').first().show();
            $("#lee").hide();
            $("#choi").show();
            $("#zheng").show();
        }


    });


}

