
alert("welcome to the guessing game");
const WantToPlay=confirm("  do you want to play anumber guessing game?");
if(WantToPlay){
    const randomNumber=Math.floor(Math.random()*10)+1;

    for(let attempt=1;attempt<=3;attempt++){
        let UserGuess=prompt("Attempt"+attempt+"Guess a number between 1 to 10");

if(parseInt(UserGuess)===randomNumber){
alert("congratulation!you guessed the correct number:"+randomNumber);
   break;
}
else{
    if(attempt<3){
        alert("Wrong guess!Try again");
    }
    else{
        alert("Game over! the correct number was"+randomNumber);
    }
}
    }
}
else{
    alert("No problem! maybe next time");
}