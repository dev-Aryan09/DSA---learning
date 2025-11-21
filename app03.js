// more the no. of lines, more the size of file

//loop - whatsapp, instagram, fb, e-commerce, yt etc, all these uses loops on a large scale

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// this is also a valid code and results to infinite loop10
/*
for(;;){
    console.log('hello');
}
*/

//sum and factorial of n natural numbers
/*
let pr = prompt("Give a number");

if (pr === null) {
  console.log("cancelled");
} else {
  let iI = Number(pr);

  if (isNaN(iI)) {
    console.log("invalid input");
  } else {
    if (iI > 0) {
      let sum = 0;
      let fact = 1;
      for (let i = 1; i <= iI; i++) {
        sum = sum + i; // for sum
        fact = fact * i; // for factorial
      }
      console.log(sum);
      console.log(fact);3
      
    } else {
      console.log("should be +ve and more then 0");
    }
  }
}
*/

// factors of a number n
/*
let pr = prompt("Give a number");

if (pr === null) {
  console.log("cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      for (let i = 1; i <= Math.floor(n/2); i++) {
        if(n%i === 0){
          console.log(i);
        }
      }
      console.log(n);
    } else {
      console.log("should be +ve and more then 0");
    }
  }
}
*/

// prime number
/*
let pr = prompt("Give a number");

if (pr === null) {
  console.log("cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      // let primeHai = true;
      // for (let i = 2; i <= Math.floor(n / 2); i++) {
      //   if (n % i === 0) {
      //     primeHai = false;
      //     break;
      //   }
      // }
      // console.log(primeHai);
      console.log(isPrime(n));   // using a function
    } else {
      console.log("should be +ve and more then 0");
    }
  }
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true; // 2 is the only even prime no.
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
*/

// while loop
/*
let ans = prompt("kuch bhi dede");

while(ans !== 'exit'){
  ans = prompt("kuch bhi dede");
}
*/

// sum of a digit
/*
let pr = prompt("Give a number");

if (pr === null) {
  console.log("cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      let sum = 0;
      while(n > 0) {
        let rem = n%10;
        sum = sum + rem;
        n = Math.floor(n/10);
      }
      console.log(sum);
    } else {
      console.log("should be +ve and more then 0");
    }
  }
}
*/

// reverse a number
/*
let pr = prompt("Give a number");

if (pr === null) {
  console.log("cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      let rev = "";
      while (n > 0) {
        let rem = n % 10;
        rev = rev * 10 + rem;  // equation for reverse
        n = Math.floor(n / 10);
      }
      console.log(rev);
    } else {
      console.log("should be +ve and more then 0");
    }
  }
}
*/

// strong number
/*
let pr = prompt("Give a number");

if (pr === null) {
  console.log("cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      let sum = 0;
      let copyN = n;
      while (n > 0) {
        let rem = n % 10;
        let fact = 1;
        for (let i = 1; i <= rem; i++) {
          fact = fact * i;
        }
        sum = sum + fact;
        n = Math.floor(n / 10);
      }
      if (copyN === sum) {
        console.log("strong");
      } else {
        console.log("no strong");
      }
    } else {
      console.log("should be +ve and more then 0");
    }
  }
}
*/

// do-while loop
// this loop will execute once irrespective of condition

// repeat hello
/*
let pr = prompt("Give a number");

if (pr === null) {
  console.log("cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      do {
        console.log("Hello");
        // break
        pr = prompt("Give a number");
        n = Number(pr);
      } while (n !== 2);
    } else {
      console.log("should be +ve and more then 0");
    }
  }
}
*/

// guess the number
/*
let random = Math.floor(Math.random() * 100) + 1;

let guess = 0;
while (guess !== random) {
  guess = Number(prompt("Guess a number"));
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("try again b/w 1 - 100");
    continue;
  }
  if (guess > random) {
    console.log("too high and try again");
  } else if (guess < random) {
    console.log("too low and try again");
  } else {
    console.log("perfect and the nunber was", guess);
  }
}
*/

// sastsa calculator

let isWhile = true;

while (isWhile) {
  let operator = Number(prompt("type 1,2,3,4 for +, -, *, / respectively"));

  if (operator === 0) {
    console.log("cancelled");
    break;
  }

  if (![1, 2, 3, 4].includes(operator) || isNaN(operator)) {
    console.log("Invalid input, choose from 1, 2, 3 , 4 only");
    continue;
  }

  let a = Number(prompt("Enter first number(a)"));
  let b = Number(prompt("Enter second number(b)"));

  if (isNaN(a) || isNaN(b)) {
    console.log("please type a valid number");
    continue;
  }

  let result;

  // we can use 'switch case' when we have multiple values for a single variable
  switch (operator) {
    case 1:
      console.log("you choose to do addtion(+)");
      result = a + b;
      break;
    case 2:
      console.log("you choose to do subtraction(-)");
      result = a - b;
      break;
    case 3:
      console.log("you choose to do multiply(*)");
      result = a * b;
      break;
    case 4:
      console.log("you choose to do divide(/)");
      if (b === 0) {
        console.log("Error: cannot divisible by 0");
        continue;
      }
      result = a / b;
      break;
  }
  console.log("Your result is ", result);

  let next = prompt("Do you want to continue, type 'y' for yes or 'n' for No");

  if (next.toLocaleLowerCase() === "n") {
    isWhile = false;
    console.log("You terminated this session");
  }
}
