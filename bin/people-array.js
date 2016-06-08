'use strict';

let loadPeople = require('../lib/people.js');

loadPeople().then((people) => {
  let count = people.reduce((memo/*, person */) => {
    return memo + 1;
  }, 0);
  console.log(`count: ${count}, length: ${people.length}`);

  const isFemale = (person) => {
    return person.gender === "f";
  };

  let female = people.filter(isFemale).length;
  console.log(`female: ${female}, total: ${people.length}`);

  // // Jeff Horn is 30 years old.
  // people.forEach((person) => {
  //   console.log(`${person.given_name} ${person.surname} is ${person.age()} years old.`);
  // });
}).catch((error) => console.log(error));
