// Let nr1 and nr2 be two numbers. Find out the last digit of the sum of a and b.
nr1 = parseInt(prompt("What is the first number?\n-"));
console.log("The first number is "+nr1.toString()+".");
nr2 = parseInt(prompt("What is the second number?\n-"));
console.log("The first number is "+nr2.toString()+".");
sum = nr1 + nr2;
console.log("The sum of the two numbers is "+sum.toString()+".");
lastDigit = sum % 10;
console.log("The last digit of the sum is "+lastDigit.toString()+".");

