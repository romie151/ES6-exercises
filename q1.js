// Write a function that uses the forEach array method to log every member of an array to the console. 
// The function should only take one argument, the array. The function should NOT use a for loop.

const aFunction = (arr) => arr.forEach(element => {
    console.log(element)
});

aFunction([1, 2, 3, 4,])