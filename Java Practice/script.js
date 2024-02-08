// let addressNumber = 8
// let addressStreet = 'Btzalel'
// let country = 'Israel'
// let globalAddress = addressNumber + ' ' + addressStreet + ' '+ country
// console.log(globalAddress)


// let birthYear = 2005
// let futureYear = 2053
// let futureAge = futureYear - birthYear

// console.log('I will be ' + futureAge + ' in ' + futureYear)


// for loop

// for (let i = 0; i < 5; i++){
//     console.log('the iteration is ' + i)
// }

// for loop through array

// let arr = [1,2,3,5,8,13]

// for(let i=0; 1 < arr.length; i++){
//     console.log('this is i:' +i + 'this is the element;' +arr[i])
// }


// or in loop
// let teacher = {
//     fullName : 'Albus Dumbledore',
//     subject : 'Transfiguration',
//     role : 'Principal',
//     salary : 25000,
//     method : function (){}
// }

// for (let property in teacher){
//     console.log(property)
//     console.log(teacher[property])
// }

// // while loop

// let count = 0
// while (count < 5){
//     count ++;
//     console.log(count)
// }


let names = ["john", "sarah", 23, "Rudolf", 34];

for (let i = 0; i < names.length; i++) {
    if (typeof names[i] === 'string') {
        if (names[i][0] !== names[i][0].toUpperCase()) {       
            names[i] = names[i][0].toUpperCase() + names[i].substring(1);
        } 
        console.log(names[i]);
    }
}


// for (let i = 0; i < names.length; i++) {
//     if (typeof names[i] !== 'string') {
//         break;
//     } else {
//         console.log(names[i]);
//     }
// }
