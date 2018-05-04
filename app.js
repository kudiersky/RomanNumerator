//Below we have our array of 1-10, 40, 50, 90, 100, 400, 500, 900 and 1000

const romanNumeralsArray = [
{
decimal: 1,
romanNumeral: 'i'
},
{
decimal: 2,
romanNumeral: 'ii'
},
{
decimal: 3,
romanNumeral: 'iii'
},
{
decimal: 4,
romanNumeral: 'iv'
},
{
decimal: 5,
romanNumeral: 'v'
},
{
decimal: 6,
romanNumeral: 'vi'
},
{
decimal: 7,
romanNumeral: 'vii'
},
{
decimal: 8,
romanNumeral: 'viii'
},
{
decimal: 9,
romanNumeral: 'ix'
},
{
decimal: 10,
romanNumeral: 'x'
},
{
decimal: 50,
romanNumeral: 'l'
},
{
decimal: 90,
romanNumeral: 'xc'
},
{
decimal: 100,
romanNumeral: 'c'
},
{
decimal: 400,
romanNumeral: 'cd'
},
{
decimal: 500,
romanNumeral: 'd'
}
,
{
decimal: 900,
romanNumeral: 'cm'
}
,
{
decimal: 1000,
romanNumeral: 'm'
}
]


var romanNumeralsArrayFlipped = romanNumeralsArray.slice(0).reverse();    //We flipped the array


function RomanNumerate(value){                                            //take in the value as a parameter

  for (i = 0; i < romanNumeralsArrayFlipped.length; i++) {                //We are itterateing over the length of the array
       if (value/romanNumeralsArrayFlipped[i].decimal >= 1){              //If we can divide the value by the array item returning a value of 1 or above
         value -= romanNumeralsArrayFlipped[i].decimal                    //We take it off
         let string = romanNumeralsArrayFlipped[i].romanNumeral           //Get the value of this against our array
         console.log(string)                                              // log that string
         break                                                            //break to stop it from continuing. For now
       }
  }
}

//Lets test that first value

testArray = [1,2,3,4,5,6,7,8,11,12,111,123,1444,1333,'1234', 222]

testArray.forEach(RomanNumerate)

// i ✔
// ii ✔
// iii ✔
// iv ✔
// v ✔
// vi ✔
// vii ✔
// viii ✔
// x ✔
// x ✔
// c ✔
// c ✔
// m ✔
// m ✔
// m ✔ suprised as its a string, cool
// c ✔
