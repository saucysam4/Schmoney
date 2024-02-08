// ex 1

// let x = 5;
// let y = 2;

// if(x>y){
//     console.log("x is bigger")
// }
// else{
//     console.log("y is bigger or equal to x")
// }

// // ex 2
// var newDog = "Chihuahua"
// console.log(newDog.length);
// console.log(newDog.toLowerCase());
// console.log(newDog.toUpperCase);

// if(newDog == "Chihuahua"){
//     console.log("I love Chihuahuas, it's my favorite dog breed");
// }
// else{
//     console.log("I don't care, I like cats")
// }




// // ex 3
// let num = prompt("give number");

// if(num%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// ex 4

// const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// var ppl = users.length-2;
// if(users.length==0){
//     console.log("no ones online");
// }

// if(users.length ==1){
//     console.log(users [0] + "is online");
// }

// if(users.length ==2){
//     console.log(users[0]+users[1]+"are online");
// }

// if(users.length>2){
//     console.log(users[0]+" " +users[1]+ " and " + ppl +" others are online");
// }


// Daily Challenge

var sentence = "Joe Biden is not as bad";
var wordNot = sentence.indexOf("not");
var wordBad = sentence.indexOf("bad");

if(wordNot !== -1 && wordBad !== -1 && wordBad>wordNot){
   sentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
   console.log(sentence)
}

else{
    console.log(sentence)
}
