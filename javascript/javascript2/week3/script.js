// 1. Warmup
// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout((() => console.log("Called after 2.5 seconds")), 2500);

// Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.

function delayFunction(delay, stringToLog) {
    return setTimeout((() => console.log(stringToLog)), delay * 1000);  
}

delayFunction(5, 'This string logged after 5 seconds');

// Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

const btn = document.querySelector('.click');
btn.addEventListener('click', () => {
   return setTimeout((() => console.log("Called after 5 seconds")), 5000);
});


// Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.


const earthLogger = () => console.log('Earth');
const saturnLogger = () => console.log('Saturn');

function planetLogFunction(callback) {
    return callback();
};

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);


// Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api

const locationBtn = document.querySelector('.location');
const output = document.querySelector('.output');
locationBtn.addEventListener('click', onLocationBtnClick);

function onLocationBtnClick() {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        output.textContent = `This is the latitude : ${lat}, 
        This is the longitude: ${long}`;
    })
}


// Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
    return setTimeout(callback, delay);
}


runAfterDelay(5000, () => console.log('This function should be logged after 5 seconds '));

// Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"
const body = document.querySelector('body')
window.addEventListener('dblclick', () => console.log("double click!"));
console.log(body)


// Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

const shouldTellFunnyJoke = true;

function jokeCreator(boolean, goodJoke, badJoke) {
    if (boolean) {
        return goodJoke();
    }
    return badJoke()
}

function logBadJoke() {
    let api =
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    fetch(api)
    .then((info) => info.json())
    .then((item) => {
     console.log(`${item.joke}`);
 });
}

function logFunnyJoke() {
    const api = "https://api.chucknorris.io/jokes/random";
    fetch(api)
        .then((info) => info.json())
        .then((item)=> console.log(`${item.value}`))
}


jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke )