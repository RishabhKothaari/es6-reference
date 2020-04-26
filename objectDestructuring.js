/**
 * Object destructuring allows you to create or copy object properties
 * into new object
 */

const person = {
  firstname: "John",
  lastname: "Doe",
  age: 21,
  profession: "Sales",
  address: {
    street: "abc street",
    city: "Portland",
    state: "Oregon",
    country: "USA",
  },
};

const {
  firstname,
  middlename: middle = "Rad", //default only respected when value is undefined in the original object
  lastname,
  address: adr,
} = person;
console.log(person);
console.log(firstname); //destructured from person
console.log(middle); // destructured and default value as it is undefined in person
console.log(lastname); //destructured from person
console.log(adr); //destructured from person
