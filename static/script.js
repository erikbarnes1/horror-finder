import newMovieLibrary from "/static/updatedLibrary.js";

//const movLib = [
//  "Hereditary",
//  "Midsommar",
//  "The_Descent",
//  "The_Accursed_Cavern",
//];

function getSentencesWithWord(word, text) {
  const sentenceArray = text.replace(/([=.?!])\s*(?=[A-Z])/g, "$1|").split("|");
  return sentenceArray.filter((sentence) => sentence.includes(word));
}

let movieIndexArray = [];
let rejectArray = [];

let prmoiseArray = [];
for (let i = 0; i < newMovieLibrary.length; i++) {
  let url =
    "https://en.wikipedia.org/w/api.php?" +
    new URLSearchParams({
      origin: "*",
      action: "query",
      titles: newMovieLibrary[i],
      format: "json",
      prop: "extracts",
      explaintext: true,
    });
  prmoiseArray.push(url);
}
try {
  for (let i = 0; i < prmoiseArray.length; i++) {
    const req = await fetch(prmoiseArray[i]);
    const json = await req.json();
    const item_id = Object.keys(json.query.pages);
    const title = json.query.pages[item_id].title;
    const extract = json.query.pages[item_id].extract;
    const sentence = "an average rating of";
    if (extract != "" && extract.includes(sentence)) {
      const reviewArray = getSentencesWithWord("an average rating of", extract);
      const rating = reviewArray[0].slice(-8, -1);

      const obj = {
        title: "",
        extract: "",
        rating: "",
      };

      let newObj = Object.create(obj);
      newObj.title = title;
      newObj.extract = extract;
      newObj.rating = rating;
      movieIndexArray.push(newObj);
    } else if (extract != "") {
      const obj = {
        title: "",
        extract: "",
        rating: null,
      };

      let newObj = Object.create(obj);
      newObj.title = title;
      newObj.extract = extract;
      newObj.rating = null;
      movieIndexArray.push(newObj);
    } else {
      const obj = {
        title: "",
      };
      let newObj = Object.create(obj);
      newObj.title = title;
      rejectArray.push(newObj);
    }
  }
} catch (e) {
  console.error(e);
}
//console.log(movieIndexArray, "success");
console.log(rejectArray, "fail");
