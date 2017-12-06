// Write a function called forEachSum 
// that takes in an array of numbers as an argument and returns the sum of the array. 
// The function should use the forEach array method and should NOT use a for loop or while loop.


let forEachSum = arr => arr.forEach(element => {
    var counter = 0;

    return counter += element
});

console.log(forEachSum([1, 2 , 3]))

