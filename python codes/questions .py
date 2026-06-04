from Question import Question
#the question prompts
question_prompt = [
"What color are Apples? \n (a) Red/Green\n (b) Purple\n (c) Orange\n\n",
"What color are Bananas? \n (a) Teal\n (b) Magenta\n (c) Yellow\n\n",
"What color are Straw Berries? \n (a) Yellow\n (b) Red\n (c) Blue\n\n"
]
#question answers
question = [
   Question(question_prompt[0], "a"),
    Question(question_prompt[1], "c"),
    Question(question_prompt[2], "b")
]
#function to teack the answers and print out the score
def run_test(question):
    score = 0
    for question in question:
        answer = input(question.prompt)
        if answer == question.answer:
            score +=1
    print("\nYou got" + str(score)+"/" +str(len(question_prompt)) + "correct")

run_test(question)