//.The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.
let userInput = prompt('Rock, Paper, or Scissors ?', 'insert your choice here...');
//Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.You can use code like this: userInput = userInput.toLowerCase();
userInput = userInput.toLowerCase();
//When getting the user’s choice, you should also check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’. Inside getUserChoice(), write an if/else statement that makes sure the userInput is either 'rock', 'paper', or 'scissors'. If it does, then return the userInput. If not, use console.log to print an error message to the console.

//const getUserChoice = userInput => {
 //userInput = userInput.toLowerCase(); 
 // if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  //  return userInput;
  //} else {
  //  console.log('Error!');
 // }
//}

//Now we need to have the computer make a choice. Create a new function named getComputerChoice with no parameters. Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2. Then, depending on the number, return either 'rock', 'paper', or 'scissors'.
const getComputerChoice = () => {
  let getNbr = Math.floor(Math.random()*2);
  if (getNbr === 0) {
    return 'rock';
  } else if (getNbr === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};
//Now it’s time to determine a winner. Create a function named determineWinner that takes two parameters named userChoice and computerChoice. This function will compare the two choices played and then return if the human player won, lost, or tied. Let’s deal with the tie condition first. Within the determineWinner() function, write an if statement that checks if the userChoice parameter equals the computerChoice parameter. If so, return a string that the game was a tie.
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'TIE here !';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'COMPUTER WON !';
    } else {
      return 'USER WON !';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'COMPUTER WON !';
    } else {
      return 'USER WON !';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'COMPUTER WON !';
    } else {
      return 'USER WON';
    }
  }
  if (userChoice === 'bomb') {//cheat code "bomb" that always lets the user to win
      return 'USER WON';
    }
};
//Create a function named playGame. Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), passing in either 'rock', 'paper', or 'scissors' as an argument. Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice(). Under both of these variables, use console.log to print them to the console.
const playGame = () => {
  const userChoice = userInput;
  const computerChoice = getComputerChoice();
  console.log(`userChoice: ${userChoice} 
   VS. computerChoice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));  
};

playGame();
