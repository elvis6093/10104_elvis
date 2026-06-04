#legibility of loan
print("        LOAN     LEGIBILITY     TEST") 
has_high_income = input("\nDo you earn high income. \n True or False ? \n")
has_good_credit = input("\nDo you have a good credit legibility. \n True or False ?\n")
#if staements to excute the test
if has_high_income and has_good_credit:
    print("\nEligible for Loan!!")
#elif has_high_income or has_good_credit:
   # print("\nEligible for Loan!!")
#elif not(has_high_income) or not(has_good_credit):
  #  print("\nNot eligible for Loan.")
#elif not has_high_income and  has_good_credit:
  #  print("\nNot eligible for Loan.")
else:
    print("\nInvalid input!!")