# If David's Grade is below 5,he is demoted. If its 5 or above,he is promoted.
grade = int(input("What is David's Grade?\n-"))
if grade >= 11 or grade <= 0:
  print("Sorry,grade is invalid number,it must be below and above 0.")
  exit()

if grade < 5: 
  print("David is demoted.. D:")
  exit()
elif grade >= 5:
  print("David is promoted! :D")
  exit()
