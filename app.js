//first lets make an array of Decimal and Roman Numerals of 1 - 9

const RomanNumeralsArray = [
{
decimal: 1,
RomanNumeral: 'i'
},
{
decimal: 2,
RomanNumeral: 'ii'
},
{
decimal: 3,
RomanNumeral: 'iii'
},
{
decimal: 4,
RomanNumeral: 'iv'
},
{
decimal: 5,
RomanNumeral: 'v'
},
{
decimal: 6,
RomanNumeral: 'vi'
},
{
decimal: 7,
RomanNumeral: 'vii'
},
{
decimal: 8,
RomanNumeral: 'vii'
},
{
decimal: 9,
RomanNumeral: 'viii'
}
]

//lets print to console what we have.

RomanNumeralsArray.forEach(function(element) {
  console.log(element);
});

//result

// { decimal: 1, RomanNumeral: 'i' }
// { decimal: 2, RomanNumeral: 'ii' }
// { decimal: 3, RomanNumeral: 'iii' }
// { decimal: 4, RomanNumeral: 'iv' }
// { decimal: 5, RomanNumeral: 'v' }
// { decimal: 6, RomanNumeral: 'vi' }
// { decimal: 7, RomanNumeral: 'vii' }
// { decimal: 8, RomanNumeral: 'vii' }
// { decimal: 9, RomanNumeral: 'viii' }
