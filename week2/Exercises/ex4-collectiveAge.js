const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
];

// callback function
function ageOfMembers(members) {
  const membersAge = members.map(member => member.age)
  return membersAge;
}


function addAges(members) {
  const totalAges = members.reduce((a, b) => a + b);
  return totalAges;
}

const result = addAges(ageOfMembers(hackYourFutureMembers));

console.log(`The collective age of the HYF team is: ${result}`);