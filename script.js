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

  if (passwordLength < 8 || passwordLength > 128) {
    confirm("Password must be between 8 and 128 characters");
    return false;

    // continue prompts
  } else {
    // Separate variables for each character type
    var selectedSpecialCharacters = "";
    var selectedUpperCasedCharacters = "";
    var selectedLowerCasedCharacters = "";
    var selectedNumericCharacters = "";

    // include special characters?
    var includeSpecialCharacter = confirm(
      "Would you like to include special characters?"
    );
    if (includeSpecialCharacter) {
      selectedSpecialCharacters = specialCharacters.join("");
    }

    // include upper case characters?
    var includeUpperCase = confirm(
      "Would you like to include uppercase letters?"
    );
    if (includeUpperCase) {
      selectedUpperCasedCharacters = upperCasedCharacters.join("");
    }

    // include lower case characters?
    var includeLowerCase = confirm(
      "Would you like to include lowercase letters?"
    );
    if (includeLowerCase) {
      selectedLowerCasedCharacters = lowerCasedCharacters.join("");
    }

    // include numbers?
    var includeNumbers = confirm("Would you like to include numbers?");
    if (includeNumbers) {
      selectedNumericCharacters = numericCharacters.join("");
    }
    // Concatenate selected character types
    userPassword =
      selectedSpecialCharacters +
      selectedUpperCasedCharacters +
      selectedLowerCasedCharacters +
      selectedNumericCharacters;

    // check if at least one character type is true:

    if (
      !includeSpecialCharacter &&
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers
    ) {
      // user must restart is all are false

      confirm("You must select at least one character type");
      return false;
    }

    return true;
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += getRandom(userPassword);
  }
  return generatedPassword;
}

// Function to reset the password-related variables
function resetPassword() {
  passwordLength = 0;
  userPassword = "";
  finalPassword = "";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  resetPassword(); // Reset password-related variables
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
