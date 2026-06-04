 #Building a Guessing Game
print("Let Play a Guessing Game.\nGuess my Secret Word You Have 3 Trials.\n\n")
 
Secret_word = "giraffe"
guess = " "
guess_count = 0
guess_limit = 3
out_of_guess = False  

#using while loop to check the corect answer
while guess != Secret_word and not (out_of_guess):
    if guess_count < guess_limit:
        guess = input("Enter guess : ")
        guess_count += 1
    else:
       out_of_guess = True 
if out_of_guess:
    print("\nOut of Guess, You LOSE !! ")
else:
    print("\nYou Win !!!")