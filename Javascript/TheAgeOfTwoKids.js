/* Let two kids have two ages that can be identical or not. Find out whether they are equal,or if one of yhem is bigger than the other. */
let dif = null;
let age1 = parseInt(prompt("How old is the first kid?\n-"));
if (age1 >= 18) {
  console.error("The ages cannot be older than or equal to 18.");
} else if (age1 <= 0) {
  console.error("The ages cannot be younger than or equal to 0.");
}
let age2 = parseInt(prompt("How old is the second kid?\n-");
if (age2 >= 18) {
  console.error("The ages cannot be older than or equal to 18.");
} else if (age2 <= 0) {
  console.error("The ages cannot be younger than or equal to 0.");
}
if (age1 > age2) {
  dif = age1 - age2;
  console.log("The first kid is older than the second kid by "+dif.toString()+" years.");
} else if (age1 == age2) {
  console.log("Both kids have the same age of "+age1.toString()+" years.");
} else {
  dif = age2 - age1;
  console.log("The second kid is older than the first kid by "+dif.toString()+" years.");
}
