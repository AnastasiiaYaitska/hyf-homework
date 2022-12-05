"use strict";


// Flight booking fullname function


// 1. first part

// function getFullname(firstname, surname) {
 
//     return firstname + " " + surname;
// }

// console.log(getFullname("Anastasiia", "Yaitska"));

// const fullname1 = getFullname('Sascha', 'Borodina');
// const fullname2 = getFullname('Sergii', 'Borodin');




// 2. second part


const isMale = false;

function getFullname(firstname, surname,useFormalName ) {
    if (firstname === "" || firstname === Number) {
        return "Input field filled out incorrectly";
    } else if (useFormalName && !isMale) {
        return `Lady ${firstname} ${surname}`;
    } else if (useFormalName && isMale) {
        return `Lord ${firstname} ${surname}`;
    } else { 
       return firstname + " " + surname;
    } 
}


 console.log(getFullname("Anastasiia", "Yaitska" ,true));




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
    else if (typeof temperature !== Number) {
        return " need a number";
    }
    else {
        return " I can not help you (";
    }
}

console.log(recommendedWeatherWear(14)) 





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
        // }

// console.log(getEventWeekday(2));
// console.log(getEventWeekday(1));


// This is a good way of thinking! Luckily though, if the sum is smaller than weekDays.length, then sum % weekDays.length will be equal to sum, which is exactly what you want. So you can just remove this if and return weekDays[dayIndex] 😊

// // II metod

// function getEventWeekday(beingEventDay) {
    

//     const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     const currentDate = new Date();

//     const dateIndex = currentDate.getDay()
//     console.log(dateIndex)
//     for (let index = 0; index < array.length; index++) {
//         const element = weekDays[index];
//         if (index === dateIndex) {
//             const sum = index + beingEventDay;
//             if (sum< weekDays.length){}
//         }
        // ?????????????
//     }
// }
// getEventWeekday()



// Student manager

// const class07Students = [];

// const queen = "Hendes Majestæt Dronning Margrethe II";

// function addStudentToClass(studentName) {
//     if (studentName === queen) {
//         return class07Students.push(queen);
//     } else if (class07Students.length >= 6) {
//         return "Cannot add more students to class 07.";
//     } else if (class07Students.includes(studentName)) {
//         return `Student ${studentName} is already in the class`
//     } else if (studentName === "") {
//         return "Need name."     
//     } else {
//         class07Students.push(studentName);
//         return class07Students;
//     }
// }

// function getNumberOfStudents(arr) {
//     return arr.length;
// }


// console.log(addStudentToClass('anastasiia'));
// console.log(addStudentToClass('anastasa'));
// console.log(getNumberOfStudents(class07Students));



// Candy helper optional



const boughtCandyPrices = [];

function addCandy(candyType, weight) {

    const candyTypeToLowerCase = candyType.toLowerCase();
    
    const candySweet = "sweet";
    const candyChocolate = "chocolate";
    const candyToffee = "toffee";
    const candyChewingGum = "chewing-gum";
    let sum = 0;

    if (candyTypeToLowerCase === candySweet) {
        sum = weight * 0.5;
       

       return boughtCandyPrices.push(sum);
    } else if (candyTypeToLowerCase === candyChocolate) {
        sum = weight * 0.7;
       return console.log(boughtCandyPrices.push(sum));
    } else if (candyTypeToLowerCase === candyToffee) {
        sum = weight * 1.1;
       return console.log(boughtCandyPrices.push(sum));
    } else if (candyTypeToLowerCase === candyChewingGum) {
        sum = weight * 0.03;
       return console.log(boughtCandyPrices.push(sum));
    } else {
        return "Input incorrect";
    }

}

console.log(addCandy("SWEEt", 20));
console.log(addCandy("SWEEt", 30));
console.log(addCandy("toffee", 20));
console.log(boughtCandyPrices);


const amountToSpend = Math.random() * 100;

function canBuyMoreCandy(arr) {
    

    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sum += element;
        
        if (sum > amountToSpend) {
            return "Enough candy for you!";
        } else {
            return "You can buy more, so please do!";
        }
    }
    
}

console.log(canBuyMoreCandy(boughtCandyPrices));



// anotheArr[11] = '12'

