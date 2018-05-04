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
decimal: 40,
romanNumeral: 'xl'
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
let string =''                                                            //build the string to return roman numerals

function RomanNumerate(value){                                            //take in the value as a parameter


  for (i = 0; i < romanNumeralsArrayFlipped.length; i++) {                //We are itterateing over the length of the array
       if (value/romanNumeralsArrayFlipped[i].decimal >= 1){              //If we can divide the value by the array item returning a value of 1 or above
         value -= romanNumeralsArrayFlipped[i].decimal                    //We take it off
         string += romanNumeralsArrayFlipped[i].romanNumeral              //add the roman numerals to a string
         RomanNumerate(value)
        }
      }
    }
