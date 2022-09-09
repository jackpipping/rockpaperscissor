function getComputerChoice(){
    let rand = Math.random()*100;
    switch(true){
        case(0 == rand):
            return 1
            break;
        case (0 < rand && rand <=33):
            return 1;
            break;   
        case (33 < rand && rand <=66):
            return 2;
            break; 
        case (66 < rand && rand <=100):
            return 3;
            break; 

    }

}






/*
buttons.forEach(element => { element.addEventListener("click", checkChoice(element.id.value, computerChoice) )  
});
buttons.forEach(element => { element.addEventListener("click", displayConsole(element.id.value, computerChoice) )  
});
*/



function checkChoice(userChoice, computerChoice){
    switch(true){
        case(userChoice == 1 && computerChoice == 3):
            return "lose";
            break;
        case(userChoice == 3 && computerChoice == 1):
            return "win";
            break;
        case(userChoice > computerChoice):
            return "lose";
            break;
        case ( userChoice < computerChoice ):
            return "win";
            break;
        case (userChoice == computerChoice):
            return "draw";
            break;
    }
}

function displayRules(){
    
console.log("1=rock 2=scissor 3= paper ");
}

async function playRounds(){
let scorePlayer = 0;
let scoreComputer = 0;
let scores = document.querySelector(".scores");
let finalResult = document.querySelector(".finalResult");

while(scoreComputer != 5 || scorePlayer != 5){


let gameResult = await playGame();
switch(gameResult){
    case "win":
        scorePlayer++;

    case "lose":
        scoreComputer++;
    
}
scores.textContent = "Your score is " + scorePlayer + ", computer's score is "
+ scoreComputer;
if(scoreComputer == 5){
    finalResult.textContent = `Computer won ${scoreComputer} rounds!`;
    console.log("Computer won five rounds!");
    break;
}else{
    if(scorePlayer == 5){
        finalResult.textContent = `You won ${scorePlayer} rounds!`;
        console.log("You won five rounds!"); 
        break; 
    }
    
}
}

   
}

playRounds();

function resolvePlayGame(){
    return new Promise(resolve => {
        resolve(playGame());
      
});

}

async function playGame(){
let result = document.querySelector(".resultRound");
let computerChoice = getComputerChoice();
displayRules();
console.log("Computer Choice is " + computerChoice);

const playerChoice = await getPlayerChoice();

result.textContent = "Computer played " + computerChoice + " You played "
+ playerChoice + " You "+ checkChoice(playerChoice, computerChoice);
return checkChoice(playerChoice, computerChoice);
         
}




function getPlayerChoice(){
    return new Promise(resolve => {
        let buttons = Array.from(document.querySelectorAll('.playerChoice'));

        buttons.forEach(element => { element.addEventListener("click", 
                function(event){
                resolve(element.id);
            })

      });

  
         
});
}


/*let button1 = document.getElementById("1");
button1.addEventListener("click", function(event){console.log(button1.id)}); 
*/