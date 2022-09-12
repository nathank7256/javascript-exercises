const findTheOldest = function(a) {
    let currentTime = new Date();
    let ages = a.sort((a, b) => ((b.yearOfDeath ?? currentTime.getFullYear()) - b.yearOfBirth) - ((a.yearOfDeath ?? currentTime.getFullYear()) - a.yearOfBirth));
    console.table(ages)
    return(ages[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
