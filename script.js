// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Initialize variables
var passwordLength;
var userPassword = "";
var finalPassword = "";

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt(
    "Enter the length of your password (between 8 and 128 characters"
  );

  // check user input is between 8 - 128 (continue if true and restart if false)

  if (passwordLength < 8) {
    confirm("Password must be at least 8 characters");
    return;
  } else if (passwordLength > 128) {
    confirm("Password must be less than 128 characters");
    return;

    // continue prompts
  } else {
    // include special characters?

    var includeSpecialCharacter = confirm(
      "Would you like to include special characters?"
    );

    if (includeSpecialCharacter) {
      userPassword += specialCharacters.join("");
    }

    // include upper case characters?

    var includeUpperCase = confirm("Would you like to include uppercase letters?");

    if (includeUpperCase) {
      userPassword += upperCasedCharacters.join("");
    }

    // include lower case characters?

    var includeLowerCase = confirm("Would you like to include lowercase letters?");

    if (includeLowerCase) {
      userPassword += lowerCasedCharacters.join("");
    }
    // include numbers?

    var includeNumbers = confirm("Would you like to include numbers?");

    if (includeNumbers) {
      userPassword += numericCharacters.join("");
    }

    // check if at least one character type is true:

    if (
      includeSpecialCharacter === false &&
      includeUpperCase === false &&
      includeLowerCase === false &&
      includeNumbers === false
    ) {
      // user must restart is all are false

      confirm("You must select at least one special character ");
      return;
    }
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  for (i = 0; i < passwordLength; i++) {
    finalPassword += getRandom(userPassword);
  }
  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
