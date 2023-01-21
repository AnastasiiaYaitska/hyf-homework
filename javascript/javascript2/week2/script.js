
// 1.1. Doubling of number

const numbers = [1, 2, 3, 4, 5, 6, 7];
const oddDoublingNumbers = numbers.filter(number =>
    number % 2 !== 0).map(number=> number * 2);
console.log("The doubled numbers are", oddDoublingNumbers); 

// 1.2. Working with movies

// Create an array of movies containing the movies with a short title (you define what short means)
const shortNameMovies = movies.filter(({ title }) => title.split(" ").length <= 2);
console.log(shortNameMovies)

// Create an array of movie titles with long movie titles
const longMoviesTitlesArray = movies.map(({ title }) => title);
console.log(longMoviesTitlesArray);

// Count the number of movies made between 1980-1989 (including both the years)
const numberOfMoviesBetween80_89 = movies.filter(({ year }) => year >= 1980 && year <= 1989).length;
console.log(numberOfMoviesBetween80_89);

// Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const arrayWithExtraKey = movies.map(movie => {
    if (movie.rating >= 7) {
        movie.tag = "Good"
    } else if (movie.rating >= 4 && movie.rating < 7) {
        movie.tag = "Average"
    } else if (movie.rating < 4) {
        movie.tag = "Bad"
    }
    return movie;
});
console.log(arrayWithExtraKey);

// Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
const higherRatingMovies = movies.filter(movie => movie.rating > 6).map(movie => movie.rating);
console.log(higherRatingMovies);

// Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
function countTotalNumbersOfKeywords( name) {
   return movies.filter((movie) =>   
        movie.title.toLowerCase().includes(name.toLowerCase())         
  ).length
}
console.log(countTotalNumbersOfKeywords("Surfer"));
console.log(countTotalNumbersOfKeywords("Alien"));

// Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated. Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"
function  duplicatedWordsInTitle(array) {
    const titleWithDuplicated = array.filter((film) => {
        if (new Set(film.title.toLowerCase().split(' ')).size !== (film.title.toLowerCase().split(' ')).length) {
            return film;
        }
    });
    return titleWithDuplicated;
}
console.log(duplicatedWordsInTitle(movies))



// Calculate the average rating of all the movies using reduce. Optional
const totalRating = movies.reduce((total, movie) => { return total + movie.rating }, 0);
const averageRating = Math.round(totalRating / movies.length);
console.log(averageRating);

// Count the total number of Good, Average and Bad movies using reduce. A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional
const getTags = movies => movies.reduce((allTags, movie) => {
    allTags.push(movie.tag);
    return allTags
}, []);
console.log(getTags(movies));
const tags = getTags(movies);

const getTagsStats = (acc, tag) => {
    if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

    acc[tag] += 1;
    return acc;
}
const countTags = tags => tags.reduce(getTagsStats, {});
const tagCount = countTags(tags);
console.log(tagCount);
