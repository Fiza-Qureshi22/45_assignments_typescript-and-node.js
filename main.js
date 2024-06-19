"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
let mango = "mango";
// eqality 
console.log("mango is equal to mango");
console.log(mango == "mango");
// inequaity
console.log("mango is not equal to mango");
console.log(mango != "mango");
// • Tests using the lower case function
let upperCaseMango = "MANGO";
//equality
console.log("MANGO is equal to mango after converting lowercase");
console.log(upperCaseMango.toLowerCase() == mango);
// inequality
console.log("MANGO is not equal to mango after converting lowercase");
console.log(upperCaseMango.toLowerCase() !== mango);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let fifty = 50;
let hundred = 100;
// equality
console.log("fifty is not equal to 100");
console.log(fifty !== 100);
//inuquality
console.log("hundred is uqual to 50");
console.log(hundred == 50);
//gratar than equality
console.log("fifty is grater than to 100");
console.log(fifty > 100);
//less than unequality
console.log("fifty is less than to 100");
console.log(fifty < 100);
// grater than orr equal to 
console.log("hundred is grater than or equal to 50");
console.log(hundred >= 50);
// less than or equal to
console.log("hundred is less than and equal to 50");
console.log(hundred <= 50);
// • Tests using "and" and "or" operators
// && perators mn dono conditios true honi chahiye warna wo dono fase deega
console.log("hundred is equal to hundred and hundred  is grater than 50");
console.log(hundred == 100 && hundred > 50);
console.log("hundred is not  equal to hundred and fifty  is grater than 100");
console.log(hundred !== 100 && fifty > 100);
/// or operator || agara ism aik condition righyt hoo y right hi deta hy
console.log("hundred is grater than 50 or fifty is  not equal to 50");
console.log(hundred > 50 || fifty !== 50);
console.log("hundred is less than to  50 or fifty is   equal to 100");
console.log(hundred < 50 || fifty == 100);
//Test whether an item is in a array
// include kka func y check krta k specifuc value apky array mn mojood hy ya nhi 
let fruite = ["mango", "apple", "bananan"];
console.log("aapple is include in my fruits array?");
console.log(fruite.includes("apple"));
//Test whether an item is not in a array
console.log("apple is not  include in my fruits array?");
console.log(fruite.includes("apple"));
