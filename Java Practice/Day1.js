//ex 1

//let favFood = 'Sushi'
//let favMeal = 'Dinner'

//console.log(' I eat ' + favFood + ' at every ' + favMeal)


//ex 2

// const myWatchedSeries = ["black mirror", " money heist", " and the big bang theory "];
// var myWatchedSeriesLength = myWatchedSeries
// var myWatchedSeriesSentence = 3
// console.log(' I watched ' + myWatchedSeriesSentence + ' series ' + myWatchedSeries)

// myWatchedSeries.splice(2, 'friends');
// myWatchedSeries.push('stranger things');
// myWatchedSeries.unshift('Game of Thrones');
// myWatchedSeries.splice(1,1);

// console.log(myWatchedSeries[1][2]);
// console.log(myWatchedSeries);


// ex 3

// var celc = 20
// var fahr;

// fahr = (celc*(9/5))+32
// console.log(fahr)

// ex 4

// let c;
// let a = 34;
// let b = 21;

// console.log(a+b) //first expression
// // Prediction: 55
// // Actual: 55

// a = 2;

// console.log(a+b) //second expression
// // Prediction: 23
// // Actual: 23

// console.log(3 + 4 + '5');
// //75

// ex 5

// console.log(typeof(15));
// // Prediction: number
// // Actual:

// console.log(typeof(5.5));
// // Prediction: number
// // Actual:

// console.log(typeof(NaN));
// // Prediction: number
// // Actual:

// typeof("hello")
// // Prediction: string
// // Actual:

// console.log(typeof(true));
// // Prediction: number
// // Actual: boolean

// console.log(typeof(1 != 2));
// // Prediction: number
// // Actual: boolean

// "hamburger" + "s"
// // Prediction: hambugers
// // Actual:

// console.log("hamburgers" - "s");
// // Prediction: hambuger
// // Actual: NaN

// "1" + "3"
// // Prediction: 13
// // Actual:

// console.log("1" - "3");
// // Prediction: 1-3
// // Actual: NaN

// console.log("johnny" + 5);
// // Prediction: johnny5
// // Actual:

// "johnny" - 5
// // Prediction: NaN
// // Actual:

// console.log(99 * "hello");
// // Prediction: NaN
// // Actual:

// console.log(1 != 1)
// // Prediction: False
// // Actual:

// console.log(1 == "1")
// // Prediction: True
// // Actual:

// console.log(1 === "1")
// // Prediction: False
// // Actual:


// // ex 6
// 5 + "34"
// // Prediction: 534
// // Actual:

// 5 - "4"
// // Prediction:NaN
// // Actual:

// console.log(10 % 5);
// // Prediction: 0
// // Actual:

// console.log(5 % 10);
// // Prediction: 5
// // Actual:

// "Java" + "Script"
// // Prediction: JavaScript
// // Actual:

// " " + " "
// // Prediction:
// // Actual:

// " " + 0
// // Prediction: 0
// // Actual:

// true + true
// // Prediction: 2
// // Actual:

// console.log(true + false);
// // Prediction: 1
// // Actual:

// false + true
// // Prediction: 1
// // Actual:

// false - true
// // Prediction: -1
// // Actual:

// console.log(!true);
// // Prediction: 0
// // Actual: False

// 3 - 4
// // Prediction: -1
// // Actual:

// "Bob" - "bill"
// // Prediction: NaN
// // Actual:


// Daily Challenge
// ex 1

// const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// fruits.shift();
// var temp = 'oranges';
// fruits.splice(1,1, "Blueberries");
// fruits.splice(2,2, temp);
// fruits.push("kiwi");
// fruits.splice(0,1);
// fruits.reverse();
// console.log(fruits);

// // ex 2
// const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(moreFruits[1][1]);