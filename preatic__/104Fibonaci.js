// let number = 5;

// let a = 0;
// let b = 1;

// console.log(a, "a");
// console.log(b, "b");
// for (let i = 2; i < number; i++) {
//   let temp = a + b;
//   console.log(temp, "temp");
//   a = b;
//   b = temp;
// }

// console.log(number);

let number = 5;

let a = 0;
let b = 1;

for (let i = 2; i < number; i++) {
  let temp = a + b;

  a = b;
  b = temp;
}

console.log(number);

