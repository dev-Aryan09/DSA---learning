// valid voter
/*
let age = Number(prompt("Enter your age"));
if(isNaN(age)){
    console.log('Wrong input');
} else if(age >= 18){
    console.log('you can vote');
} else{
    console.log('you cannot vote');
};
*/


// shop discount (range question)
/*
let amount = Number(prompt('What is the final price ?'));
let discount = 0;

if(amount > 0 && amount <= 5000){
    discount = 0;
} else if(amount > 5000 && amount <= 7000){
    discount = 5;
} else if(amount > 7000 && amount <= 9000){
    discount = 10;
} else if(amount > 9000){
    discount = 20;
} 
console.log(amount - Math.floor((discount * amount)/100));
*/


// ** bijli bill **
/*
let unit = Number(prompt('Enter electricity unit'));
let amount = 0;

if(unit > 400){
    amount = (unit - 400) * 13;
    unit = 400;
}
if(unit > 200 && unit <= 400){
    amount += (unit - 200) * 8;
    unit = 200;
}
if(unit > 100 && unit <= 200){
    amount += (unit - 100) * 6;
    unit = 100;
}
amount += unit*4;
console.log(amount);
*/


// INR Denomination
/*
let money = 5463;

if(money >= 500){
    console.log('500 note(s) : ' + Math.floor(money/500));
    money = money%500    
}
if(money >= 200){
    console.log('200 note(s) : ' + Math.floor(money/200));
    money = money%200    
}
if(money >= 100){
    console.log('100 note(s) : ' + Math.floor(money/100));
    money = money%100    
}
if(money >= 50){
    console.log('50 note(s) : ' + Math.floor(money/50));
    money = money%50    
}
if(money >= 20){
    console.log('20 note(s) : ' + Math.floor(money/20));
    money = money%20    
}
if(money >= 10){
    console.log('10 note(s) : ' + Math.floor(money/10));
    money = money%10    
}
if(money >= 5){
    console.log('5 note(s) : ' + Math.floor(money/5));
    money = money%5    
}
if(money >= 2){
    console.log('2 note(s) : ' + Math.floor(money/2));
    money = money%2    
}
if(money === 1){
    console.log('1 note(s) : ' + Math.floor(money/1));
    money = money%1    
}
*/


// ternary operator ? :
/*
console.log(true ? "hello" : "hey");
console.log(false ? "hello" : "hey");
*/

// nested ternary operator
/*
console.log(false ? 'hi' : true ? 'hey there' : 'hello');
console.log(false ? 'hi' : false ? 'hey there' : 'hlo');
*/


// switch case ( use for exacting matching )

let day = 6;
/*
switch (day) {
    case 1: 
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;

    default:
        console.log('invalid input');
        break;
}
*/

/*
// we can print same output for multiple cases
switch(day) {
    case 1:
    case 2:
    case 3: 
       console.log('monday');
       break;

    case 4:
    case 5:
    case 6: 
       console.log('tuesday');
       break;

    default:
       console.log('invalid');
       break;
}
*/

let num = 0.1 + 0.2;

switch (num) {
    case 0.3: console.log('hello');
        break;
    case 0.5: console.log('hey');
        break;

    default: console.log('nameste');
        break;
}