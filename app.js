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


//We said we want to intterate over our array from largest to smalles. Taking off that value and restarting the process.
//Let's flip that array

var romanNumeralsArrayFlipped = romanNumeralsArray.slice(0).reverse();

console.log(romanNumeralsArrayFlipped)


// thanks to Dwayne @ https://ilikekillnerds.com/2017/03/efficiently-looping-javascript-array-backwards/
