const reverseString = function(input) {
    const inputLetters = input.split('').reverse();
    
    let output = '';
    inputLetters.forEach(letter => {
        output += letter;
    });

    return output;
};

// Do not edit below this line
module.exports = reverseString;
