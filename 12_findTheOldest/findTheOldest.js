const findTheOldest = function(people) {
    return people.reduce((prev, next) => {
        if (!prev.yearOfDeath) prev.yearOfDeath = new Date().getFullYear();
        if (!next.yearOfDeath) next.yearOfDeath = new Date().getFullYear();

        return ((prev.yearOfDeath - prev.yearOfBirth) >
            (next.yearOfDeath - next.yearOfBirth)) 
            ? prev : next;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
