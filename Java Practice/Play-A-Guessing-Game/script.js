let count =0;

function playTheGame(){
    let ans = confirm("Ready to Play?");
    if(ans===false){
        alert("Goodbye!");
    }
    else if(ans === true){
      let  num = prompt("Please type in a number from 0-10");
        if(num>10||num<0){
            alert("Invalid");
        }
        if(isNaN(num)){
            alert("Invalid");
        }
       else{
       let computerNumber = Math.floor(Math.random() * 11);
       count = 0;
       compareNumbers(num, computerNumber);
       }
    }
}

function compareNumbers(number,computer){
while(count<=2){
    if(number==computer){
        alert("WINNER!");
        break;
    }
    if(number>computer){
        alert("Your number is too big");
        number=prompt("Try Again");
    }
    if(number<computer){
        alert("Your number is too small");
        number=prompt("Try Again");
    }
    count++;
}

    alert("Thanks for Playing!!");

}

playTheGame();
