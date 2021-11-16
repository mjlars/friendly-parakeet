
   
// Assignment Code
var generateBtn = document.querySelector("#generate");
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
function generatePassword() {

var length = prompt("Please select password length between 8 and 128 characters")
while (length < 8 || length > 128) {
  alert("Please select a number between 8 and 128")
  length = prompt("How many characters would you like?")
}
var upperCase = confirm("Would like upper case letters?")
var lowerCase = confirm("Would you like lower case letters?")
var numbers = confirm("would you like number?")
var symbol = confirm("Would you like symbols?")

var randomFunctionArray = []
  var passwordStr = "" 
  for(i=0; i< length; i++) {
    if (upperCase){
      randomFunctionArray.push(randomFunc.upper())
    }
    if (lowerCase) {
      randomFunctionArray.push(randomFunc.lower())
    }
    if (numbers) {
      randomFunctionArray.push(randomFunc.number())
    }
    if (symbol) {
      randomFunctionArray.push(randomFunc.symbol())
    }
 
  
  
  passwordStr = passwordStr + randomFunctionArray[Math.floor(Math.random() * randomFunctionArray.length)];
  // lowerString = lowerString + getRandomLower()
  }
  return passwordStr 


}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 ) +97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 ) +65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 ) +48);
}
function getRandomSymbol() {
  const symbols = '!"#$%&()*+,-./:;<=>?@[]_{}|`~' 
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);