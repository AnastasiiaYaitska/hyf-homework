// 2. Spirit animal name generator

const body = document.querySelector("body");
const pagesMarkup = `<div class="container">
      <label for="">
        <input type="text" />
      </label>
      <p class="output"></p>
      <div class="btn-set">
        <button type="submit">Get the name</button>
        <button type="reset">Restart</button>
      </div>
    </div>`;

body.insertAdjacentHTML("beforeend", pagesMarkup);


const input = document.querySelector("input");
const output = document.querySelector(".output");
const btnSubmit = document.querySelector("button[type=submit]");
const btnReset = document.querySelector("button[type=reset]");
    const spiritAnimals = [{
        animal: "Alligator",
        description: "Alligators are patient creatures, laying in wait to snap their jaws shut on their prey."
        }, {
        animal: "Ant",
        description: "Ants are very goal-oriented and work well in groups."
    }, {
        animal: "Bat",
        description: "Despite hanging upside down in caves, bats are quite resilient animals, using echolocation and their sensitive ears to communicate."
    }, {
        animal: "Bear",
        description: "Bears aren’t the aggressive creatures many say they are; rather, they are nurturing and gentle. "
    }, {
        animal: "Bee",
        description: "Bees are all about productivity and working hard to serve their queen."
    }, {
        animal:"Cat",
        description:"If you keep seeing a cat or have a cat as your spirit animal, it means you need to take action, or it’s a negative warning of the future."
    }, {
        animal:"Deer",
        description:"Deer are incredibly gentle, graceful animals whom we often see grazing meadows and protecting their offspring."
    }, {
        animal:"Dog",
        description:"To have one as your spirit animal is a warning to be aware of hidden issues you haven’t come to know just yet; it’s also a reminder to possess a high level of loyalty with the people in your life, just like the animal does."
    }, {
        animal:"Elephant",
        description:"Not only do elephants never forget, but they are highly intelligent mammals who symbolize honor, royalty, strength and power. "
    }, {
        animal:"Frog",
        description:"We usually see frogs hanging out by bodies of water, and symbolize cleansing, rebirth, and peace."
    }];


let inputValue = '';

input.addEventListener("input", onInputPress);
btnSubmit.addEventListener("click", getRandomSpiritAnimal, { once: true });
btnReset.addEventListener("click", getNewRandomSpiritAnimal);


function onInputPress(event) {
    // inputValue = event.target.value;
    inputValue = input.value;
    console.log(inputValue);
  return inputValue;
};


function getRandomSpiritAnimal() {
    if (!inputValue) {
        return output.textContent = "Need the name";
    };
    const randNum = Math.floor(Math.random() * 10) + 1;
    const randomAnimal = spiritAnimals[randNum];
    const { animal, description } = randomAnimal;
    output.textContent = ` ${inputValue} - ${animal}. ${description}`;
    
};

function getNewRandomSpiritAnimal() {
     if (!inputValue) {
        return output.textContent = "Need the name";
    };
    const randNum = Math.floor(Math.random() * 10) + 1;
    const randomAnimal = spiritAnimals[randNum];
    const { animal, description } = randomAnimal;
    output.textContent = ` ${inputValue} - ${animal}. ${description}`;
};





// 1.1 Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function findingShortestWord(arr) {
    return arr.reduce((a, b) => a.length <= b.length ? a : b);
}

// console.log(findingShortestWord(danishWords));
// console.log(danishWords)

// 1.2. Find and count the Danish letters

const danishChars = ["å", "ø", "æ"];
let sum = 0;
let sumÅ = 0;
let sumØ = 0;
let sumÆ = 0;


function countDanishChars(string) {
    const stringToLowerCase = string.toLowerCase();
    for (let index = 0; index < stringToLowerCase.length; index++) {
    const element = string[index];
  
    for (let index = 0; index < danishChars.length; index++) {
        const element2 = danishChars[index];
      
        if (element === element2) {
            sum += 1;
            if (element === danishChars[0]) {
                sumÅ += 1;
            }
            if (element === danishChars[1]) {
                sumØ += 1;
            }
            if (element === danishChars[2]) {
                sumÆ += 1;
            }
        }

    }
    }
    return {total: sum, æ: sumÆ, ø: sumØ, å: sumÅ};

}
console.log(countDanishChars("Blå grød med røde bær"));