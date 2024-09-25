//task1

let name = "//////////";
let age = "/////////";
let cityresidence = "/////////";


let currentYear = new Date().getFullYear();
let yearborn = currentYear - age;

let Adult = age >= 18;

let remainder = age % 5;

console.log(name, yearborn, Adult, remainder);



//task 2

let sentence = name + " from " + cityresidence;


function toUpperCase(str) {
    return str.toUpperCase();
}


function findFirstA(str) {
    return str.indexOf('a');
}


let originalString = "I am learning JavaScript at School";
let updatedString = originalString.replace(/JavaScript/g, "JS");

console.log(sentence, toUpperCase(sentence), findFirstA(sentence), updatedString);



//task 3


let favoritefood = ['//////', '////////', '////////', '/////////', '///////'];


favoritefood.push('///////');


favoritefood.splice(1, 1); 


favoritefood.sort();

function printfavoritefood(foods) {
    for (let food of foods) {
        console.log(food);
    }
}

printfavoritefood(favoritefood);




