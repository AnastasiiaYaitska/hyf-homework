// Ez Namey (Startup name generator) Optional


const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const firstWords = ['Smooth', 'Calm', 'Fresh', 'Absolute', 'Tall', 'Nosy', 'Dominant', 'Drunk', 'Main', 'Fat'];
const secondWords = ['sky', 'fire', 'frog', 'grandfather', 'eagle', 'flower', 'deer', 'plan', 'ship', 'chair'];
const startupName = firstWords[randomNumber1] + ' ' + secondWords[randomNumber2];

console.log(`The startup: "${startupName}" contains ${startupName.length} characters.`);