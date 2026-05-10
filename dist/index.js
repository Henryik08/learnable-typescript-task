"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persons = [
  {
    type: "user",
    name: "Micheal Jackson",
    age: 27,
    occupation: "Singer",
  },
  { type: "admin", name: "Lara Jane", age: 30, role: "Nurse" },
  {
    type: "user",
    name: "Stephen Harris",
    age: 25,
    occupation: "Software Developer",
  },
  { type: "admin", name: "John Davis", age: 54, role: "Doctor" },
  { type: "user", name: "Mark Henry", age: 25, occupation: "Body Builder" },
  { type: "admin", name: "Will Smith", age: 25, role: "Actor" },
];
function logPerson(person) {
  console.log(
    `- ${person.name}, ${person.age}, ${person.type === "admin" ? person.role : person.occupation}`,
  );
}
// Implementation — the actual running code
function filterPersons(persons, personType, criteria) {
  return persons
    .filter((person) => person.type === personType)
    .filter((person) => {
      let criteriaKeys = Object.keys(criteria);
      return criteriaKeys.every((fieldName) => {
        return person[fieldName] === criteria[fieldName];
      });
    });
}
const userOfAge25 = filterPersons(persons, "user", { age: 25 });
const adminOfAge25 = filterPersons(persons, "admin", { age: 25 });
console.log("Users of age 25:");
userOfAge25.forEach(logPerson);
console.log();
console.log("Admins of age 25:");
adminOfAge25.forEach(logPerson);
//# sourceMappingURL=index.js.map
