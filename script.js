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
        }, 5000);
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
};


//Testimonial slider session
const testimonialContent=[
    {
        'name': '-Tobi',
        'statement': ' "I love how this website combines both usefulness and fun. The testimonial section feel professional and trustworthy,while the rock-paper-scissors game adds a playful touch that keeps me engaged. plus the design looks great on my phone and laptop" ',
        'imgUrl': 'images/img1.jpg'
    },
    { 
        'name':'-David',
        'statement':' "The design of this site is so clean and easy to navigate. I really like how the testimonial section looks professional while the game keeps things lively." ',
        'imgUrl':'images/img2.jpg'
    },
    {
        'name': '-Anita',
        'statement': ' "I was impressed by how responsive the layout is. Everything adjust smoothly on my phone,and the rock-paper-scissors game works perfectly too!" ',
        'imgUrl': 'images/img3.jpg'
    },
    {
    'name': '-Favour',
    'statement': ' "This project is a smart mix of creativity and functionality. it is not just fun to play,but also shows how well web design can engage users." ',
    'imgUrl': 'images/img4.jpg'
    }
];

const bgcolor = ['rgb(230, 222, 222)', 'rgba(160, 192, 223, 1)', 'rgba(245, 232, 183, 1)', 'rgba(169, 228, 169, 1)']

let count1=0;

window.setInterval(function () {
    //reset count if it exceed array length
    if (count1>=testimonialContent.length){
        count1=0;
    }

    const testimonialSlider = document.getElementById("testimonials");
    Object.assign(testimonialSlider.style, {
        appearance: 'none',
        webkitAppearance: 'none',
        background: bgcolor[count1 % bgcolor.length]
    });

    document.getElementById("name").innerHTML = testimonialContent[count1].name;
    document.getElementById("statements").innerHTML = testimonialContent[count1].statement;
    document.getElementById("imageUrl").src = testimonialContent[count1].imgUrl;

    console.log(count1,testimonialContent[count1])
    count1++;
}, 6000
);