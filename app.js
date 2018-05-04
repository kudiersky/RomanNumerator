//Below we have our array of Objects of 1 to 9.

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
romanNumeral: 'vii'
},
{
decimal: 9,
romanNumeral: 'viii'
}
]

// lets build a the first function hardcoding the parameter

//search through the array to find the object with the decimal value of number (8)

let obj = romanNumeralsArray.find(object => object.decimal === 8);

// expected output decimal: 8 romanNumeral: 'vii'

console.log(obj);

//result
//{ decimal: 8, romanNumeral: 'vii' }

let obj = romanNumeralsArray.find(object => object.decimal === 2);

// expected output decimal: 8 romanNumeral: 'vii'

console.log(obj);

//result
//{ decimal: 2, romanNumeral: 'ii' }


//great, that's worked
