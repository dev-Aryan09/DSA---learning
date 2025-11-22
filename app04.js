// ---------------- Pattern Programming ---------------

// process.stdout.write('Hello ') // this is the function of node environment
// process.stdout.write('world')

let prompt = require("prompt-sync")();
// let a = prompt("Enter a number ")
// process.stdout.write(a);

let n = Number(prompt("Enter the value of n "));
// for(let i = 1; i <= n; i++){
//     process.stdout.write("* ")
// }

// base pattern
/*
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
*/

// right angled triangle
/*
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
*/

/*
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String(j) + " ");
  }
  console.log();
}

for (let i = 1; i <= n; i++) {
    let ascii = 65;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(ascii) + " ");
    ascii++
  }
  console.log();
}
*/

// inverted right angles triangle
/*
for (let i = 1; i <= n; i++) {
  for (let j = n; j >= i; j--) {
    process.stdout.write("* ");
  }
  console.log();
}
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <=n-i+1; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
*/

// ------ mirror right angled triangle ------
/*
for (let i = 1; i <= n; i++) {
  //inverted right angled triangle
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");  // double white space
  }
  // right angled triangle
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
*/

// X pattern
/*
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j || i + j === 6) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}
*/

// V pattern
/*
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= (2*n) - 1; j++) {
    if (i === j || i + j === 10) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}
*/

// pyramid pattern

for (let i = 1; i <= n; i++) {
  //inverted right angled triangle
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" "); // single white space
  }
  // right angled triangle
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
