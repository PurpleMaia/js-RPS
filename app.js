let userScore = 0;
let computerScore = 0;
let userChoice = "";

function getComputerChoice()
{
    const choices = ["R", "P", 'S'];
    let arrayIndex = Math.floor(Math.random() * 3);
    return choices[arrayIndex];
}

function game(userChoice)
{
    let computerChoice = getComputerChoice();
    console.log(userChoice + computerChoice)
    switch(userChoice + computerChoice)
    {
        case "PR":
        case "SP":
        case "RS":
            userScore++;
            console.log('USER WINS');
            //innerHTML adjustment
            break;
        case "PS":
        case "SR":
        case "RP":
            computerScore++;
            console.log("COMPUTER WINS");
            //innerHTML adjustment
            break;
        case "PP":
        case "SS":
        case "RR":
            console.log("It's a tie");
            //innerHTML adjustment
            break;
    }
}

rock.addEventListener("click", function()
{
    userChoice = "R";
    game(userChoice);
    //console.log("Testing the R button");
});
paper.addEventListener("click", function()
{
    userChoice = "P";
    game(userChoice);
    //console.log("Testing the P button");
});
scissors.addEventListener("click", function()
{
    userChoice = "S";
    game(userChoice);
    //console.log("Testing the S button");
});

