/**
 * Testing PR
 */

let arr = [1, 2, 3, 4, 5, 6];
arr = arr.map((val) => {
  return val % 2 == 0;
});
console.log(arr);

/**
 * Testing PR#2
 */
function multiply(multiplier, ...numbers) {
  const x = multiplier;
  return numbers.map((num) => {
    return x * num;
  });
}

console.log(multiply(2, 1, 2, 3, 4, 5, 6));
