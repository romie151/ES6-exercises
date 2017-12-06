// Write a function called sum that uses the reduce method to sum up an array of numbers. Do NOT use a loop.

// Examples:
// sum([1, 2, 3, 4, 5]); //returns 15
// sum([6, 7, 7]); //returns 20

const sum = arr => {
    var newArr = arr.reduce((acc, curr) => {
       return  acc + curr
    })
    return newArr
}

console.log(sum([1, 2, 3, 4, 5]))