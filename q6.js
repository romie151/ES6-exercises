// Write a function that uses the map array method to triple every member of an array. 
// The function should only take one argument, the array. The function should NOT use a loop.

const triple = arr => arr.map(ele => {
    return ele * 3
})

console.log(triple([1,2,3]))