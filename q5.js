// Write a function called stringsToNums 
// that takes an array of strings, converts them to numbers, and returns a new array containing those numbers. 
// Use the map array method, do not use any loops.

// Examples:

// stringToNums(["4", "3", "9"]); //returns [4,3,9]
// stringToNums(["1", "22", "7"]); //returns [1,22,7]

const stringsToNums = arr => arr.map(ele => {
    return Number(ele)
})

console.log(stringsToNums(["4", "3", "9"]))