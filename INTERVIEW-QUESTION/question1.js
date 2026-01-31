// Write a program to swap two numbers using a temporary variable.

let a = 5;
let b = 10;
let c = 15;

console.log("Before Swapping a =", +a + "b =", b);

let temp = a;
a = b;
b = c;
c = temp;

console.log("After swapping a = ", +a + "b =", b, "c =" + c);
