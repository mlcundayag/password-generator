// Assignment code here

//set variables for character letters, numbers and symbols
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%&*+=~?/<>";

//set variables for input #
var passwordTxt = document.getElementById("password");
var length = document.getElementById("length");
var addUpperletters =  document.getElementById("uppercase");
var addLowerletters = document.getElementById("lowercase");
var addNumbers =  document.getElementById("numbers");
var addSymbols = document.getElementById("symbols");

// Get references to the #generate element
var generateBtn = document.getElementById("generate");

//Set password generator and length
const generatePassword = (length, characters) => {
  let password = "";
    for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

// Add event listener to generate button on click and tick boxes
generateBtn.addEventListener("click", () => {
  let characters = "";
  addUpperletters.checked ? (characters += upperLetters) : "";
  addLowerletters.checked ? (characters += lowerLetters) : "";
  addNumbers.checked ? (characters += numbers) : "";
  addSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
  if (addUpperletters.checked === false && 
      addLowerletters.checked === false && 
      addNumbers.checked === false && 
      addSymbols.checked === false
      ){
        alert("Please check at least one box!")
      }
});

//Add event listener to copy
var copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  let passwordCopy = document.getElementById("password").value;
  if (navigator.clipboard){
    navigator.clipboard.writeText(passwordCopy).then(() => {
      alert("Password Copied")
    } 
    )
  }else {
    alert("Browser not supported");
    console.log("Browsert not supported");
  }
  });