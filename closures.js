/**
 * A function with predefined or stored variable
 */


 // closure
var outer = 3;

var addTo = function(){
    var inner = 3;
    //outer is closure as it is resolved in the outer scope
    return outer + inner;
}

console.log(addTo());

var addTo = function(){
    var inner = 3;
    var add = function(){
        //inner is closure as it is resolved in the outer scope
        return outer + inner;
    }
    return add;
}

console.log(addTo(3)());


var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }
    }
  };
  
  var counter1 = makeCounter();
  var counter2 = makeCounter();
  
  alert(counter1.value());  // 0.
  
  counter1.increment();
  counter1.increment();
  alert(counter1.value()); // 2.
  
  counter1.decrement();
  alert(counter1.value()); // 1.
  alert(counter2.value()); // 0.

// global scope
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

console.log(addTo(3)());