// Write a function named countOddsAndEvens that takes an array of numbers as argument. 
// The function should return an object that has two properties: 
// odds - the number of odd numbers in the array, and events - the number of the even numbers in the array. 
// Use the reduce method. Do not use a for loop, while loop, or forEach.

// Examples:

// countOddsAndEvens([11, 2, 36, 4, 15]);
// // returns {odds: 2, evens: 3}
// countOddsAndEvens([1, 2, 3, 4, 5, 5, 99, 101]);
// // returns {odds: 6, evens: 2}


const countOddsAndEvens = arr => {
    var countOdd = 0
    var countEven = 0
    arr.map(ele => {
        if (ele % 2 === 0) {
            return countEven += 1
        } else {
            return countOdd += 1
        }
    })
    return ({odds: countOdd, even: countEven})
}

console.log(countOddsAndEvens([1, 2, 3, 4, 5, 5, 99, 101]))
