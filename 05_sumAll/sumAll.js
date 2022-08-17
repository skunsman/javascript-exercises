const sumAll = function(start, end) {
    if (start < 0 || end < 0) {
        return 'ERROR';
    } else if (typeof(start) != "number" || typeof(end) != "number" ) {
        return 'ERROR';
    }

    if (start > end) {
        const newEnd = start;
        start = end;
        end = newEnd;
    }
    let total = 0;

    for (let i = start; i <= end; i++) {
        total += i;
    }
    
    return total;
};

// Do not edit below this line
module.exports = sumAll;
