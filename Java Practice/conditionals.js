let userAge = prompt('What is your age')

if(userAge > 21){
    alert('Nice, we can go to a pub')
}

else if(userAge < 12){
    alert('You are a child!')
}

else {
    alert('Sorry, you need to stay home')
}




let a = 2 + 2;

switch (a) {
  case 4: //exacute if 4 was inputed
    alert('Right!'); //display right
    break; //exit the function

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.'); //if none of the cases were inputed display this
}