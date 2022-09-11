const fibonacci = function(fib) {
    if (fib < 0) return 'OOPS';
    if (fib === 0) return 0;

    let prev = 0;
    let next = 1;

    for (let i = 1; i < fib; i++){
        const temp = next;
        next = prev + next
        prev = temp;
    }

    return next;
};

// Do not edit below this line
module.exports = fibonacci;
