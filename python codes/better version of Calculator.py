# A better calculator
num1 = float(input("Enter first number : \n"))
op = input("Enter the Operater you want to use eg +,-,* or / : \n")
num2 = float(input("Enter the second number : \n"))


#using if statement to make operator to work
if op == "+":
    print(num1 + num2)
elif op == "-":
    print(num1 - num2)
elif op == "*":
    print(num1 * num2)
elif op == "/":
    print(num1 / num2)
else:
    print("Invalid Operator")