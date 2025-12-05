// ---------- Mastering Advance Array Programming --------

// left rotation by 1 element
/*
let arr = [1, 2, 3, 4, 5];
let copy = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = copy;
console.log(arr);
*/

// -> using nested loop for multiple rotations
/*
let arr = [1, 2, 3, 4, 5];
for (let j = 1; j < 5; j++) {
  let copy = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = copy;
}
console.log(arr);
*/

// right rotation by 1 element
/*
let arr = [1, 2, 3, 4, 5];
let copy = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = copy;
console.log(arr);
*/

// remove duplicates from the "sorted array"

// -> A sorted array is an array whose elements are arranged in a specific order, such as numeric (ascending or descending) or alphabetical
/*
let arr = [0, 0, 1, 1, 1, 2, 2, 3];

let j = 1;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] != arr[i + 1]) {
    arr[j] = arr[i + 1];
    j++;
  }
}
console.log(arr, j);
*/

//remove the given element(val)
/*
let nums = [2];
let val = 3;
let j = 0;
for (let i = 0; i < nums.length; i++) {
  if(nums.length === 0){
    console.log('Given array is empty');
    break;
  }
  if (nums[i] !== val) {
    nums[j] = nums[i];
    j++;
  }
}
console.log(nums, j);
*/

// Merge two sorted arrays
/*
let arr1 = [2, 5, 6, 9];
let arr2 = [1, 3, 4, 8];
let merge = new Array(arr1.length + arr2.length);

let i = 0,
  j = 0,
  k = 0;
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    merge[k] = arr1[i];
    i++;
    k++;
  } else {
    merge[k] = arr2[j];
    j++;
    k++;
  }
}

while (i < arr1.length) {
  merge[k] = arr1[i];
  i++;
  k++;
}

while (j < arr2.length) {
  merge[k] = arr2[j];
  j++;
  k++;
}
console.log(merge);
*/

// let nums = [14 ,13 ,0, 1, 0, 3, 12];
// let j = nums.length - 1;
// let i = nums.length - 1;
// while (i > -1) {
//   if (nums[i] === 0) {
//     let temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
//     i--;
//     j--;
//   } else {
//     i--;
//   }
// }
// console.log("nums first", nums);

// let k = 1;
// for (let i = 0; i < nums.length-1; i++) {
//   if (nums[i] > 0 && nums[i] > nums[k]) {
//     // let temp = nums[i];
//     nums[i] = nums[k];
//     // nums[k] = temp;
//     k++;
//   }
// }
// console.log(nums);

// sort colors(leet code)
/*
let nums = [2, 2, 0, 0, 2, 0, 1, 2, 0, 2];
let i = 0,
  j = 0;

while (i < nums.length) {
  if (nums[i] === 0) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j++;
  } else {
    i++;
  }
}
console.log("for 0s ", nums);

let l = nums.length - 1,
  k = nums.length - 1;
while (l > -1) {
  if (nums[l] === 2) {
    let temp = nums[l];
    nums[l] = nums[k];
    nums[k] = temp;
    l--;
    k--;
  } else {
    l--;
  }
}
console.log("rest ", nums);
*/

// sort in place (non-descending)
/*
let nums = [2, 0, 1];
let i = 0,
  j = 0,
  k = nums.length - 1;
while (i <= k) {
  if (nums[i] === 0) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j++;
  } else if (nums[i] === 2) {
    let temp = nums[i];
    nums[i] = nums[k];
    nums[k] = temp;
    k--;
  } else {
    i++;
  }
}
console.log(nums);
*/
