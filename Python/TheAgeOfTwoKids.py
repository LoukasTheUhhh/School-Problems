# Let there be two kids,either with different or identical ages.
# Find out which one is the biggest,or,if not,find out if they are equal.
dif = None
age1 = int(input("How old is the first kid?\n-"))
if age1 >= 18 or age1 <= 0:
  print("Sorry,age is not a kid.")
  exit()

print("The first kid is " + str(age1) + " years old.")

age2 = int(input("How old is the second kid?\n-"))
if age2 >= 18 or age2 <= 0:
  print("Sorry,age is not a kid.")
  exit()

print("The second kid is " + str(age2 ) + " years old.")

if age1 > age2:
  dif = age1 - age2
  print("The first kid is bigger than the second kid by " + str(dif) + " years.")
  exit()
elif age2 > age1:
  dif = age2 - age1
  print("The second kid is bigger than the second kid by " + str(dif) + " years.")
  exit()
else:
  print("Both kids have the same age of " + str(age1) + " years.:)
  exit()
