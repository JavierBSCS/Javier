//task1
let name = "Jessie Jay Javier";
let age = 23;
let city = "Baguio City";

let currentYear = new Date().getFullYear();
let yearBorn = currentYear - age;

let isAdult = age >= 18;

let remainder = age % 5;

console.log(name, yearBorn, isAdult, remainder);



//task 2
let sentence = name + " from " + city;

function toUpperCase(str) {
    return str.toUpperCase();
}

function findFirstA(str) {
    return str.indexOf('a');
}

let originalString = "I am learning JavaScript at School";
let updatedString = originalString.replace(/JavaScript/g, "JS");

console.log(sentence, toUpperCase(sentence), findFirstA(sentence), updatedString);



