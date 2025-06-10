/*
There is (A) White Globes,There Is Two Times More Red Globes,And 3 Green Globes Less Than The Red Globes.
How many globes are there in total?
(Also,there cant be more than or 1000 white globes,or less than or 2 white globes.)
*/
let whiteGlobes = parseInt(prompt("How many White Globes should there be?\n-"));
if (whiteGlobes >= 1000) {
  console.error("Error: Invalid White Globe Number(Too Much).");
} else if (whiteGlobes <= 2) {
  console.error("Error: Invalid White Globe Number(Not Enough).")
}
console.log("There are "+whiteGlobes.toString()+" White Globes.");
let redGlobes = wG * 2;
console.log("There are "+redGlobez.toString()+" Red Globes.");
let greenGlobes = rG - 3;
console.log("There are "+greenGlobes.toString()+" Green Globes.");
let totalGlobes = whiteGlobes + redGlobes + greenGlobes;
console.log("There are "+totalGlobes.toString()+" Total Globes.");
  
