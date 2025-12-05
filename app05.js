// Mastering Arrays

// let prompt = require("prompt-sync")();

// creating an empty array
// let arr = [];  // array literal

// arr.push(100);
// arr.push(10);
// arr.push(20);
// arr.push(30);
// console.log(arr);
// console.log('removed from the last' ,arr.pop());
// console.log(arr);

// arr[0] = 11;
// arr[1] = 21;
// arr[2] = 31;
// arr[5] = 51;
// console.log(arr);
// console.log(arr[3]);

// let arr = new Array(3);  // array constructor function
// arr.push(10);
// console.log(arr);

// Taking inputs and inserting them into an array
/*
let arr = new Array(5);
for (let i = 0; i <= arr.length; i++) {
  let ans = Number(prompt("Enter a number "));
  //   arr.push(ans);
  arr[i] = ans;
}
console.log(arr);
*/

// Sum of n elements of an array
/*
let arr = [10, 20, 30, 40, 50];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);
*/

// find maximum and minimum from an array

// -> assume the first element as the maximum then compare with the upcoming elements
/*
let arr = [10, 2, 100, 13, 4, 1, 101];
let max = arr[0];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log("maximun", max);
console.log("minimum", min);
*/

// 2nd maximum
/*
let arr = [10, 30, 40, 40, 40, 40];
let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);
for (let i = 2; i < arr.length; i++) {
  if (max < arr[i]) {
    sMax = max;
    max = arr[i];
  } else if(sMax < arr[i] && max != arr[i]){
    sMax = arr[i]
  }
}

console.log("max", max);
console.log("sMax", sMax);
*/

// 2nd minimum
/*
let arr = [10, 30, 40, 10, 60, 70];
let min = Math.min(arr[0], arr[1]);
let sMin = Math.max(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (min > arr[i]) {
    sMin = min;
    min > arr[i];
  } else if (sMin > arr[i] && arr[i] != min) {
    sMin = arr[i];
  }
}

console.log("min", min);
console.log("sMin", sMin);
*/

// reverse of an array

// -> with extra space (make an another array of same legth)
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let revArr = new Array(arr.length);//<- extra space

let j = 0;
for (let i = arr.length - 1; i >= 0; i--) {
  revArr[j] = arr[i];
  j++;
}
console.log(revArr);
*/

// -> without extra space
/*
let arr = [10, 20, 30, 40, 50];
let i = 0,
  j = arr.length - 1;

while (i != j) {     // i<j (this condition is true for both odd and even length)
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}
console.log(arr);
*/

// following a two pointer theory
/*
-> Q. Move all 0s to the left and all 1s to the right
*/
/*
let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0];

let i = 0,
  j = 0;

while (i < arr.length) {
  if (arr[i] === 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j++;
  } else {
    i++;
  }
}
console.log(arr);
*/

// let arr = [1, 0];
// console.log(arr.at(-1));
