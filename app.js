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

// lets wrap this up in a function.
//factoring in the parameter

function decimalToRomanNumeral(decimal){
let obj = romanNumeralsArray.find(object => object.decimal === decimal);
return obj
}

// expected output { decimal: 5, romanNumeral: 'v' }
let result = decimalToRomanNumeral(5)
console.log(result)

//result
//{ decimal: 5, romanNumeral: 'v' }
