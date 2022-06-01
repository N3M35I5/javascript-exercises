const findTheOldest = function(people) {
    let oldestPerson=null;
    const d = new Date();
    people.forEach(person => {
        if(!('yearOfDeath'  in person))
            person.yearOfDeath=d.getFullYear();
        let age=person.yearOfDeath-person.yearOfBirth
        if(oldestPerson==null || age>(oldestPerson.yearOfDeath-oldestPerson.yearOfBirth))
        {
            oldestPerson=person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
