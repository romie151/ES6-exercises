// Write a function called map that takes two arguments: an array and a function. 
// map should apply the function to every member of the array, and return a new array with the results.

// Example:

// var arr = [1, 2, 3, 4, 5];


// map(arr, num => num * 2); // returns [ 2, 4, 6, 8, 10 ]

const map = (arr, func) => {
    var newArr = []
    for (var i = 0; arr.length - 1; i++) {
        return newArr.push(func(arr[i]));
    }
    return newArr
}

var arr = [1, 2, 3, 4, 5]
console.log(map(arr, num => num * 2))