
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




