var userChoice = prompt("Please enter your choice?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

document.write("<p>Computer:" + " " + computerChoice + "</p>");
//userchoice and computerChoice
function compare(choice1,choice2) {
    if (choice1 === choice2) {
        return "It's a tie game!";
    }
    if (choice1 === "rock" || choice1 === "Rock" || choice1 === "ROCK") {
        if (choice2 === "paper") {
            // scissors wins
            return "Computer wins!";
        } else {
            // rock wins
            return "User Wins!";
        }
    }
    if (choice1 === "paper" || choice1 === "Paper" || choice1 === "PAPER") {
        if (choice2 === "rock") {
            // rock wins
            return " User wins!";
        } else {
            // paper wins
            return "Computer Wins!";
        }
    }
    if (choice1 === "scissors" || choice1 === "Scissors" || choice1 === "SCISSORS") {
        if (choice2 === "rock") {
            // rock wins
            return "Computer Wins!";
        } else {
            // scissors wins
            return "User win!";
        }
    }
	else
	{
		return "Invalid User Input, please check and try again..";
	}
};


if (! userChoice) {

    document.write("<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>");
} else {
    // Display user choice
    document.write("<p> User:" + " " + userChoice + "</p>");
}
// Run the compare function
var results = compare(userChoice,computerChoice);
// Display results
document.write("The Final Game Results:<br>---------------------------<br>" + results);