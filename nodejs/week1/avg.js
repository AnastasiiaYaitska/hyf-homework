("use strict");

let sum = 0;
const data = process.argv.slice(2); //return array of command line arguments

if (data.length === 0) {
  console.log("No arguments provided");
} else {
  for (let i = 0; i < data.length; i++) {
    if (isNaN(data[i])) {
      console.log("Enter numbers only");
      return;
    }
    sum += +data[i];
  }
  console.log("Average: " + (sum / data.length).toFixed(1));
}
