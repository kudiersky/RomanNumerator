
PROBLEM!!!!!!  We have found that although we can write an if statememnt for all possibilities, it will take up time.

Lets look at breaking a number down:
From reading up on the web. Which I doubt the Romans had. We can start at the largest number and work down.

Lets do that with 9.

We can start cycle through our array from the largest to the smallest to see what will return a value above or equal to 1.

1000 no 500 no 100 no 50 no 10 no 9 yes 8 yes 7 yes 6 yes 5 yes 4 yes 3 yes 2 yes 1 yes

This tells me that we can start with the highest of our array decimal values to the lowest.
If we get 1 or more when dividing it by our array decimal value, we take that value away and add that Roman Numeral Value to a string.

lets look at 128.

Can we divide 128 by decimalvalue, giving 1 or more:

1000 no
500 no
100 yes **************

So lets take it off, add to to a string (100 = C). String = C. And lets go again.

28

Can we divide 28 by decimalvalue, giving 1 or more:

1000 no
500 no
100 no
50 no
10 yes ******************

So lets take it off, add to to a string (10 = X). String = CX. And lets go again.

Can we divide 18 by decimalvalue, giving 1 or more:

1000 no
500 no
100 no
50 no
10 yes ********************

So lets take it off, add to to a string (10 = X). String = CXX. And lets go again.

Can we divide 8 by decimalvalue, giving 1 or more:

1000 no
500 no
100 no
50 no
10 no
9 no
8 yes ******************
So lets take it off, add to to a string (8 = viii). String = CXXVIII.

AND HERE WE HAVE 128 in its most Roman of numerals CXXVIII. A quick look at a text book and this tells us were right

Our problem child seem like 4 9 40 90 and 400 and 900 and 4000. SO lets hard code them in too. We can get creative later.

So we know we need 1-10, 40, 50, 90, 100,400, 500, 900, 1000 and 4000.

Let code this
