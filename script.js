// Assignment code here
const specialCharacters = ["!","@","#","$","%","^","&","*","(",")","~","`","?",".",",",">","<","'",'"',";",":","/","[","]","{","}","=","+","-","_",];
const upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = [0,1,2,3,4,5,6,7,8,9]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function generatePassword(){
  
  var specialCharactersPrompt = confirm("Does your Password Require Special Characters? Press OK for yes or Cancel for no");
  var upperCase = confirm("Does Your Password Require Uppercase Letters? Choose OK for yes and Cancel for No");
  var lowerCase = confirm("Does Your Password Require Lowercase Letters? Choose OK for yes and Cancel for No")
  var password = "";
  var tempPass ="";
  var pwLength = parseInt(prompt("Enter a Desired Password Length Between 8-128 Characters"));
  
  if (pwLength >= 8 && pwLength <= 128){
    tempPass += specialCharacters;
    tempPass += upperCaseLetters;
    tempPass += lowerCaseLetters;
    tempPass += numbers;
    console.log(password);
    
     for (i = 0; i < pwLength; i++){
       var randomize = Math.floor(Math.random() * tempPass.legnth);
       password+=tempPass[randomize];
      }
      return password;
  } 

  else {
    pwLength();
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

