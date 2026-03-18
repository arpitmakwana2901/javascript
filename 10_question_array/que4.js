// 5. *Rotate Array by K Positions*

array = [1, 2, 3, 4, 5];
k = 2;

for (let i = 0; i < k; i++) {
  let last = array.pop();
  array.unshift(last);
}

console.log(array, "last..");
