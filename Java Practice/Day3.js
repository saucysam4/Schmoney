// // ex 1

// // 1 
// const people = ["Greg", "Mary", "Devon", "James"];
// const indexToRemove = people.indexOf("Greg");
// if (indexToRemove !== -1) {
//     people.splice(indexToRemove, 1);
// }
// console.log(people);

// // 2
// const indexToReplace = people.indexOf("James");
// if (indexToReplace !== -1) {
//     people[indexToReplace] = "Jason";
// }
// console.log(people);

// // 3
// people.push("Sam");
// console.log(people);

// // 4
// const maryIndex = people.indexOf("Mary");
// console.log("Mary's index is:", maryIndex); 

// // 5
// const samIndex = people.indexOf("Sam");
// const peopleCopy = people.slice(0, maryIndex).concat(people.slice(maryIndex + 1, samIndex), people.slice(samIndex + 1));
// console.log(peopleCopy);

// // 6
// const fooIndex = people.indexOf("Foo");
// console.log("Index of 'Foo':", fooIndex);

// // 7
// const last = people[people.length - 1];
// console.log("Last"); 

// // Part 2
// // 1
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// // 2
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] === "Devon") {
//         break; // Exit the loop if "Devon" is found
//     }
// }


// ex 2
// 1 
// const colors = ["purple", "blue", "pink", "black", "gold"];
// for (let i = 0; i < colors.length; i++) {
//     console.log("My #" + (i + 1) + " choice is " + colors[i]);
// }
// for (let i = 0; i < colors.length; i++) {
//     let suffix;
//     if (i + 1 === 1) {
//         suffix = "st";
//     } else if (i + 1 === 2) {
//         suffix = "nd";
//     } else if (i + 1 === 3) {
//         suffix = "rd";
//     } else {
//         suffix = "th";
//     }
//     console.log("My " + (i + 1) + suffix + " choice is " + colors[i]);
// }


// ex 3
// const userInput = prompt("Please enter a number:");
// console.log("You entered:", userInput);

// let userInput = prompt("Please enter a number:");
// userInput = parseFloat(userInput);

// while (userInput < 10) {
//     userInput = prompt("Please enter a number:");
//     userInput = parseFloat(userInput);
// }

// console.log("The entered number is:", userInput);


// ex 4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// 2
// console.log("Number of floors in the building:", building.numberOfFloors);

// 3
// const apartmentsOnFirstFloor = building.numberOfAptByFloor.firstFloor;
// const apartmentsOnThirdFloor = building.numberOfAptByFloor.thirdFloor;

// console.log("Number of apartments on the first floor:", apartmentsOnFirstFloor);
// console.log("Number of apartments on the third floor:", apartmentsOnThirdFloor);

// // 4
// const secondTenantName = building.nameOfTenants[1]; 
// console.log("Name of the second tenant:", secondTenantName);
// console.log(building.numberOfRoomsAndRent.dan[0])

// // 5
// const sarahRent = building.numberOfRoomsAndRent.sarah[1];
// const davidRent = building.numberOfRoomsAndRent.david[1];
// const danRent = building.numberOfRoomsAndRent.dan[1];

// const sumSarahDavidRent = sarahRent + davidRent;

// if (sumSarahDavidRent > danRent) {
//     building.numberOfRoomsAndRent.dan[1] = 1200;
//     console.log("Dan's rent has been increased to 1200.");
// } else {
//     console.log("Dan's rent is not smaller than the sum of Sarah's and David's rent.");
// }


// // ex 5
// const family = {
//     father: "John",
//     mother: "Mary",
//     children: ["Emily", "Jack"],
//     pets: {
//         dog: "Max",
//         cat: "Luna"
//     },
//     address: {
//         city: "New York",
//         street: "123 Main St",
//         zipcode: "10001"
//     }
// };

// console.log(family);

// for (let key in family) {
//     console.log(key);
// }

// for (let key in family) {
//     console.log(family[key]);
// }


// ex 6
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   };
  
//  for(let i in details){
//     console.log(i);
//     console.log(details[i]);
//  }

  


// ex 7
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// const firstLetters = [];
// for (let i = 0; i < names.length; i++) {
//     const firstLetter = names[i][0];
//     firstLetters.push(firstLetter);
// }
// firstLetters.sort();
// console.log(firstLetters); // Output: ["A", "B", "J", "K", "P", "S"]

// // 2
// const secretSocietyName = firstLetters.join('');
// console.log(secretSocietyName); // Output: "ABJKPS"




// Daily Challenge
// one loop

// const numberOfRows = 6;
// let pattern = '';

// for (let i = 1; i <= numberOfRows; i++) {
//     pattern += '* ';
//     console.log(pattern);
// }

// // two nested for loops

// const numberOfRows = 6;

// for (let i = 1; i <= numberOfRows; i++) {
//     let pattern = '';
//     for (let j = 1; j <= i; j++) {
//         pattern += '* ';
//     }
//     console.log(pattern);
// }


