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

//Let's and an IF statement to constrain in to between 1 and 10 for now and give an error message if not

function decimalToRomanNumeral(decimal){

if(decimal > 0 && decimal < 10 && decimal!==null){
  let obj = romanNumeralsArray.find(object => object.decimal === decimal);
  return obj.romanNumeral //return a object value
  }
    else{
      return `We can't convert this value yet please enter a number between 1 and  10`
    }
}

// expected output v
let result = decimalToRomanNumeral(0)
console.log(result)

//result
//v
