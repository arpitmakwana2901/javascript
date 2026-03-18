// *Find the Largest Element in an Array*

let array = [4, 7, 2, 9, 1];
let max = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log("Largest Number", max);
