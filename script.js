//Rock paper scissors session

//userInput
 var userRock=document.getElementById("rock").value;
var userPaper = document.getElementById("paper").value;
var userScissors = document.getElementById("scissors").value;




//computerInput
var computerInput=["rock","paper","scissors"];


//creating a function for who gets to ten first
function resetScores(score) {
    if (score == 10) {
        var count= window.setTimeout(function () {

            document.getElementById("user-score").innerHTML = 0;
            document.getElementById("computer-score").innerHTML = 0;
            document.getElementById("winner").innerHTML = "";
        }, 3000);
        return "Winner,Congratulation <span>&#127881;&#129395;</span>"
    }
    return score
}


//when the user click rock this happens.......
document.getElementById("rock").onclick=function(){
    //picking from the random  computer input
    const randomIndex = Math.floor(Math.random() * 3);
    const randomInput = computerInput[randomIndex];


    if (userRock==randomInput){
        document.getElementById("outcome").innerHTML="it is a tie";
    }
    else if (userRock!==randomInput && randomInput=="paper"){
        document.getElementById("outcome").innerHTML=randomInput +" beats "+ userRock +","+"Computer wins";
        var computerScore = document.getElementById("computer-score") ;
        var correctScore=parseInt(computerScore.innerHTML);
        correctScore+=1;
        computerScore.innerHTML=resetScores(correctScore);
       

    }
    else if (userRock !== randomInput && randomInput == "scissors")
        {
        document.getElementById("outcome").innerHTML=userRock +" beats " + randomInput +"," + "You win";
        var userScore = document.getElementById("user-score");
        var currentScore = parseInt(userScore.innerHTML);
        currentScore += 1;
        userScore.innerHTML =resetScores( currentScore);
}
}

//when the user click paper
document.getElementById("paper").onclick = function () {
    //picking from the random  computer input
    const randomIndex = Math.floor(Math.random() * 3);
    const randomInput = computerInput[randomIndex];


    if (userPaper == randomInput) {
        document.getElementById("outcome").innerHTML="it is a tie";
    }
    else if (userPaper !== randomInput && randomInput == "scissors") {
        document.getElementById("outcome").innerHTML=randomInput + " beats " + userPaper + "," + "Computer wins";
        var computerScore = document.getElementById("computer-score");
        var correctScore = parseInt(computerScore.innerHTML);
        correctScore += 1;
        computerScore.innerHTML = resetScores(correctScore);
    }
    else if (userPaper !== randomInput && randomInput == "rock") {
        document.getElementById("outcome").innerHTML=userPaper + " beats " + randomInput + "," + "You win";
        var userScore = document.getElementById("user-score");
        var currentScore = parseInt(userScore.innerHTML);
        currentScore += 1;
        userScore.innerHTML = resetScores(currentScore);
    }
}

//when the user click scissors
document.getElementById("scissors").onclick = function () {
    //picking from the random  computer input
    const randomIndex = Math.floor(Math.random() * 3);
    const randomInput = computerInput[randomIndex];


    if (userScissors == randomInput) {
        document.getElementById("outcome").innerHTML="it is a tie";
    }
    else if (userScissors !== randomInput && randomInput == "rock") {
        document.getElementById("outcome").innerHTML=randomInput + " beats " + userScissors + "," + "Computer wins";
        var computerScore = document.getElementById("computer-score");
        var correctScore = parseInt(computerScore.innerHTML);
        correctScore += 1;
        computerScore.innerHTML = resetScores(correctScore);
    }
    else if (userScissors !== randomInput && randomInput == "paper") {
        document.getElementById("outcome").innerHTML=userScissors + " beats " + randomInput + "," + "You win";
        var userScore = document.getElementById("user-score");
        var currentScore=parseInt(userScore.innerHTML);
        currentScore+=1;
        userScore.innerHTML=resetScores(currentScore);
    }
}

