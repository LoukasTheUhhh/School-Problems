// let David's Grade be a chosen number from 1 to 10. If the grade is above 5,he is promoted. If not,he is demoted.
grade = int(prompt("What is David's Grade?\n-"));
if !(grade <= 10 || grade >= 1) {
  console.log("Invalid number. Throwing syntax error for termination...")
  console.log(hey there wassup dude this is to throw an error to terminate the program);
}
if (grade >= 5 && grade <= 10) {
  console.log("David is promoted.");
} else if (grade < 5 && grade >= 1) {
  console.log("David is demoted.");
} else {
  console.log("Invalid number. Throwing syntax error...");
  console.log(Hey dude wassup its me again);
}
