import movieLibrary from "./MovieLibrary";

var xhr = new XMLHttpRequest();

var url =
  "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots'";

xhr.open("GET", url, true);

xhr.onload = function () {
  // Parse the request into JSON
  var data = JSON.parse(this.response);

  // Log the data object
  console.log(data);

  // Log the page objects
  console.log(data.query.pages);

  // Loop through the data object
  // Pulling out the titles of each page
  for (var i in data.query.pages) {
    console.log(data.query.pages[i].title);
  }
};

xhr.send();


//extract single page text
https://en.wikipedia.org/w/api.php?action=query&titles=${}&prop=extracts&explaintext

//extract titles from page

https://en.wikipedia.org/w/api.php?action=parse&page=List_of_horror_films_of_1970&format=json&contentmodel=MassMessageListContent

console.log(movieLibrary);






