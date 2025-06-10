0// let David's Grade be a chosen number from 1 to 10. If the grade is above 5,he is promoted. If not,he is demoted.
grade = parseInt(prompt("What is David's Grade?\n-"));
if !(grade <= 10 || grade >= 1) {
  console.error("Invalid number. Shutting down...");
}
if (grade >= 5 && grade <= 10) {
  console.log("David is promoted.");
} else if (grade < 5 && grade >= 1) {
  console.log("David is demoted.");
}
