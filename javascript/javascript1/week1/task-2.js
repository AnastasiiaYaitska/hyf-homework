
// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2016;
const dogYearFuture = 2023;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = Math.random() > 0.5;
if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogYear * 10} dog years old in ${dogYearFuture}`);
} console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
