# Let a and b be two numbers,and c be their sum  Find out the last digit of c.
a = int(input("What is the first number?\n-"))
print("The first number is " + str(a) + ".")

b = int(input("What is the second number?\n-"))
print("The second number is " + str(b) + ".")

c = a + b
print("Their sum is " + str(c) + ".")

d = c % 10
print("The last digit of that sum is " + str(d) + ".")
