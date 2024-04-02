user_guess=int(input('guess a number between 1 :100 '))
user_colour=input('pick a colour ')
secret_number=37
secret_colour='blue'
if user_guess==secret_number and secret_colour==user_colour:
    print('you got it all')
elif user_guess==secret_number or secret_colour==user_colour:
    print('you got one secret!')  
else:
    print('oops,Try again')      