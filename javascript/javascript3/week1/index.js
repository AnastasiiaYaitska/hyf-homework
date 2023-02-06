// Weather app

const refs = {
    form: document.querySelector('.form'),
    weatherCardUl: document.querySelector('.weather-card')
}

const BASE_URL = ' https://api.openweathermap.org/data/2.5/weather?';
const KEY_API = '7055e15674a22b0a478dfe0deecc8581';
const POSITION_KAY = 'geolocation';


refs.form.addEventListener('submit', getWeather);





function getWeather(event) {
    event.preventDefault();

    const inputValue = event.currentTarget.elements.city.value;
    console.dir(inputValue);
    const btnShowWeather = event.currentTarget.elements.weather;
    console.log(btnShowWeather);
    const btnGetLocation = event.currentTarget.elements.location;

    if (btnShowWeather && inputValue !== "") {
        
        fetchWeather(inputValue).then(data => createdMarkup(data)).catch(error=> console.log(error))
    }

    if (btnGetLocation && inputValue === "") {
        
        
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
    getLocation();
    const parsedLocationFromLocalStorage = JSON.parse(localStorage.getItem(POSITION_KAY))
    console.log(parsedLocationFromLocalStorage)
    const response = await fetch(`${BASE_URL}lat=${parsedLocationFromLocalStorage.lat}&lon=${parsedLocationFromLocalStorage.long}&units=metric&appid=${KEY_API}`);
    const weather = await response.json();
    return weather;
}

function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        const location = {};
        location.lat = position.coords.latitude;
        location.long = position.coords.longitude;

        localStorage.setItem(POSITION_KAY, JSON.stringify(location));
       
    })
    
}


function createdMarkup(data) {
    const { name, main: { temp },
        weather: [  {description, icon} ],
        wind: { speed: windSpeed },
        sys: { sunrise, sunset }
    } = data;
    
    const markup = `<li class="weather-item">${name}</li>
                    <li class="weather-item" ><img src=" http://openweathermap.org/img/wn/${icon}@2x.png"/></li>
                    <li class="weather-item">${description}</li>
                    <li class="weather-item">${temp} ℃</li>
                    <li class="weather-item">${windSpeed} m/sec</li>
                    <li class="weather-item">${sunrise} ${sunset}</li>`;
  
    refs.weatherCardUl.innerHTML = markup;
}