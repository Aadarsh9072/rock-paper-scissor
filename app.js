let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let user_scr = document.querySelector("#user-score");
let comp_scr = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw, Play again.";
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `You win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
        userScore++;
        user_scr.innerText = userScore
    }
    else{
        msg.innerText = `You lose!, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
        computerScore++;
        comp_scr.innerText = computerScore;
    }
}

const playGAme = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGAme(userChoice);
    })
})