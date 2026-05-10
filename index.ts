interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
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

function logPerson(person: Person) {
  console.log(
    `- ${person.name}, ${person.age}, ${person.type === "admin" ? person.role : person.occupation}`,
  );
}

// SOLUTION
// Overload 1 — teaches TypeScript: 'user' input = User[] output
function filterPersons(
  persons: Person[],
  personType: "user",
  criteria: Partial<Omit<User, "type">>,
): User[];
// Overload 2 — teaches TypeScript: 'admin' input = Admin[] output
function filterPersons(
  persons: Person[],
  personType: "admin",
  criteria: Partial<Omit<Admin, "type">>,
): Admin[];
// Implementation — the actual running code
function filterPersons(
  persons: Person[],
  personType: "user" | "admin",
  criteria: Partial<Omit<User, "type">> | Partial<Omit<Admin, "type">>,
): Person[] {
  return persons
    .filter((person) => person.type === personType)
    .filter((person) => {
      let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
      return criteriaKeys.every((fieldName) => {
        return person[fieldName] === (criteria as any)[fieldName];
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
