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

const useFormalName = true;
const gender = "female"

function getFullname(firstname, surname) {
    if (firstname === "" || firstname === Number) {
        return "Input field filled out incorrectly";
    } else if (useFormalName && gender === "female") {
        return `Lady ${firstname} ${surname}`;
    } else if (useFormalName && gender === "male") {
        return `Lord ${firstname} ${surname}`;
    } else if (useFormalName !== true) {
       return firstname + " " + surname;
    } else {
        return "Try again."
}
};

 console.log(getFullname("Anastasiia", "Yaitska"));