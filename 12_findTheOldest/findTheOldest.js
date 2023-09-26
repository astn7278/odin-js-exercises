findTheOldest = function (arr) {
    return arr.reduce((oldestPerson, currentPerson) => {
        return deathYear(currentPerson) - currentPerson.yearOfBirth >
            deathYear(oldestPerson) - oldestPerson.yearOfBirth
            ? currentPerson
            : oldestPerson;
    });
};

const currentYear = new Date().getFullYear();
const deathYear = function (obj) {
    return obj.hasOwnProperty("yearOfDeath") ? obj.yearOfDeath : currentYear;
};

/*
const findTheOldest = (arr) => {
    return arr.reduce((oldestPerson, currentPerson) => {
        if ((currentPerson.yearOfDeath - currentPerson.yearOfBirth) > (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth)) {
            return currentPerson;
        }
        else {
            return oldestPerson;
        }
    })
}

let result = arr.reduce((sum, current) => sum + current, 0);
*/

// Do not edit below this line
module.exports = findTheOldest;
