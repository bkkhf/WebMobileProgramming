

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

function compare(choice1,choice2) {
    if (choice1 == choice2) {
        return "It's a tie game!";
    }
    if (choice1 == "rock" || choice1 == "Rock" || choice1 == "ROCK") {
        if (choice2 == "scissors") {
            // rock wins
            return "Rock wins!";
        } else {
            // paper wins
            return "Rock lose! Paper Wins, Try again.";
        }
    }
    if (choice1 == "paper" || choice1 == "Paper" || choice1 == "PAPER") {
        if (choice2 == "rock") {
            // paper wins
            return " Paper wins!";
        } else {
            // scissors wins
            return "Paper lose! Scissors Wins, Try again.";
        }
    }
    if (choice1 == "scissors" || choice1 == "Scissors" || choice1 == "SCISSORS") {
        if (choice2 == "rock") {
            // rock wins
            return "Rock Wins! Scissors lose, Try again.";
        } else {
            // scissors wins
            return "Scissors win!";
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