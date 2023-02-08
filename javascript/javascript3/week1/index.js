// Weather app

const refs = {
    form: document.querySelector('.form'),
    weatherCardUl: document.querySelector('.weather-card'),
    btnWeather: document.querySelector('#weather'),
    btnLocation: document.querySelector('#location')
}

const BASE_URL = ' https://api.openweathermap.org/data/2.5/weather?';
const KEY_API = '7055e15674a22b0a478dfe0deecc8581';
const POSITION_KAY = 'geolocation';


refs.form.addEventListener('submit', getWeather);

// refs.btnWeather.addEventListener('click', )




function getWeather(event) {
    event.preventDefault();
    console.log(event);
    const inputValue = event.currentTarget.elements.city.value;
    console.dir(inputValue);
    // const btnShowWeather = event.currentTarget.elements.weather;
    
    // const btnGetLocation = event.currentTarget.elements.location;
    // console.log({btnGetLocation, btnShowWeather})

    if (event.submitter.id === "weather" && inputValue !== "") {
        
        fetchWeather(inputValue).then(data => createdMarkup(data)).catch(error=> console.log(error))
    }

    if (event.submitter.id === "location" && inputValue === "") {
        
        
        fetchCurrentLocationWeather().then(data => createdMarkup(data)).catch(error => console.log(error));
    }
}


async function fetchWeather(city) {

    const response = await fetch(`${BASE_URL}units=metric&q=${city}&appid=${KEY_API}`);
    const weather = await response.json();
    console.log(weather)
    return weather;

}

async function fetchCurrentLocationWeather() {
   await getLocation();
    const parsedLocationFromLocalStorage = JSON.parse(localStorage.getItem(POSITION_KAY))
    console.log(parsedLocationFromLocalStorage)
    
    const response = await fetch(`${BASE_URL}lat=${parsedLocationFromLocalStorage.lat}&lon=${parsedLocationFromLocalStorage.long}&units=metric&appid=${KEY_API}`);
    const weather = await response.json();
    return weather;

}

const getLocation = () => new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
        const location = {};
        location.lat = position.coords.latitude;
        location.long = position.coords.longitude;

        localStorage.setItem(POSITION_KAY, JSON.stringify(location));
        resolve()
    }) 
}) 
    
   

    



function createdMarkup(data) {
    const { name, main: { temp },
        weather: [  {description, icon} ],
        wind: { speed: windSpeed },
        sys: { sunrise, sunset }
    } = data;
    
    const convertSunrise = convertMs(sunrise);
    const convertSunset = convertMs(sunset);
    console.log(convertSunrise);
    
    const markup = `<li class="weather-item">${name}</li>
                    <li class="weather-item" ><img src=" http://openweathermap.org/img/wn/${icon}@2x.png"/></li>
                    <li class="weather-item">${description}</li>
                    <li class="weather-item">${temp} ℃</li>
                    <li class="weather-item">${windSpeed} m/sec</li>
                    <li class="weather-item">Sunrise  ${convertSunrise.hours}:${convertSunrise.minutes}:${convertSunrise.seconds} <br>
                    Sunset ${convertSunset.hours}:${convertSunset.minutes}:${convertSunset.seconds}</li>`;
  
    refs.weatherCardUl.innerHTML = markup;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
//   const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return {  hours, minutes, seconds };
}