// Write a function that takes a string as a parameter 
// and converts the first letter of each word of the string to upper case. 
// Do not use a for loop, while loop, or forEach.

// Example string : 'the quick brown fox' Expected Output : 'The Quick Brown Fox'

const convert = str => {
    let newS = str.split(" ");
    let ex = newS.map(ele => {
        return ele[0].toUpperCase() + ele.slice(1);
    })

    return ex.join(" ")
}

console.log(convert("the quick brown fox"));