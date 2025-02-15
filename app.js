let userScore =0;
let comScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreText = document.querySelector("#user");
const CompScoreText = document.querySelector("#computer");

choices.forEach((choice)=>
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");


         playGame(userChoice);
    })
)

const playGame = (userChoice) =>{
    console.log("User Choice",userChoice);
    //generate computer choice
    const computerChoice= genCompChoice();
    console.log("Computer Choice",computerChoice);
    
    if(userChoice===computerChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = computerChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            userWin = computerChoice==="scissors"? false:true;
        }else if(userChoice==="scissors"){
            userWin = computerChoice==="rock"?false:true;
        }else{
            userWin=true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
    
}

const showWinner=(userWin,userChoice, computerChoice)=>{
    if(userWin){
        userScore++;
        userScoreText.innerText = userScore;
        msg.innerText= `You Won! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor =  "#008000";
    }
    else{
        comScore++;
        CompScoreText.innerText = comScore;
        msg.innerText=`Computer Won! ${computerChoice} beats your ${userChoice}`
        msg.style.backgroundColor =  "#d90429";
    }
}

const genCompChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    const randomidx= Math.floor(Math.random()*3);
    return options[randomidx];
}

const drawGame = () =>{
    msg.innerText="Move Draw!"
    msg.style.backgroundColor =  "#2b2d42";

}