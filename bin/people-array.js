'use strict';

let loadPeople = require('../lib/people.js');

// loadPeople().then((people) => {
//   let count = people.reduce((m /*, p */) => m + 1, 0);
//   console.log(`count: ${count}, length: ${people.length}`);
// }).catch((error) => console.log(error));


loadPeople().then((people) => {
  // people is array of objects
  // counting total length:
  let count = people.reduce((memo, person) => {
    return memo + 1;
  }, 0);

  // callback for reduce
  const isFemale = (person) => {
    return person.gender === "f";
  };

  // counting total women
  let female = people.filter(isFemale).reduce((memo, person) => {
    return memo + 1;
  }, 0);

  console.log(`female: ${female}, total: ${count}`);

  // people.forEach((person) => {
  //   console.log(`${person.given_name} ${person.surname} is ${person.age()} years old.`);
  // });
}).catch((error) => console.log(error));
