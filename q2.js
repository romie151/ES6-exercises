// Write a function called greaterThan10 
// that uses the filter method to filter an array and only return numbers that are greater than 10. 
// The function should take an array of numbers as an argument.

// Examples:

// greaterThan10([1, 2, 3, 11, 12, 13]); //returns [11,12,13]
// greaterThan10([11, 2, 3, 1, 22, 4, 33]); //returns [11,22,33]

const greaterThan10 = (arr) => arr.filter(ele => {
    if (ele > 10) {
        return ele
    }
})



console.log(greaterThan10([1, 2, 3, 10, 11, 12]))