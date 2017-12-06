// Write a function called reduceMin that uses the reduce method to return the minimum number in an array of numbers. 
// Do NOT use a loop.

// Examples:

// reduceMin([2, 3, 4, 5, 1]); //returns 1
// reduceMin([6, 7, 7, 4]); //returns 4
// reduceMin([10, 0, 100, 1, -100, 20, 33]); //returns -100

const reduceMin = arr => {
    let newArr = arr.reduce((acc, curr) => {
        if (acc < curr) {
            return acc
        } else if (curr < acc) {
            return curr
        }

        // return acc + curr
    })
    return newArr
}

console.log(reduceMin([2, 3, 4, 5, 1]))