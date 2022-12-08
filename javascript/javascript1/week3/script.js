
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




// NOnoN0nOYes (Note taking app)
// Save a note

const notes = [];

function saveNote(content, id) {
    content = content,
    id = id,
    notes.push({ content, id })
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);


function getNote(id) {
    
        for (let index = 0; index < notes.length; index++) {
            const note = notes[index];
            const valueArr = Object.values(note);


          if (valueArr.includes(id)) {
                return note;
            } 
        } 
             
            return "error" 
}
    

 console.log(getNote(1));


function logOutNotesFormatted(arr) {

    const results = arr.forEach(({ content, id }) => 
  {
        console.log(`The note with id: ${id}, has the following note text: ${content}`)
    })
    
    return results ;
}

logOutNotesFormatted(notes)

// I did't come up with an additional function, if you can , halp me 😁



// CactusIO-interactive (Smart phone usage app) optional

const activities = [];

function addActivity(date, activity, duration) {
    date = date.toString(),
        activity = activity.toString(),
        duration = Number(duration),

        activities.push({date, activity, duration})
}
addActivity("23/7-18", "Youtube", 30);
console.log(activities)
addActivity("23/7-18", "Youtube", 30);



// Show my status

function showStatus(arr) {
    let total = 0;
   for (let index = 0; index < arr.length; index++) {
       const element = arr[index];
       total += element["duration"];
       
       if (arr === "") {
           return "error";
       } else if (total >= 90) {
           return "You have reached your limit, no more smartphoning for you!";
       }
   }
    
    return `"You have added ${arr.length} activities. They amount to ${total} min. of usage"`;
     
}
console.log(showStatus(activities))


// Can we tolk on the leasson about those tasks?🙈 

// Lets improve the addActivity, so that we dont need to specify the date, but the function automatically figures out what the date is.Check out this link: https://stackoverflow.com/a/34015511

// Improve the showStatus function by only showing the number of actitivies for that specific day.

// Create a function for calculating the activity a user has spent the most time on.