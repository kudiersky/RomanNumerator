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


var romanNumeralsArrayFlipped = romanNumeralsArray.slice(0).reverse();

//now we can utilise a FOR Loop

let value = 123

for (i = 0; i < romanNumeralsArrayFlipped.length; i++) {
     if (value/romanNumeralsArrayFlipped[i].decimal >= 1){
       value -= romanNumeralsArrayFlipped[i].decimal
       console.log(value)
       break
     }
}

//Output

// 23

//We can see here like we discussed that we started with 123, we took 100 off it. We must re-itterate
//To recheck the value
