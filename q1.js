
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  // Creating instances of the Movie class with various movie names
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  const darkKnight = new Movie("The Dark Knight", "Warner Bros.", "PG-13");
  const inception = new Movie("Inception", "Warner Bros.", "PG-13");
  const shawshankRedemption = new Movie("The Shawshank Redemption", "Castle Rock", "R");
  
  // Output the created Movie instances
  console.log(casinoRoyale);
  console.log(darkKnight);
  console.log(inception);
  console.log(shawshankRedemption);
  
  // Example array of Movie instances
  const movieArray = [casinoRoyale, darkKnight, inception, shawshankRedemption];
  
  // Using getPG method to filter movies with "PG" rating
  const pgMovies = Movie.getPG(movieArray);
  
  // Output the filtered PG movies
  console.log(pgMovies);
  