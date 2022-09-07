class Card {
  constructor(
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

for (let i = 0; i < movLib.length; i++) {
  let newCard = new Card(
    `${movLib[i].title}`,
    `${movLib[i].year}`,
    `${movLib[i].poster}`,
    `${movLib[i].rated}`,
    `${movLib[i].runtime}`,
    `${movLib[i].tags}`,
    `${movLib[i].imdbRating}`,
    `${movLib[i].rottenTomatoes}`,
    `${movLib[i].plot}`,
    `${movLib[i].director}`,
    `${movLib[i].stars}`
  );
}
export default Card;
