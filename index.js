//Q.1 Add two numbers

let num1 = 12;
let num2 = 11;
let result = num1 + num2;
console.log(`Addition of two numbers is ${result}`);

//Q.2 Find the conditions are obeyed or not?

let a = 10;
let b = 12;
let condition = (a > b && a == b);
console.log(`Conditions are obeyed or not? : ${condition}`);

//Q.3 Check the condition

let abc = 11;
let xyz = 121;

if (((abc % 10) == 0) && ((xyz % 10) == 0))
    console.log("true");
else if (((abc % 10) != 0) && ((xyz % 10) != 0))
    console.log("false");

else if (((abc % 10) != 0) || ((xyz % 10) != 0))
    console.log("true");
else
    console.log("invalid");


//Q.4 Find first digit of 4 digit number

let number = 1234;
let firstDigit = 1234 / 1000;
console.log(`First digit of 4 digit number is : ${Math.floor(firstDigit)}`);

//Q.5 Find last digit of 4 digit number 

let digit = 5567;
let lastDigit = 5567 % 10;
console.log(`Last digit of 4 digit number is : ${lastDigit}`);

//Q.6 Find the remainder

let modDigit1 = 12;
let modDigit2 = 5;
let modulus = modDigit1 % modDigit2;
console.log(`Remainder is ${modulus}`);

//Q.7 Multiply two numbers

let productNum1 = 12;
let productNum2 = 122;
let product = productNum1 * productNum2;
console.log(`Product of two numbers is: ${product}`);

//Q.8 Marks Calculator

let sub1 = 85;
let sub2 = 95;
let sub3 = 55;
let totalMarks = (sub1 + sub2 + sub3);
let average = ((totalMarks / 3));
console.log(`Total marks: ${totalMarks} `);
console.log(`Average of marks: ${(average).toFixed(2)}`);






