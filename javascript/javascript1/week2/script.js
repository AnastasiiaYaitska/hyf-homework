"use strict";


// Flight booking fullname function


// 1. first part

// function getFullname(firstname, surname) {
 
//     return firstname + " " + surname;
// };

// console.log(getFullname("Anastasiia", "Yaitska"));

// const fullname1 = "Sascha";
// const fullname2 = "Nata";

// console.log(getFullname(fullname1, fullname2));


// 2. second part

// const useFormalName = true;
// const gender = "female"

// function getFullname(firstname, surname) {
//     if (firstname === "" || firstname === Number) {
//         return "Input field filled out incorrectly";
//     } else if (useFormalName && gender === "female") {
//         return `Lady ${firstname} ${surname}`;
//     } else if (useFormalName && gender === "male") {
//         return `Lord ${firstname} ${surname}`;
//     } else if (useFormalName !== true) {
//        return firstname + " " + surname;
//     } else {
//         return "Try again."
// }
// };

//  console.log(getFullname("Anastasiia", "Yaitska"));




// Weather wear

function recommendedWeatherWear(temperature) {
    if (temperature <= 30 && temperature >= 20) {
        return "Go to the beach.";
    } else if (temperature <= 19 && temperature >= 15) {
        return " T-shirt and shorts. ";
    } else if (temperature <= 14 && temperature >= 7) {
        return " Sweeter and trousers. ";
    } else if (temperature <= 6 && temperature >= 0) {
        return " Jacket , sweeter and trousers. ";
    } else if (temperature <= 0 && temperature >= -15) {
        return "Wnter- jacket, sweeter, trousers. ";
    } else if (temperature <= -16 && temperature >= -25) {
        return " Double- Wnter- jacket, double-sweeter, double-trousers.";
    }
    // else if (typeof temperature !== Number) {
    //     return " need a number";
    // }
    else {
        return " I can not help you (";
    }
}

console.log(recommendedWeatherWear(31)) 



