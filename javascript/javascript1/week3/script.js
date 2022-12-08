
// Item array removal


const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
// Write some code here
names.splice(1, 1);
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']





// When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function counterTravelTime(object) {
    const reminder = object.destinationDistance % object.speed;
    const minutes = Math.round(reminder * 60 / object.speed);
    const hours = (object.destinationDistance - reminder) / object.speed;
    return `${hours} hours and ${minutes} minutes `;
}

const travelTime = counterTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes




// Series duration of my life


const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Friends",
    days: 4,
    hours: 2,
    minutes: 20,
  },
  {
    title: "How I Met Your Mother",
    days: 3,
    hours: 4,
    minutes: 16,
    },
  {
    title: "Harry Potter",
    days: 2,
    hours: 16,
    minutes: 16,
    },
];

function logOutSeriesText(array) {
    let total = 0;
    array.forEach(({ title, days, hours, minutes }) => {
        
        const fullHours = (days * 24) + hours;
        const sumOfHoursAndMinutes = (minutes / 60) + fullHours;
        const convertationToYears = sumOfHoursAndMinutes * 0.0001140794586;
        const percentageOfLife = (convertationToYears * 100 / 80).toFixed(3);
       
        total += Number(percentageOfLife);

        console.log(`${title} took ${percentageOfLife} of my life`);
       

       

    })
     return `In total that is ${total.toFixed(2)} % of my life`;
}
console.log(logOutSeriesText(seriesDurations));