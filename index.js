// Lecture 1

// alert("Hello, World!");

let js = "Amazing";

// if (js === "Amazing") {
//     alert("JavaScript is FUN!");
// } else {
//     alert("JavaScript is POOP!");
// };

let number = 40 + 8 + 23 - 10;

// console.log("The result of the calculation is: " + number);
// alert("The result of the calculation is: " + number);

// Lecture 2 - variables and values

// We can mutate let and var variables but not constants directly
// var is a little older and nopt used as much, but can be more easily used 'out of scope'

// Use lowerCamelCase for variable names in JS, this is the standard
let personName = "Jonas";
personName = "Bob";
const myName = "Michael";
var wifeName = "Ayako";
wifeName = "Cutie Mc Beauty Pie";
console.log("His name is " + personName);
console.log("My name is " + myName);
console.log("My lovely wife's name is " + wifeName);

let firstName = "Michael";
let middleName = "Thomas";
let lastName = "McCann";

let region = "England";
// let region = "America";
// let region = "Japan";

let printed_name = nameFormat(region)

function nameFormat (region) {
    if (region === "England") {
        let fullName = firstName + " " + middleName + " " + lastName;
        console.log(fullName);
        return fullName;
    }
    
    if (region === "America") {
        let fullName = middleName + " " + firstName + " " + lastName;
        console.log(fullName);
        return fullName;
    }
    
    if (region === "Japan") {
        let fullName = lastName + " " + firstName + " " + middleName;
        console.log(fullName);
        return fullName;
    }
}

console.log("Full name in: " + region + " is: " + printed_name);

const PI = 3.1471;


// Challenge 1 - Values and Variables
let country = "Japan";
let continent = "Asia";
// let population = "124,352,000";
population = 124352000;

let print_string = "My country is " + country + " in the continent of " + continent + " and it has a population of " + population + ".";


// Challenge 2 - Data Types
let isIsland = true;

// An example of undefined
let language;

let print_string_2 = "";

if (isIsland) {
    print_string_2 = country + " is an island."
} else {
    print_string_2 = country + " is not an island."
}

console.log(print_string);
console.log(print_string_2);
console.log("The language spoken in " + country + " is " + language);

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);

// Undefined examples in console log
console.log(language);
console.log(typeof language);

// Dynamic typing example
population = "124,352,000";

console.log(typeof population);

language = "Japanese";

console.log(language);
console.log(typeof language);

// This is a JS bug that says that the type of null is Object, but this is not true, just ignore this if it comes up in the future, it has never been fixed for legacy preservation issues
console.log(typeof null);


// Challenge 3
// let, var, and const

// let is used to declare varibales that can change later (mutating/ reassigning)
// (let is block scoped)
let age = 30;
age = 31;
console.log(age);

// let is also useful for declaring empty varibales for set up before assignment
let birthday;
birthday = "4th May";
console.log(birthday);

// const is used to create constants that are not allowed to change for any reason, though there are ways around this later
const dateOfBirth = "4th May 1988";
console.log(dateOfBirth);

// We cannot set up a const with no value, there needs to be some initial value
// const favouriteMeal;

// const should be used when you are sure that a value never has to change, like for mathematical constants etc that if you changed would break a lot of things

// var is used to assign a variable like let, but is deprecated, it should not be used, but can be useful for making a variable global as it ignores scope
// (var is function scoped)

// var can also be mutated
var job = "Programmer";
job = "Dirtbag";
console.log(job);

// We don't even need to specifically declare a variable in order to set one up
// This is actually a terrible idea because this creates a property on the global object ans this can cause a lot of problems going forwards
lastName = "McCann";
console.log(lastName);
console.log(typeof lastName);


// Challenge 4 Operators
// Operators allow us to perform calculations and comparisons etc

// Mathematcial Operators
// + - / // * **
const currentYear = 2024
const ageMichael = currentYear - 1988;
const ageAyako = currentYear - 1985;
console.log("Michael's age in " + currentYear + " is " + ageMichael); 
console.log("Ayako's age in " + currentYear + " is " + ageAyako);

console.log("Both age's together are: " + (ageAyako + ageMichael));
console.log("Michael's age times 2 is " + (ageMichael * 2));
console.log("The ages divided by each other is: " + (ageMichael / ageAyako));

const firstName3 = "Michael";
const lastName3 = "McCann";
const fullName = firstName3 + " " + lastName3;
console.log(fullName);

// typeof is also considered an operator in JS
console.log(typeof fullName);

// Assignment operators
// =
let x = 10 + 5;

// == equivalence operator
function isX15() {
    if (x == 15) {
        message = "x is 15!";
        console.log("x is 15!");
        return message;
    } else {
        message = "x is not 15!";
        console.log("x is not 15!")
        return message;
    };
}

let result = isX15(x);
// Reassignment operators
// += -= /= //= *= **= ++ --
x += 10;

console.log(x);
result = isX15(x);
// console.log(result);

// x ++ is the same as x += 1
x ++;
console.log(x);

// x -- is the same as x -= 1
x --;
console.log(x);

// Comparison Operators
// == === != < > <= >=
// These are used to create boolean values
// In real development the results of these calculations would likely be stored to variables instead of being printed directly to the console
console.log(ageMichael == ageAyako);
console.log(ageMichael === ageAyako);
console.log(ageMichael != ageAyako);
console.log(ageAyako > ageMichael); 
console.log(ageAyako < ageMichael); 
console.log(ageAyako >= 39);

// However, we could write the code for this calculation could be written directly into the console online as it has access to all of the variables running at the moment in that environment, this can be good to perform quick testing

let result2 = ageAyako == ageMichael;
console.log(result2);


// Challenge 5 Operator Precedence
// We can check the exact operator precedence value of all operators by looking at the MDN (Mozilla Developer Network) resources
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

var now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x2, y;
// Mathematical operators will be performed first and then the assignment operators will execute later as they have a much lower precedence
// Some operators like mathematical operations execute from left to right, others, like assignment operators execute from right to left
x2 = y = 25 - 10 - 5;
console.log(x2, y);

const averageAge = (ageJonas + ageSarah) / 2;

console.log(ageJonas);
console.log(ageSarah);
console.log(averageAge);


// CODING CHALLENGE NUMBER 1

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);

let massAyako = 58;
let heightAyako = 1.50;

console.log(massAyako);
console.log(heightAyako);

BMIAyako = massAyako / (heightAyako * heightAyako);

console.log(BMIAyako)

let massMichael = 92;
let heightMichael = 1.70;

console.log(massMichael);
console.log(heightMichael);

BMIMichael = massMichael / (heightMichael * heightMichael);

console.log(BMIMichael);


const firstName2 = "Michael";
const job2 = "Programmer";
const birthYear = 1988;
const now2 = 2037;

// JS will convert a type such an number into a string format so it can be concatenated into the string below, this is called type coercion

// This is an example of more classic string concatenation, it can be confusing to read because of the breaking up of the information
const michael = "I am " + firstName2 + " and I am a " + job2 + ", and I am " + (now2 - birthYear + " years old!");
console.log(michael);

// From ES6 onwards, we can use template literals instead of doing this string concatenation, which is a lot easier to use and understand

// We enclose the entire string in backticks `` and then any varibales have to be within ${}, these type of strings are called tempate literals
constMichaelNew = `I am ${firstName2} and I am a ${job2}, and I am ${(now2 - birthYear)} years old!`;

console.log(constMichaelNew);

console.log(`This is my string without quotation marks and instead backticks, this helps because we don't need to worry about conflicting quotation marks and it is easier to insert a variable if we need to later on`);

// Multi-line string
// Before ES6 we had to add \n to add a newline every time we wanted a new line.

console.log(`String with \n\
multiple \n\
lines`);

// After ES6 we don't have to do this anymore if the string is between backticks `` so this is a lot easier to deal with

console.log(`String with
multiple
lines`
);


// If/ Else statements
// The condition specified in the parentheses has to evaluate to a truthy or falsey value

let personName2 = "Sarah";
let personAge = 16;

let legalAge = 18;
let isOldEnough = personAge > legalAge;
let sentenceEnd;

if (isOldEnough) {
    console.log(`${personName2} is old enough to get a driving license.`);
} else if (personAge == 18) {
    console.log(`${personName2} is exactly 18, they are just about old enough to get a driving license.`);
} else {
    let extraS = (legalAge - personAge) != 1;
    if (extraS) {
        sentenceEnd = "years!";
    } else {
        sentenceEnd = "year!";
    };
    console.log(`${personName2} is not old enough to get a driving license yet. Please wait for ${(legalAge - personAge)} ${sentenceEnd}`);
};

let birthYear2 = 1988;
let birthCentury;

if (birthYear2 <= 2000) {
    birthCentury = "20th";
} else {
    birthCentury = "21st";
};

console.log(`${personName2} was born in the ${birthCentury} century, in the year ${birthYear2}`);


// CODING CHALLENGE 2

const massMark2 = 78;
const heightMark2 = 1.69;
const massJohn2 = 92;
const heightJohn2 = 1.95;

const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log(BMIMark2, BMIJohn2);

// Print an message to the user depending on which BMI is higher

if (BMIMark2 > BMIJohn2) {
    console.log(`Mark's BMI (${BMIMark2}) is higher than John's (${BMIJohn2})!`);
} else {
    console.log(`John's BMI (${BMIJohn2}) is higher than John's (${BMIMark2})!`);
}


// Type coercion and conversion
// i.e. changing one type into another when we want them to

// Type coercion happens when JS changes types for us implicity, behind the scenes

// Type convertion is when we manually change from one type to another

// Like this we just concatenate the number to the end of the string, we would need to convert inputYear into a number type in order to perform the calculation
const inputYear = "1991";
console.log(inputYear);

// We can use the Number() method in order to change a string to a number, the original value is not converted, just the value that is being held in this new Number object
console.log(Number(inputYear));

// If we did it like tbis we could perform the calculation
console.log(Number(inputYear) + 18);

// Or we could make a new variable to hold the result of the Number() conversion
let digitYear = Number(inputYear);
console.log(digitYear);
console.log(typeof digitYear);

// If a Number() method fails it will create a NaN variable (Not a Number), meaning that we tried to convert something that cannot be converted to a valid number into a number

let myName2 = "Michael";
let convertedName = Number(myName2);
console.log(convertedName);
// NaN confusingly still has the type of number even though it is not a valid number
console.log(typeof convertedName);

// We can also convert something to string using the String() method
stringYear = String(digitYear);
console.log(stringYear);
console.log(typeof stringYear);

// JS can convert variables from type number to string, string to number, or to a boolean, we cannot convert something to undefinined or null for example

// Converting to Booleans works in a different way using truthy and falsy values

// JS does type coercion for us automatically in many situations, for example:

console.log("I am " + 23 + " years old!");
// The + operator used in concatenation performs a String() method conversion for us, the same also happens in template literals to make it easy for us to do

// Strings can also be converted to numbers if we are using the minus or a different mathematical operator, but using + will also result in a conversion to string
console.log("23" - "10" - 3);

// For example,in this case the numbers will be converted to strings and concatenated together, which can be confusing if you forget that it works this way
console.log("23" + "10" + 3);

// For example, this will produce the final result 10, which we might not be expecting
let n = "1" + 1;
n = n - 1;
console.log(n);


// Truthy and Falsey values

// Falsey values are not exactly false but will become false when converted to a Boolean, these are:
// 0, "", undefined, null, NaN

// Everything else will be considered a Truthy value as they will evaluate to True when converted to a Boolean

// We can convert values to Boolean using the Boolean() method when we want to do type conversion, but in reality, we almost never do this, usually it happens in if else statements etc as implicit type coercion
 
console.log("Truthy and Falsey values")
console.log("");

console.log(`Number 0: ${Boolean(0)}`);
console.log(`String number 0: ${Boolean(String(0))}`);
console.log(`Undefined: ${Boolean(undefined)}`);
console.log(`Non-empty string: ${Boolean("Michael")}`);
console.log(`Empty string: ${Boolean("")}`);
// An empty set of curly braces counts as a Truthy value
console.log(`Empty set of curly braces: ${Boolean({})}`);
// Like curly braces, an empty Array counts as a Truthy value
console.log(`Empty Array: ${Boolean([])}`);
// However, an empty set of parentheses is a Falsey value
console.log(`Empty pair of parentheses: ${Boolean()}`);
console.log(`Null: ${Boolean(null)}`);

// If moneyInDollars is 0, it will evaluate to false in the if block later
// let moneyInDollars = 0;
// If moneyInDollars is not 0, it will be evaluated to true in the if block later as long as it has a valid value
let moneyInDollars = 100

function changeMoney (amount) {
    moneyInDollars = amount;
    return moneyInDollars;
}

function checkMoney(moneyInDollars) {
    if (moneyInDollars) {
        let message = `You have ${moneyInDollars} dollars`;
        return message;
    } else {
        let message = "Go away POORO!"
        return message;
    };
}

let result3 = checkMoney(moneyInDollars);
console.log(result3);

moneyInDollars = changeMoney(10000);

let result4 = checkMoney(moneyInDollars);
console.log(result4);

// Another use of truthy and falsey values is to check if a variable has actually been set or not

// In this example, height equates to a falsey value, as it is undefined and has no value yet
// let height;

// If we do this the other block is defined, but we could run into problems if height is ACTUALLY 0 as this will equate to Falsey value
let height = 0;

// To get around this I have converted height to a String if it is actually 0 on purpose, though this is not ideal as we can no longer use the number 0 as a falsely value
if (height === 0) {
    height = String(height);
};

if (height) {
    console.log("Height is defined");
} else {
    console.log("Height is UNDEFINED");
    console.log(typeof height);
};

// The triple equal sign checks for value and type equality at the same time, this is known as the strict equality operator
let ageOfAyako = 39;
// If we only have one line of output for an if block we don't need to set up curly braces, although I personally think that looks better and is clearer to understand
if (ageOfAyako === 39) console.log("Ayako is the perfect age right now!");

// The double equals sign checks for equality but doesn't mind if things are different types as long as they can be coerced into the same type for the purposes of comparison, this is known as the loose equality operator and it performs this coercion automatically
ageOfAyako = "39";
if (ageOfAyako == 39) console.log("Ayako is 39 years old.");

// The loose equality operator is usually avoided as much as possible, as it can introduce a lot of bugs and odd behaviour into the code, the strict equality operator is much safer to use so should be defaulted to as much as possible

// Prompt allows an input box to be generated for the user on the webpage
userNumber = prompt("What is your favourite number?");
console.log(userNumber);
console.log(typeof userNumber);

if (userNumber == 23) {
    console.log("Cool, 23 is an amazing number!");
};

// This one wouldn't work on its own as the prompt function grabs a string not a number, to get around this we would have to convert the captured string into a number
userNumber = Number(userNumber);
if (userNumber === 23) {
    console.log("Cool, 23 is an amazing number!");
} else if (userNumber === 42) {
    console.log("How many roads must a man walk down?");
} else if (userNumber === 7) {
    console.log("Lucky number 7!");
} else {
    console.log(`I don't know what to say about ${userNumber}, it don't seem like any good kind of number to me...`);
};

// The inequality operator (different operator) is used to check if things are not equal, there are strict !== and non=strict != versions of this, again we should endevaour to use !== as much as possible

if (userNumber !== 9) {
    console.log("Why not number 9?");
};


// BOOLEAN OPERATORS

// AND &&

let sarahLicense = true;
let sarahEyesight = true;

canSarahDrive = (sarahLicense && sarahEyesight);

console.log(`Can Sarah drive? ${canSarahDrive}`);

// OR ||

canSarahDrive = (sarahLicense || sarahEyesight);

console.log(`Can Sarah Drive? ${canSarahDrive}`);

// NOT ! operator, inverts the value of a Boolean e.g. true -> false

let age2 = 16;
testA = age2 >= 20;
testB = age2 < 30;

console.log(testA);
console.log(!testA);
console.log(testB);
console.log(!testB);

console.log(testA && testB);
console.log(testA || testB);
console.log(!testA && testB);

// The NOT operator has precedence over the other boolean operators, so this inversion happens first before the rest of the calculation is complete

let isTired = false;
let isDrunk = true;

let shouldDrive = (sarahLicense && sarahEyesight && !isTired && !isDrunk);
console.log(`Should Sarah be allowed to drive? ${shouldDrive}`);


// CODING CHALLENGE 3

// Calculate the average score for each team
let scoreDolphins = (97 + 112 + 101) / 3;
let scoreKoalas = (109 + 95 + 123) / 3;
let minScore = 100;

console.log(scoreDolphins);
console.log(scoreKoalas);

let minDolphins = scoreDolphins >= minScore;
let minKoalas = scoreKoalas >= minScore;
console.log(minDolphins);
console.log(minKoalas);

// Comparison logic to see which team(s) win the trophy
// Teams have to score more than the minScore in order to qaulify for the ability to win the trophy
if (scoreDolphins === scoreKoalas && minDolphins && minKoalas) {
    console.log("Both teams win the trophy");
} else if (scoreDolphins > scoreKoalas && minDolphins) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && minKoalas) {
    console.log("Koalas win the trophy");
} else {
    console.log(`Sadly, no-one hit the minimum score of ${minScore}, so there are no trophy winners today!`);
;}


// Switch case statements

// With a switch case block we need to define the thing we will be comparing/ testing in the parentheses after switch()

// Then for each case, we specify the value to check against and the code that runs in that case, we use case followed by the value, then a COLON, then the code to execute

// If we want multiple cases to run the same code we can define them one above the other like in the case of Wednesday and Thursday and Saturday and Sunday. 

// We need to put in a break statement once the code for a case has been executed, as switch case blocks act as a kind of loop that needs to be broken out of when done. The default block does not need to be broken out of, it is effcetively used as a fail state

// We should also add a default case which is what executes if none of the other cases are matched against, we should cover all possibilities as a matter of course to prevent bugs etc.

// Switch case statements are used to compare equality, rather than working out arithmatic or something else to come up with each case, basically each case is a strict equality check

let day = "Monday";

switch(day) {
    case"Monday": 
        console.log("It's time for work!");
        break;
    case"Tuesday":
        console.log("Time for pie night!");
        break;
    case"Wednesday":
    case"Thursday":
        console.log("Prepare for your beekeeping examination!");
        break;
    case "Friday": 
        console.log("Prepare for the meeting with Mr. Kawalski");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Enjoy your weekend!");
        break;
    default: 
        console.log("Not a valid day!");
};

// This is the same code written out in else if else statements, it looks more concise unless there are more than one thing running for each day, in which case it would be much longer

day = "Sunday";

if (day === "Monday") {
    console.log("It's time for work!");
} else if (day === "Tuesday") {
    console.log("Time for pie night!");
} else if (day === "Wednesday" || day === "Thursday") {
    console.log("Prepare for your beekeeping examination!");
} else if (day === "Friday") {
    console.log("Prepare for the meeting with Mr. Kawalski");
} else if (day === "Saturday" || day === "Sunday") {
    console.log("Enjoy your weekend!");
} else {
    console.log("Not a valid day!");
};

// Switch cases try to avoid writing the same code snippets over and over, they are best used when there is a fairly limited number of available values for a variable, similar to an enum in ust for example, they are also designed to be more readable though this is a matter of opinion

// The switch case is becoming less common but can still be an important and useful tool to know and use


// CONDITIONAL OPERATOR (TERNARY ?)

// We can use the ternary operator as shorthand for an if else statement, we use the conditional operator ? to do the job of a let or else kind of function from Rust


// We might need to put everything in the same block so we can access the variables that we need from this situation
{
    let age2 = 13;
    age2 >= 18 ? console.log("wine") :
    console.log("water");
    
    // An operator is an expression and always produces a value, so we can use it to conditionally declare variables
    
    let canDrink = age2 >= 18 ? true :
    false;
    
    console.log(canDrink);
    
    // We can save a lot of time and space by using the ternary operator in this way
    
    let drink2;
    
    if (age2 >= 18) {
        drink2 = "wine";
    } else {
        drink2 = "water";
    }
    
    console.log(drink2);

    // We can use ternary operator statements in template literals, unlike if statements etc. which cannot be used as placeholder values in a template literal

    console.log(`I like to drink ${age2 >= 18 ? "wine." :
        "water."}`);

    // Be careful with the formatting here, we don't need to repeat things like console.log because we are just trying to give the string we want to print out a value using the ternary operator expression.
}

// The ternary operator example is considered easier to read and a lot more concise than writing if else blocks which are verbose in comparison, however, it is not thought of as a replacement for if else because it is only really good for making quick decisions like in a template literal, for more advanced logic if else can be more robust.


// CODING CHALLENGE 4

let bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);

