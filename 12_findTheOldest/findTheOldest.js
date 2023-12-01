const findTheOldest = function(people) {
    function age(person) {
        if(!person.yearOfDeath) {
            return new Date().getFullYear() - person.yearOfBirth;
        }

        return person.yearOfDeath - person.yearOfBirth;
    }

    people.sort((firstPerson, secondPerson) => (age(firstPerson) < age(secondPerson) ? 1 : -1) );

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
