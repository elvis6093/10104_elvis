#Down payment of house
price = float(input("Enter the price of the house in $ : \n"))
has_good_credit = input("\nIf the Buyer has a good credit score, \nEnter True Or False : ")

if has_good_credit :
    down_payment = 0.1 * price
else:
    down_payment = 0.2 * price

print(f"\nDown Payment for the house is : ${down_payment: .2f} ")