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

let computerChoice = getComputerChoice();

console.log(computerChoice);

const userChoice = prompt("Please enter your choice 1=rock 2=scissor 3= paper:");

function playGame(userChoice, computerChoice){
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

console.log("computer:" + computerChoice);
console.log("user:" + userChoice);
console.log("1=rock 2=scissor 3= paper  " + playGame(userChoice, computerChoice));