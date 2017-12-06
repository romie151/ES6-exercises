// Write a function called filterEvens 
// that uses the filter method to filter an array and only return the even numbers. 
// The function should take an array of numbers as an argument, and should not use a loop.

// Examples:

// filterEvens([1, 2, 3, 11, 12, 13]); //returns [2,12]
// filterEvens([22, 2, 31, 110, 6, 13]); //returns [22,2,110,6]


let filterEvens = (arr) => arr.filter(ele => {
    if (ele % 2 === 0) {
        return ele
    }
})



console.log(filterEvens([1, 2, 3, 4, 5, 6]))