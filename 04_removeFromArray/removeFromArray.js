const removeFromArray = function() {
    let list = arguments[0];
    // console.log(arguments.length);
    
    for (let i = 1; i < arguments.length; i++) {
        // console.log(arguments[i]);
        const index = list.indexOf(arguments[i]);

        if (index > -1)
            list.splice(index, 1);
    }
    
    console.log(list);
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
