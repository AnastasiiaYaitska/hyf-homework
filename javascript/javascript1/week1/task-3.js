
// Housey pricey (A house price estimator)
 
let houseWidth = prompt('house width?');
let houseDeep = prompt('house deep?');
let houseHigh = prompt('hose higt?');
const volumeInMeters = houseDeep * houseHigh * houseWidth;
let gardenSizeInM2 = prompt('garden size in m2?');
let housePrice = prompt('house price?');

if (housePrice >= volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300) {
   console.log("You pay too much!");
} else {
console.log('It is a good price =)');
};
