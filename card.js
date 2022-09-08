class Card {
  constructor(
    simScore,
    title,
    year,
    poster,
    rated,
    runtime,
    tags,
    imdbRating,
    rottenTomatoes,
    plot,
    director,
    stars
  ) {
    this.simScore = simScore;
    this.title = title;
    this.year = year;
    this.poster = poster;
    this.rated = rated;
    this.runtime = runtime;
    this.tags = tags;
    this.imdbRating = imdbRating;
    this.rottenTomatoes = rottenTomatoes;
    this.plot = plot;
    this.director = director;
    this.stars = stars;
  }
}
export default Card;
