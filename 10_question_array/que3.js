// 4. *Move All Zeros to the End*
let array = [0, 1, 0, 3, 12];

let empty = [];

let zeroCount = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) {
    zeroCount++;
  } else {
    empty.push(array[i]);
  }
}

console.log(zeroCount, "Zero__Count");
console.log(empty, "array");

for (let i = 0; i < zeroCount; i++) {
  empty.push(array[0]);
}

console.log(empty, "Final");
