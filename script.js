// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  let results = "";
  let varLength = parseInt(prompt("How many characters would you like your password to be? Please enter any number between: 8-128."));

  if(varLength < 8 || varLength > 128) {
    window.alert("Your password must be between 8 - 128 characters.");
    return results;
  } else {
    let passwordLength = varLength;
  }
  let lowerCase = confirm("Would you like lower case letters?");
  if(lowerCase == false) {
   let passwordLowerCase = [];
  } else {
    let passwordLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  }
  let upperCase = confirm("Would you like upper case letters?");
  if(upperCase == false) {
    let passwordUpperCase = [];
  } else {
    let passwordUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  } 
  let numChar = confirm("Would you like to include numbers in your password?");
  if(numChar == false) {
    let passwordNum = [];
  } else {
    let passwordNum = ["0","1","2","3","4","5","6","7","8","9"];
  }
  let specialChar = confirm("Would you like to include special characters in your password?");
  if(specialChar == false) {
    let passwordSpecialChar = [];
  } else {
    let passwordSpecialChar = ["!","@","#","$","%","^","&","*","(",")","-"];
  };

  const passwordPool = passwordLowerCase.concat(passwordUpperCase, passwordNum, passwordSpecialChar);
  if( lowerCase == false && uppserCase)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
