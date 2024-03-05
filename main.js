// Assignment 4

// Answer 1
// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");
// var sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is: " + sum + "");





// Answer 2
// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");
// var subtraction = num1 - num2;
// var multiplication = num1 * num2;
// var division = num1 / num2;
// var modulus = num1 % num2;

// document.write("<h2>Arithmetic Operations</h2>");
// document.write("<p>Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "</p>");
// document.write("<p>Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "</p>");
// document.write("<p>Division: " + num1 + " / " + num2 + " = " + division + "</p>");
// document.write("<p>Modulus: " + num1 + " % " + num2 + " = " + modulus + "</p>");
    



// Answer 3
var myVariable;

// b. Show the value of the variable after declaration.
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number.
myVariable = 5;

// d. Show the initial value of the variable.
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable.
myVariable++;

// f. Show the value of the variable after increment.
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable.
myVariable += 7;

// h. Show the value of the variable after addition.
document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable.
myVariable--;

// j. Show the value of the variable after decrement.
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable's value by 3.
var remainder = myVariable % 3;

// l. Output the remainder.
document.write("The remainder is: " + remainder);

    



// Answer 4
// var ticketPrice = 600;
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;

// document.write("<h2>Movie Ticket Cost</h2>");
// document.write("<p>Price of one movie ticket is: " + ticketPrice + " PKR</p>");
// document.write("<p>Number of tickets: " + numberOfTickets + "</p>");
// document.write("<p>Total cost for buying " + numberOfTickets + " tickets: " + totalCost + " PKR</p>");



// Answer 5
var number = 5;

document.write("<h2>Multiplication Table of " + number + "</h2>");
document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br>");



// Answer 6
var celsiusTemperature = 30;
var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");
var fahrenheitTemperature2 = 86;
var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5 / 9;
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");


// Answer 7
var priceItem1 = 20;
var priceItem2 = 30;
var quantityItem1 = 2;
var quantityItem2 = 3;
var shippingCharges = 10;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<h3>Total Cost: $" + totalCost + "</h3>");


// Answer 8
var totalMarks = 500;
var marksObtained = 420;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h2>Percentage Calculation</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");


// Answer 9
var usDollars = 10;
var saudiRiyals = 25;
var usdToPkrRate = 104.80;
var sarToPkrRate = 28;
var totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);
document.write("<h2>Currency Conversion</h2>");
document.write("<p>Total amount in US dollars: $" + usDollars + "</p>");
document.write("<p>Total amount in Saudi Riyals: SAR " + saudiRiyals + "</p>");
document.write("<h3>Total amount in Pakistani Rupees: PKR " + totalPkr.toFixed(2) + "</h3>");

// Answer 10

var number = 20;
var result = ((number + 5) * 10) / 2;
document.write("<h2>Arithmetic Operations</h2>");
document.write("<p>Initial Number: " + number + "</p>");
document.write("<h3>Result after arithmetic operations: " + result + "</h3>");

// Answer 11
var currentYear = new Date().getFullYear();
var birthYear = 1990; 
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("<h2>Age Calculator</h2>");
document.write("They are either " + age1 + " or " + age2 + " years old");

// Answer 12
var radius = 5;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);
document.write("<h2>Geometrizer</h2>");
document.write("The circumference is " + circumference.toFixed(2) + "<br>");
document.write("The area is " + area.toFixed(2));


// Answer 13
var favoriteSnack = "chocolate";
var currentAge = 25;
var maxAge = 80;
var amountPerDay = 2;
var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalSnacksNeeded = daysRemaining * amountPerDay;
document.write("<h2>Lifetime Supply Calculator</h2>");
document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);