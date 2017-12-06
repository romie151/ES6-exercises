// Write a function called stringsToNums that takes an array of strings, 
// converts them to numbers, and returns a new array containing those numbers. 
// Use the map array method, do not use any loops.

// Examples:
// stringsToNums(["4", "3", "9"]); //returns [4,3,9]
// stringsToNums(["1", "22", "7"]); //returns [1,22,7]

const stringsToNums = arr => {
    let newArr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        newArr.push(Number(arr[i]))
    }
    return newArr
}

console.log(stringsToNums(["4", "3", "9"]))