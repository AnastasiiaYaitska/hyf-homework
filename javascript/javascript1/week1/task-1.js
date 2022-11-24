// Age-ify (A future age calculator)

// 1

const yearOfBirth = 1991;
const yearFuture = 2023;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);


// 2 

function ageCalculator (yearOfBirth, yearFuture) {
    const age = yearFuture - yearOfBirth;
    return `You will be ${age} years old in ${yearFuture}`;
}
console.log(ageCalculator(1991, 2023));


