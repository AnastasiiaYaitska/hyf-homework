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

// function recommendedWeatherWear(temperature) {
//     if (temperature <= 30 && temperature >= 20) {
//         return "Go to the beach.";
//     } else if (temperature <= 19 && temperature >= 15) {
//         return " T-shirt and shorts. ";
//     } else if (temperature <= 14 && temperature >= 7) {
//         return " Sweeter and trousers. ";
//     } else if (temperature <= 6 && temperature >= 0) {
//         return " Jacket , sweeter and trousers. ";
//     } else if (temperature <= 0 && temperature >= -15) {
//         return "Wnter- jacket, sweeter, trousers. ";
//     } else if (temperature <= -16 && temperature >= -25) {
//         return " Double- Wnter- jacket, double-sweeter, double-trousers.";
//     }
//     // else if (typeof temperature !== Number) {
//     //     return " need a number";
//     // }
//     else {
//         return " I can not help you (";
//     }
// }

// console.log(recommendedWeatherWear(31)) 





// Event application

// function getEventWeekday(beingEventDay) {
    

// const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// const currentDate = new Date().toDateString();


// const currentWeekDay = currentDate.slice(0, 3);


//     for (let index = 0; index < weekDays.length; index++) {
//         const element = weekDays[index];
       
//         if (element === currentWeekDay) {
//             const sum = index + beingEventDay;
        
//             if (sum >= weekDays.length) {
//                 const dayIndex = sum % weekDays.length;
//                 return weekDays[dayIndex];
//             } else {
//                 return weekDays[sum];
//             }
//         }
//     }
//         }

// console.log(getEventWeekday(2));
// console.log(getEventWeekday(1));




// Student manager

const class07Students = [];

const queen = "Hendes Majestæt Dronning Margrethe II";

function addStudentToClass(studentName) {
    if (studentName === queen) {
        return class07Students.push(queen);
    } else if (class07Students.length >= 6) {
        return "Cannot add more students to class 07.";
    } else if (class07Students.includes(studentName)) {
        return `Student ${studentName} is already in the class`
    } else if (studentName === "") {
        return "Need name."     
    } else {
        class07Students.push(studentName);
        return class07Students;
    }
}

function getNumberOfStudents(arr) {
    return arr.length;
}


console.log(addStudentToClass('anastasiia'));
console.log(addStudentToClass('anastasa'));
console.log(getNumberOfStudents(class07Students))