/*
There is (A) White Globes,There Is Two Times More Red Globes,And 3 Green Globes Less Than The Red Globes.
How many globes are there in total?
(Also,there cant be more than or 1000 white globes,or less than or 2 white globes.)
*/
let uhh = input("How many White Globes should there be?\n-");
let whiteGlobes = int(uhh);
if (wG >= 1000) {
  console.log("Error: Invalid White Globe Number(Too Much).");
  process.exit();
} else if (wG <= 2) {
  console.log("Error: Invalid White Globe Number(Not Enough).")
} else {
  console.log("There are "+str(whiteGlobes)+" White Globes.");
  let redGlobez = wG * 2;
  console.log("There are "+str(redGlobes)+" Red Globes.");
  let greenGlobes = rG - 3;
  console.log("There are "+str(greenGlobes)+" Green Globes.");
  let totalGlobes = whiteGlobes + redGlobes + greenGlobes;
  console.log("There are "+str(totalGlobes)+" Total Globes.");
}
process.exit();
  
