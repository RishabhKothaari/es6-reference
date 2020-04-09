/**
 * let keyword
 * Lets you create a block level variable and the variable is only accessible wihtin
 * block in which it was created/initialized.
 * The problem with var is that it can be accessed outside of block hence opens doors for
 * various side effects
 */

//example 1
function sayHello(name) {
  for (var i = 0; i <= 2; i++) {
    console.log("Hello " + name);
  }
  console.log("i = " + i); // i = 3
}
function sayHelloModern(name) {
  for (let i = 0; i <= 2; i++) {
    console.log("Hello " + name);
  }
  //console.log("i = "+i); // error
}
sayHello("Octocat");
sayHelloModern("Octocat");

/**
 * const keyword is used to bind a value to a variable. The value to which the variable is
 * bound cannot be changed. In case of primitive bindings the value cannot be modified but
 * in case of reference types like Array,function and Object their property can be changed.
 * When we change the properties we are not changing the binding but only the modifying the
 * properties internal to value.
 */

const pi = 3.142;
//pi = 22 / 7; // error

const name = "Octocat";
//name = "Cat"; // error

const person = {
  name: "Octocat",
  sayHello: function () {
    return "Hello I am " + this.name;
  },
  walk: function () {
    return "I am walking";
  },
  //es6 way of adding a method to a object skip the ':'
  run() {
    return "I am running";
  },
};
console.log(person.name); //Octocat
console.log(person.sayHello()); //Hello I am Octocat
person.name = "kitten";
person.sayBye = function () {
  return "Bye I am " + person.name;
};
console.log(person.run());
console.log(person.sayBye()); //Bye

/**
 * this keyword
 * this always refers to the object with which the method is called and is undefined if the
 * method is called from a reference.
 * Functions in JavaScript are objects so we can bind object to a reference
 */

const animal = {
  name: "Octocat",
  walk() {
    // console.log(this);
  },
};
console.log(animal.walk()); // animal object

const octoWalk = animal.walk; // refrence to animal.walk()
octoWalk(); // window or undefined
/**
 * use bind to bind the reference
 */
const octoKitten = {
  name: "kitten",
  speak() {
    console.log("meow..meow from ", this);
  },
};
const speak = octoKitten.speak.bind(octoKitten);
speak(); // meow..meow..octoKitten

//Arrow functions
const players = [
  { id: 1, name: "John", wins: 5, loss: 3 },
  { id: 2, name: "Doe", wins: 6, loss: 3 },
  { id: 3, name: "Jimmy", wins: 0, loss: 2 },
];

//grab all the players with win/loss ratio <= 60
function getSuperPlayer(player) {
  return player.wins / player.loss >= 0.6;
}

let superPlayers = players.filter(getSuperPlayer);
console.log("super players", superPlayers);
/**
 * Arrow functions
 * In short arrow functions are anonymous functions with a simpler sytactic sugar
 * Arrow functions do not have their own arguments object.
 * Thus, arguments is simply a reference to the arguments of the enclosing scope
 */
//filter palyers where palyer has a win/loss ratio of >= 60%
superPlayers = players.filter((p) => {
  return p.wins / p.loss >= 0.6;
});
// with one argument you can get rid of the () for arguments
superPlayers = players.filter((p) => p.wins / p.loss >= 0.6);
console.log("super players with arrow functions = ", superPlayers);

/*
var arguments = [1, 2, 3];
var arr = () => arguments[0];

arr(); // 1

function foo(n) {
  var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3); // 6
*/
