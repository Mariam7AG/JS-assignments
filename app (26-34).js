
// var number = parseInt(prompt("Enter a positive integer:"));

// document.write("Number: " + number + "<br>");

// var roundedValue = Math.round(number);
// document.write("Rounded Value: " + roundedValue + "<br>");

// var floorValue = Math.floor(number);
// document.write("Floor Value: " + floorValue + "<br>");

// var ceilValue = Math.ceil(number);
// document.write("Ceil Value: " + ceilValue);







// var number = parseFloat(prompt("Enter a negative floating-point number:"));

// document.write("Number: " + number + "<br>");

// var roundedValue = Math.round(number);
// document.write("Rounded Value: " + roundedValue + "<br>");

// var floorValue = Math.floor(number);
// document.write("Floor Value: " + floorValue + "<br>");

// var ceilValue = Math.ceil(number);
// document.write("Ceil Value: " + ceilValue);







// var number = parseFloat(prompt("Enter a number:"));

// var absoluteValue = Math.abs(number);

// document.write("The absolute value of " + number + " is " + absoluteValue);








// var diceValue = Math.floor(Math.random() * 6) + 1;

// document.write("Dice Value: " + diceValue);







// var randomNumber = Math.random();

// var randomCoinValue;
// if (randomNumber < 0.5) {
//   randomCoinValue = "Tails";
// } else {
//   randomCoinValue = "Heads";
// }

// document.write("Random Coin Value: " + randomCoinValue);







// var randomNumber = Math.floor(Math.random() * 100) + 1;

// document.write("random number between 1 and 100 is " + randomNumber);








// var userInput = prompt("Enter your weight in Kilograms");

// var weightInKilograms = parseFloat(userInput);

// document.write("The weight of the user is " + weightInKilograms + " kilograms.");









// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userInput = prompt("Enter a number between 1 and 10");

// var userNumber = parseInt(userInput);

// if (userNumber === secretNumber) {
//   document.write("Congratulations!");
// } else {
//   document.write("Try again!");
// }







// --------------------------------------------------------------------------------------------------------------







// var currentDate = new Date();

// var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// var dayOfWeek = weekdays[currentDate.getDay()];
// var month = months[currentDate.getMonth()];
// var date = currentDate.getDate();
// var year = currentDate.getFullYear();

// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds();

// document.write(dayOfWeek + " " + month + " " + date + " " + year + " " + hours + ":" + minutes + ":" + seconds);







// var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// var currentMonth = new Date().getMonth();

// var currentMonthName = monthNames[currentMonth];

// alert("Current Month: " + currentMonthName);







// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var currentDay = new Date().getDay();

// var currentDayName = dayNames[currentDay];

// alert("Today is " + currentDayName);







// var currentDay = new Date().getDay();

// if (currentDay === 6 || currentDay === 0) {
//   alert("It's Fun day");
// }









// var currentDay = new Date().getDate();

// if (currentDay < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }








// var elapsedMilliseconds = new Date().getTime();

// var elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60));

// document.write("Current Date:", new Date() + "<br>");

// document.write("Elapsed milliseconds since January 1, 1970:", elapsedMilliseconds + "<br>");

// document.write("Elapsed minutes since January 1, 1970:", elapsedMinutes);








// var currentHour = new Date().getHours();

// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }







// var laterDate = new Date(2020, 11, 31);

// document.write("Later date:", laterDate);







// var startingDate = new Date(2015, 5, 18);

// var timeDifference = new Date().getTime() - startingDate.getTime();

// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// alert(daysPassed + " days have passed since 1st Ramadan, 2015");







// var referenceDate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500 (PKT)");

// var targetDate = new Date(2015, 0, 1); 

// var timeDifference = Math.floor((referenceDate.getTime() - targetDate.getTime()) / 1000);

// document.write("On reference date " + referenceDate.toString() + ",<br>" + timeDifference + " seconds had passed since the beginning of 2015");








// var currentDate = new Date();

// var oneHourAgo = new Date(currentDate.getTime() - (60 * 60 * 1000));

// document.write("Current date: " + currentDate.toString() + "<br>" + "1 hour ago, it was: " + oneHourAgo.toString());








// var currentDate = new Date();

// var date100YearsBack = new Date();
// date100YearsBack.setFullYear(date100YearsBack.getFullYear() - 100);

// alert("Current date: " + currentDate.toString() + "\n100 years back, it was: " + date100YearsBack.toString());







// var age = prompt("Enter your age:");

// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;

// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + birthYear);







// var customerName = prompt("Enter customer name:");
// var currentMonth = prompt("Enter current month:");
// var numberOfUnits = parseFloat(prompt("Enter number of units:"));
// var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
// var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

// var netAmountPayable = numberOfUnits * chargesPerUnit;

// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// netAmountPayable = netAmountPayable.toFixed(2);
// grossAmountPayable = grossAmountPayable.toFixed(2);

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p>Month: " + currentMonth + "</p>");
// document.write("<p>Number of units: " + numberOfUnits + "</p>");
// document.write("<p>Charges per unit: " + chargesPerUnit + "</p>");
// document.write("<p>Net Amount Payable (within Due Date): " + netAmountPayable + "</p>");
// document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge + "</p>");
// document.write("<p>Gross Amount Payable (after Due Date): " + grossAmountPayable + "</p>");











