# There is (A) White Globes,There Is Two Times More Red Globes,And 3 Green Globes Less Than The Red Globes.
# How many globes are there in total?
# (Also,there cant be more than or 1000 white globes,or less than or 2 white globes.) 
whiteGlobes = int(input("How many White Globes should there be?\n-")
if whiteGlobes <= 2:
  print("Sorry,not enough White Globes!")
  exit()
elif whiteGlobes >= 1000:
  print("Sorry,too many White Globes!")
  exit()
print("There are "+str(whiteGlobes)+" White Globes.")
redGlobes = whiteGlobes * 2
print("There are "+str(redGlobes)+" Red Globes.")
greenGlobes = redGlobes - 3
print("There are "+str(greenGlobes)+" Green Globes.")
totalGlobes = whiteGlobes + redGlobes + greenGlobes
print("There are "+str(totalGlobes)+" Total Globes.")
