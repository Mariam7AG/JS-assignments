
// var firstName = prompt("Enter your first name:");

// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// document.write("Hello, " + fullName + "!");








// var favoritePhoneModel = prompt("Enter your favorite mobile phone model:");

// var inputLength = favoritePhoneModel.length;

// document.write("My favourite phone is: " + favoritePhoneModel + "<br>" + "Length of string is: " +  inputLength);








// var word = "Pakistani";

// var index = word.indexOf("n");

// document.write("String: " + word + "<br>" + "The index of 'n': " + index);








// var word = "Hello World";

// var lastIndex = word.lastIndexOf("l");

// document.write("String: " + word + "<br>" + "Last index of 'l': " + lastIndex);








// var word = "Pakistani";

// var character = word.charAt(3);

// document.write("String: " + word + "<br>" + "Character at index 3: " + character);








// var firstName = prompt("Enter your first name:");

// var lastName = prompt("Enter your last name:");

// var fullName = firstName.concat(" ", lastName);

// document.write("Hello, " + fullName + "!");








// var word = "Hyderabad";

// var replacedWord = word.replace("Hyder", "Islam");

// document.write("City: " + word + "<br>");
// document.write("After replacement: " + replacedWord);







// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var replacedMessage = message.replace(/and/g, "&");

// document.write("Original message: " + message + "<br>" + "After replacement: " + replacedMessage);







// var str = "472";

// var num = parseInt(str);

// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof str + "<br>");
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num);








// var userInput = prompt("Enter your input:");

// var uppercaseInput = userInput.toUpperCase();

// document.write("User Input: " + userInput + "<br>" + "Upper Case: " + uppercaseInput);








// var userInput = prompt("Enter your input:");

// var titleCaseInput = userInput.toLowerCase().split(" ").map(function(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// }).join(" ");

// document.write("User Input: " + userInput + "<br>");
// document.write("Title Case: " + titleCaseInput);







// var num = 35.36;
// var numAsString = num.toString();
// var numWithoutDot = numAsString.replace(".", "");

// document.write("Number: " + num + "<br>");
// document.write("Result: " + numWithoutDot);








// var username = prompt("Enter a username:");

// var containsSpecialSymbol = false;
// for (var i = 0; i < username.length; i++) {
//   var charCode = username.charCodeAt(i);
//   if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//     containsSpecialSymbol = true;
//     break;
//   }
// }

// if (containsSpecialSymbol) {
//   alert("Please enter a valid username");
// } else {
//   document.write("Username: " + username);
// }






// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to the bakery.What do you want to order sir/ma'am?");

// var lowercaseUserInput = userInput.toLowerCase();

// var isItemFound = false;

// for (var i = 0; i < A.length; i++) {
//   if (A[i] === lowercaseUserInput) {
//     isItemFound = true;
//     break;
//   }
// }

// if (isItemFound) {
//   alert(userInput + " is available in our bakery");
// } else {
//   alert("We are sorry." + userInput + " is not available in our bakery");
// }






//q15? 







// var university = "University of Karachi";

// var array = university.split("");

// for (var i = 0; i < array.length; i++) {
//   document.write(array[i] + "<br>");
// }






// var userInput = "Pakistan"

// var lastCharacter = userInput.charAt(userInput.length - 1);

// document.write("User Input: " + userInput + "<br>" + "Last character: " + lastCharacter);








// var str = "The quick brown fox jumps over the lazy dog";
// var wordToCount = "the";
// var count = 0;

// var lowercaseStr = str.toLowerCase();

// var words = lowercaseStr.split(" ");

// for (var i = 0; i < words.length; i++) {
//   if (words[i] === wordToCount) {
//     count++;
//   }
// }

// document.write("There are " + count + " ocurrence(s) of word 'the'");
