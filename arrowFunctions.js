/**
 * Arrow functions
 * In short arrow functions are anonymous functions with a simpler sytactic sugar
 * Arrow functions do not have their own arguments object.
 * Thus, arguments is simply a reference to the arguments of the enclosing scope
 * Arrow functions do not rebind the ```this``` keyword
 */
//filter palyers where palyer has a win/loss ratio of >= 60%

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

// Arrow functions do not rebind this keyword
const person1 = {
  talk() {
    setTimeout(function () {
      console.log("this", this); // will refer the window object or the global scope
    }, 1000);
  },
};

const person2 = {
  talk() {
    setTimeout(() => {
      console.log("this", this); // will refer the person object as the binding of this is not altered
    }, 1000);
  },
};
