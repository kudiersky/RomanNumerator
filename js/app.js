//Below we have our array of 1-10, 40, 50, 90, 100, 400, 500, 900 and 1000

const romanNumeralsArray = [
{
decimal: 1,
romanNumeral: 'I'
},
{
decimal: 2,
romanNumeral: 'II'
},
{
decimal: 3,
romanNumeral: 'III'
},
{
decimal: 4,
romanNumeral: 'IV'
},
{
decimal: 5,
romanNumeral: 'V'
},
{
decimal: 6,
romanNumeral: 'VI'
},
{
decimal: 7,
romanNumeral: 'VII'
},
{
decimal: 8,
romanNumeral: 'VIII'
},
{
decimal: 9,
romanNumeral: 'IX'
},
{
decimal: 10,
romanNumeral: 'X'
},
{
decimal: 40,
romanNumeral: 'XL'
},
{
decimal: 50,
romanNumeral: 'L'
},
{
decimal: 90,
romanNumeral: 'XC'
},
{
decimal: 100,
romanNumeral: 'C'
},
{
decimal: 400,
romanNumeral: 'CD'
},
{
decimal: 500,
romanNumeral: 'D'
}
,
{
decimal: 900,
romanNumeral: 'CM'
}
,
{
decimal: 1000,
romanNumeral: 'M'
}
]



//////////////////////////////////////////////////////////////////////////////////
// const button = document.getElementById("generate")
// const romanNumeralsArrayFlipped = romanNumeralsArray.slice(0).reverse()   //We flipped the array
let string =''                                                            //build the string to return roman numerals

function RomanNumerate(value){                                            //take in the value as a parameter

try{
 if(value > 3999){                                                   //thow is too big
    throw "This number is too big"
  }
  else if(value == ""){                                                   //throw if blank
    throw "Nothing entered"
  }
  else if(isNaN(value)){                                                  //throw uf undefined
    throw "This is not a number";
  }
  else if(value % 1 !== 0){                                                  //throw uf not whole
    throw "This is not a whole number";
  }
  else if(value < 1){                                                   //throw if blank
    throw "This is too small"
  }

  for (i = 0; i < romanNumeralsArrayFlipped.length; i++) {                //We are itterateing over the length of the array
       if (value/romanNumeralsArrayFlipped[i].decimal >= 1){              //If we can divide the value by the array item returning a value of 1 or above
         value -= romanNumeralsArrayFlipped[i].decimal                    //We take it off
         string += romanNumeralsArrayFlipped[i].romanNumeral              //add the roman numerals to a string
         RomanNumerate(value)
        }
      }
      return string                                                       //return string of RN
    }
      catch(e){
        return e
      }
    }

module.exports = RomanNumerate;
    //////////////////////////////////////code to add to site //////////////////////////////////////////////////////////////////////////
//
//     function populateHTML() {
//       let decimal = $('input.input-box').val()
//       let message = RomanNumerate(decimal)
//       let messageHTML = `<h1>${message}</h1>`
//       console.log(messageHTML)
//       $('#results h1').replaceWith(messageHTML)
//       $('input.input-box').val('')
//       string="";
//     }
//
// button.onclick = populateHTML
