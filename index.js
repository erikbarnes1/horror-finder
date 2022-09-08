import mov from "./finalArray.js";
import Card from "./card.js";

function newCardy(param) {
  for (let i = 0; i < param.length; i++) {
    let newCard = new Card(
      `${param[i].simScore}`,
      `${param[i].title}`,
      `${param[i].year}`,
      `${param[i].poster}`,
      `${param[i].rated}`,
      `${param[i].runtime}`,
      `${param[i].tags}`,
      `${param[i].imdbRating}`,
      `${param[i].rottenTomatoes}`,
      `${param[i].plot}`,
      `${param[i].director}`,
      `${param[i].stars}`
    );

    let hello = document.querySelector(".larger_card_container");

    if (param[i].simScore >= 3) {
      hello.innerHTML += `<div class="card_container">
<div class="web_card">
<div class="web_poster">
<img class="web_image" src=${newCard.poster} alt="poster"></img>
</div>
  <div class="web_info">
    <div class="web_upper">
      <div class="web_titleandyear">
        <div class="web_title">${newCard.title}</div>
        <div class="web_year">(${newCard.year})</div>
      </div>
      <div class="web_matchandwatchlist">
        <div class="web_match_ex">Excellent Match</div>
        <div class="web_watchlist"><img src="watchlist.svg.png" alt="wtag" title="Add To Watchlist"/></div>
      </div>
    </div>
    <div class="web_middle">
      <div class="web_rated">${newCard.rated}</div>
      <div class="web_divider">|</div>
      <div class="web_runtime">${newCard.runtime}</div>
      <div class="web_divider">|</div>
      <div class="web_tags">${newCard.tags.toString().replace(/,/g, ", ")}</div>
    </div>
    <div class="web_ratings">
      <div class="web_imdbrating"><img src="imdb.svg.png" alt="itag" />${
        newCard.imdbRating
      }/10</div>
      <div class="web_rottentomatoes"><img src="rt.svg.png" alt="rtag" />${
        newCard.rottenTomatoes
      }</div>
    </div>
    <div class="web_plot">${newCard.plot}</div>
    <div class="web_lower">
      <div class="web_people">Director: ${newCard.director}</div>
      <div class="web_divider">|</div>
      <div class="web_stars">Stars: ${newCard.stars}</div>
    </div>
  </div>
</div>
</div>`;
    }
    if (param[i].simScore === 2) {
      hello.innerHTML += `<div class="card_container">
<div class="web_card">
<div class="web_poster">
<img class="web_image" src=${newCard.poster} alt="poster"></img>
</div>
  <div class="web_info">
    <div class="web_upper">
      <div class="web_titleandyear">
        <div class="web_title">${newCard.title}</div>
        <div class="web_year">(${newCard.year})</div>
      </div>
      <div class="web_matchandwatchlist">
        <div class="web_match_gr">Great Match</div>
        <div class="web_watchlist"><img src="watchlist.svg.png" alt="wtag" title="Add To Watchlist"/></div>
      </div>
    </div>
    <div class="web_middle">
      <div class="web_rated">${newCard.rated}</div>
      <div class="web_divider">|</div>
      <div class="web_runtime">${newCard.runtime}</div>
      <div class="web_divider">|</div>
      <div class="web_tags">${newCard.tags.toString().replace(/,/g, ", ")}</div>
    </div>
    <div class="web_ratings">
      <div class="web_imdbrating"><img src="imdb.svg.png" alt="itag" />${
        newCard.imdbRating
      }/10</div>
      <div class="web_rottentomatoes"><img src="rt.svg.png" alt="rtag" />${
        newCard.rottenTomatoes
      }</div>
    </div>
    <div class="web_plot">${newCard.plot}</div>
    <div class="web_lower">
      <div class="web_people">Director: ${newCard.director}</div>
      <div class="web_divider">|</div>
      <div class="web_stars">Stars: ${newCard.stars}</div>
    </div>
  </div>
</div>
</div>`;
    }
    if (param[i].simScore === 1) {
      hello.innerHTML += `<div class="card_container">
<div class="web_card">
<div class="web_poster">
<img class="web_image" src=${newCard.poster} alt="poster"></img>
</div>
  <div class="web_info">
    <div class="web_upper">
      <div class="web_titleandyear">
        <div class="web_title">${newCard.title}</div>
        <div class="web_year">(${newCard.year})</div>
      </div>
      <div class="web_matchandwatchlist">
        <div class="web_match_go">Good Match</div>
        <div class="web_watchlist"><img src="watchlist.svg.png" alt="wtag" title="Add To Watchlist"/></div>
      </div>
    </div>
    <div class="web_middle">
      <div class="web_rated">${newCard.rated}</div>
      <div class="web_divider">|</div>
      <div class="web_runtime">${newCard.runtime}</div>
      <div class="web_divider">|</div>
      <div class="web_tags">${newCard.tags.toString().replace(/,/g, ", ")}</div>
    </div>
    <div class="web_ratings">
      <div class="web_imdbrating"><img src="imdb.svg.png" alt="itag" />${
        newCard.imdbRating
      }/10</div>
      <div class="web_rottentomatoes"><img src="rt.svg.png" alt="rtag" />${
        newCard.rottenTomatoes
      }</div>
    </div>
    <div class="web_plot">${newCard.plot}</div>
    <div class="web_lower">
      <div class="web_people">Director: ${newCard.director}</div>
      <div class="web_divider">|</div>
      <div class="web_stars">Stars: ${newCard.stars}</div>
    </div>
  </div>
</div>
</div>`;
    }
    if (hello.childElementCount >= 100) {
      break;
    }
  }
}

let ul = document.getElementById("ul");
ul.addEventListener("mousedown", (event) => {
  const li = event.target.closest("li");
  if (!li || !ul.contains(li)) return;
  li.classList.toggle("selected");
});
let ul2 = document.getElementById("ul2");
ul2.addEventListener("mousedown", (event) => {
  const li = event.target.closest("li");
  if (!li || !ul2.contains(li)) return;

  li.classList.toggle("selected");
});
let u3 = document.getElementById("ul3");
ul3.addEventListener("mousedown", (event) => {
  const li = event.target.closest("li");
  if (!li || !ul3.contains(li)) return;

  li.classList.toggle("selected");
});
let ul4 = document.getElementById("ul4");
ul4.addEventListener("mousedown", (event) => {
  const li = event.target.closest("li");
  if (!li || !ul4.contains(li)) return;

  li.classList.toggle("selected");
});
let ul5 = document.getElementById("ul5");
ul5.addEventListener("mousedown", (event) => {
  const li = event.target.closest("li");
  if (!li || !ul5.contains(li)) return;

  li.classList.toggle("selected");
});
let ul6 = document.getElementById("ul6");
ul6.addEventListener("mousedown", (event) => {
  const li = event.target.closest("li");
  if (!li || !ul6.contains(li)) return;

  li.classList.toggle("selected");
});

let hello = document.querySelector(".larger_card_container");

const searchButton = document.querySelector(".search");
searchButton.addEventListener("click", (e) => {
  selectedTagsArray = [];
  hello.innerHTML = "";
});

function smooth() {
  hello.scrollIntoView({ behavior: "smooth" });
}

searchButton.addEventListener("click", findTags);
searchButton.addEventListener("click", smooth);

let selectedTagsArray = [];
let selectedString;

function findTags() {
  let unsortedArray = [];
  let excellentMatch = [];
  let greatMatch = [];
  let goodMatch = [];
  let selected = document.querySelectorAll(".selected");
  for (let i = 0; i < selected.length; i++) {
    selectedTagsArray.push(selected[i].innerText);
    selectedString = selectedTagsArray
      .toString()
      .split(" ")
      .join("")
      .replace(/,/g, " ");
  }
  for (let i = 0; i < mov.length; i++) {
    if (selectedTagsArray.some((el) => mov[i].tags.toString().includes(el))) {
      unsortedArray.push(mov[i]);
      continue;
    } else {
      continue;
    }
  }
  for (let i = 0; i < unsortedArray.length; i++) {
    let string = unsortedArray[i].tags
      .toString()
      .split(" ")
      .join("")
      .replace(/,/g, " ");

    //adding instances of words between both strings

    let freq1 = selectedString
      .toLowerCase()
      .split(" ")
      .reduce(
        (accumulator, key) =>
          Object.assign(accumulator, { [key]: (accumulator[key] || 0) + 1 }),
        {}
      );

    const freqC = string
      .toLowerCase()
      .split(" ")
      .reduce(
        (accumulator, key) =>
          Object.assign(accumulator, { [key]: (accumulator[key] || 0) + 1 }),
        freq1
      );
    unsortedArray[i].simScore = process(freqC);
  }
  for (let i = 0; i < unsortedArray.length; i++) {
    if (unsortedArray[i].simScore >= 3) {
      excellentMatch.push(unsortedArray[i]);
    }
  }
  for (let i = 0; i < unsortedArray.length; i++) {
    if (unsortedArray[i].simScore === 2) {
      greatMatch.push(unsortedArray[i]);
    }
  }
  for (let i = 0; i < unsortedArray.length; i++) {
    if (unsortedArray[i].simScore === 1) {
      goodMatch.push(unsortedArray[i]);
    }
  }
  excellentMatch.sort((a, b) => b.imdbRating - a.imdbRating);
  greatMatch.sort((a, b) => b.imdbRating - a.imdbRating);
  goodMatch.sort((a, b) => b.imdbRating - a.imdbRating);
  newCardy(excellentMatch);
  newCardy(greatMatch);
  newCardy(goodMatch);
}

//assigning a score for # of matches
function process(object) {
  let k = 0;
  for (const obj in object) {
    if (object[obj] === 2) {
      k += 1;
    }
  }
  return k;
}
