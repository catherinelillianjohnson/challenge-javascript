// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABC"
var lowercase = "abc"
var Numeric = "123"
var special = "!@#"
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var passwordLength = prompt("Enter a length between 8 and 128 characters")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Length must be at least 8 and no more than 128 characters")
    return generatePassword()
  }
  var wantsUppercase = confirm("Do you want Uppercase characters?")
  var wantsLowercase = confirm("Do you want lowercase characters?")
  var wantsNumeric = confirm("Do you want a Numeric value?")
  var wantsSpecial = confirm("Do you want special characters?")
  if (!wantsUppercase && !wantsLowercase && !wantsNumeric && !wantsSpecial) {
    alert("You must choose at least one password option")
    return generatePassword
  }
var includedcharacters = ""
if (wantsUppercase) {
includedcharacters += uppercase
}
if (wantsLowercase) {
  includedcharacters += lowercase
}
if (wantsNumeric) {
  includedcharacters += Numeric
}
if (wantsSpecial) {
  includedcharacters += special
}
var password = ""
for (var i = 0; i < passwordLength; i ++) {
  var randomchar = includedcharacters [Math.floor(Math.random()*includedcharacters.length)]
  password += randomchar
}
return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
