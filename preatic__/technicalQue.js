// 1. Find the sum of all numbers in an array
//  Using .reduce()

// const arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((a, b) => a + b);
// console.log(result);

// 2. Get only even numbers
// ✔ Using .filter()

// const arr = [1, 2, 3, 4, 5, 6];
// let result = arr.filter((arr) => arr % 2 == 0);
// console.log(result);

// Convert all numbers to their squares

// ✔ Using .map()

// let arr = [1, 2, 3, 4, 5, 6];
// let squares = arr.map((arr) => arr * arr);
// console.log(squares);

// let arr = [1, 2, 3, 4, 5, 6];    
// let record = [];
// for (i = 0; i < arr.length; i++) {
//   record.push(arr[i] * arr[i]);
// }
// console.log(record);

// REMOVE DUPLICATE VALUE ---

// let array = [1, 1, 2, 3, 3, 3, 4, 4];
// let result = [...new Set(array)];
// console.log(result);

// using for loop
// let array = [1, 1, 2, 3, 3, 3, 4, 4];
// let data = [];

// for (let i = 0; i < array.length; i++) {
//   let found = false;

//   for (let j = 0; j < array.length; j++) {
//    if(arr)
//   }
// }

// . Find the maximum number
// ✔ Using .reduce()

// let arr = [1, 2, 3, 4, 5, 6];
// let result = arr.reduce((a, b) => (a > b ? a : b));
// console.log(result);

// let arr = [1, 2, 3, 4, 5, 6];
// let data = [0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > data) {
//     data = arr[i];
//   }
// }
// console.log(data);

// Check if all numbers are positive
// ✔ Using .every()

// const arr = [1, 2, 3, 4, 5];
// let result = arr.every((num) => num > 0);
// console.log(result);

// Convert array of numbers to string with commas
// ✔ Using .join()

// let arr = [10, 20, 30, 40];

// let result = arr.join("");
// console.log(result);

// let array = [10, 20, 30, 40, 50];
// let data = [0];

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (array[i] > data) {
//       data = array[i];
//     }
//   }
// }
// console.log(data);

// let array = ["I", "Love", "Coding"];
// // let result = array.join(" ")
// // console.log(result)
// let result = "";
// for (let i = 0; i < array.length; i++) {
//   result += array[i] + " ";
// }
// console.log(result);

// let array = ["Hello World"];
// let str = "";

// for (let i = 0; i < array.length; i++) {
//   str += array[i] ;
// }
// console.log(str)

// 1️⃣ Reverse a string (without using built-in reverse)

// let str = "arpit";
// let data = str.split("").reverse("").join("");
// console.log(data);

// let empty = "hello";
// let str = "";
// for (let i = empty.length - 1; i >= 0; i--) {
//   str = str + empty[i];
// }
// console.log(str);

//2️⃣ Check if a string is a palindrome

// let str = 7887;
// let number = String(str);
//  console.log(number);
// let data = number.split("").reverse("").join("");
// console.log(data);

// if (str == data) {
//   console.log("Number is palindrome");
//   return;
// } else {
//   console.log("Str is not palindrome");
// }

// let str = "level";
// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   rev += str[i];
// }
// if (str == rev) {
//   console.log("str is palindrome");
//   return;
// } else {
//   console.log("str is not palindrome");
// }
// console.log(rev);

//3️⃣ Find the maximum number in an array (without Math.max)

// let array = [10, 20, 30, 40, 50];
// let max = array[0];
// for (let i = 1; i < array.length; i++) {
//   if (array[i] > max) {
//     max = array[i];
//   }
// }
// console.log(max);

// FIND SECOND MAX

// let secondMax = array[0];
// for (let i = 1; i < array.length; i++) {
//   if (array[i] > secondMax && array[i] != max) {
//     secondMax = array[i];
//   }
// }
// console.log(secondMax);

// ✅ Find the Sum of All Numbers (Using Loop)

// let array = [10, 20, 30, 40, 50];
// let sum = array[0];
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log(sum);

//4️⃣ Find the average of an array

// let array = [10, 20, 30, 40, 50];
// let sum = array[0];
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }

// let average = sum / array.length;
// console.log(average);

// let array = [10, 20, 51,30, 40, 50];
// let even = 0;
// let odd = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     even++;
//   } else {
//     odd++;
//   }
// }
// console.log(odd);

// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let even = [];
// let odd = [];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     even.push(array[i]);
//   } else {
//     odd.push(array[i]);
//   }
// }
// console.log("Even Number", even);
// console.log("Odd Number", odd);
