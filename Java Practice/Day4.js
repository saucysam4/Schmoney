// // ex 1

// function infoAboutMe() {
//     console.log("Name: Sam Levin");
//     console.log("Description: I am an 18 year old studing code in Israel");
// }

// infoAboutMe();

// // pt 2
// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(personName + " is " +personAge+ " and their favorite color is " +personFavoriteColor)
// }

// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");

// ex 2

// function calculateTip() {
//     const billAmount = parseFloat(prompt("Enter the amount of the bill:"));

//     let tipPercentage;
//     if (billAmount < 50) {
//         tipPercentage = 0.20; // 20% tip if bill is less than $50
//     } else if (billAmount >= 50 && billAmount <= 200) {
//         tipPercentage = 0.15; // 15% tip if bill is between $50 and $200
//     } else {
//         tipPercentage = 0.10; // 10% tip if bill is more than $200
//     }

//     const tipAmount = billAmount * tipPercentage;
//     const finalBill = billAmount + tipAmount;

//     console.log("Bill Amount: $" + billAmount.toFixed(2));
//     console.log("Tip Percentage: " + (tipPercentage * 100) + "%");
//     console.log("Tip Amount: $" + tipAmount.toFixed(2));
//     console.log("Final Bill Amount: $" + finalBill.toFixed(2));
// }

// calculateTip();

// ex 3


// function isDivisible() {
//     var sumDivisibleBy23 = 0; 

//     for (var i = 0; i <= 500; i++) {
//         if (i % 23 === 0) {
//             console.log(i + " is divisible by 23");
//             sumDivisibleBy23 += i; 
//         }
//     }

//     console.log("The sum of numbers divisible by 23 is: " + sumDivisibleBy23);
// }

// isDivisible();


// Daily Challenge

var wordsInput = prompt("Please enter several words separated by commas:");
var wordsArray = wordsInput.split(',');

var maxLength = 0;
wordsArray.forEach(function(word) {
    if (word.length > maxLength) {
        maxLength = word.length;
    }
});

console.log("*".repeat(maxLength + 4));

wordsArray.forEach(function(word) {
    var frame = "* " + word + " ".repeat(maxLength - word.length) + " *";
    console.log(frame);
});

console.log("*".repeat(maxLength + 4));



