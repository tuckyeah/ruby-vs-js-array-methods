'use strict';

let loadPeople = require('../lib/people.js');

// loadPeople().then((people) => {
//   let count = people.reduce((m /*, p */) => m + 1, 0);
//   console.log(`count: ${count}, length: ${people.length}`);
// }).catch((error) => console.log(error));

// Count all the people who are older than you (or just pick an age).
// Count all the people who are younger than you (or just pick an age).
// Count all the people whose first name and last name start with the same letter.
// Calculate the average age of all the people.

loadPeople().then((people) => {
  // people is an array of objects
  // count the total number of people
  console.log('Total people (length property): ', people.length);

  const increment = (accumulator) => {
    return accumulator + 1;
  };

  let count = people.reduce(increment,0);

  console.log('Total people (using reduce) is: ', count);

  const isFemale = (person) => {
    return person.gender === 'f';
  };

  let female = people.filter(isFemale).reduce(increment, 0);

  console.log('Total females (using reduce) is: ', female);

  const isMale = (person) => {
    return person.gender === 'm';
  };

  let male = people.filter(isMale).reduce(increment, 0);

  console.log('Total males (using reduce) is: ', male);

// calculates number of people who are neither 'm' or 'f'
// this is the preferred way because we are not making any assumptions about data

  const genderQueer = (person) => {
    return (person.gender !== 'f' && person.gender !=='m');
  };

  let genderqueers = people.filter(genderQueer).reduce(increment, 0);

  console.log('Total number of genderqueers is: ', genderqueers);

// people older than 25

  const isOlder = (person) => {
    return person.age() > 25;
  };

  let elders = people.filter(isOlder).reduce(increment, 0);

  console.log("Total number of people older than 25: ", elders);

// people younger than 25

  const isYounger = (person) => {
    return person.age() <= 25;
  };

  let youths = people.filter(isYounger).reduce(increment, 0);

  console.log("Total number of people younger than 25: ", youths);

// count all the people whose firstname and last name start with the same letter

  const hasSameLetter = (person) => {
    return person.given_name[0] === person.surname[0];
  };

  let sameLetters = people.filter(hasSameLetter).reduce(increment, 0);

  console.log("First name / last name start with same letter: ", sameLetters);

// average age of all people

  const collectAges = (people) => {
    let res = [];
    people.forEach(function(person){
      res.push(person.age());
    });
    return res;
  };

  const sum = (a, b) => {
    return a + b;
  };

  let averageAge = (collectAges(people).reduce(sum, 0)) / people.length;

  // jeff's solution


  //   const sumAge = (previous, currentPerson) => {
  //     return previous + currentPerson.age();
  // };

  // let averageAge = people.filter(agePresent).reduce(sumAge, 0) / people.length;

    console.log("Average age is: ", Math.floor(averageAge));

}).catch((error) => console.log(error));
