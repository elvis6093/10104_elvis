#name character
name = input("Enter a name : \n")
character = len(name)

if character < 3:
    print("\nName must be at least 3 characters.")
elif character >50:
    print("\nName can be a maximum of 50 characters.")
else:
    print("\nName looks good!!")