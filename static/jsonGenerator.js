/////////Extracting films from Wiki

let titlesArray = [];
let years = [];
let working = [];

const yearGenerator = () => {
  for (let i = 1960; i <= 2022; i++) {
    years.push(i);
  }
};
yearGenerator();

for (let i = 0; i < 2; i++) {
  let url =
    "https://en.wikipedia.org/w/api.php?" +
    new URLSearchParams({
      origin: "*",
      action: "query",
      generator: "categorymembers",
      gcmtitle: `Category: ${years[i]} horror films`,
      format: "json",
      gcmlimit: "max",
    });
  try {
    const req = await fetch(url);
    const json = await req.json();
    const pages = json.query.pages;

    function traverse(pages, func) {
      for (var i in pages) {
        func.apply(this, [i, pages[i]]);
        if (pages[i] !== null && typeof pages[i] == "object") {
          //going one step down in the object tree!!
          traverse(pages[i], func);
        }
      }
    }
    traverse(pages, process);
  } catch (e) {
    console.error(e);
  }

  function process(key, value) {
    if (key === "title") {
      titlesArray.push(value);
    }
  }
}

const movLib = [
  "Halloween (1978 film)",
  "Us (2019 film)",
  "It (2017 film)",
  "I Know What You Did Last Summer",
  "The Thing (1982 film)",
  "The Nun (2018 film)",
  "It Follows",
  "Speed Demon (2003 film)",
  "Dark Water (2005 film)",
  "Hereditary (film)",
  "Crimson Peak",
  "Great White (1981 film)",
];
let prmoiseArray = [];

for (let i = 0; i < movLib.length; i++) {
  let url =
    "https://en.wikipedia.org/w/api.php?" +
    new URLSearchParams({
      origin: "*",
      action: "query",
      formatversion: 2,
      pilicense: "any",
      titles: movLib[i],
      format: "json",
      prop: "categories|pageimages|extracts",
      piprop: "original",
      explaintext: true,
      cllimit: "max",
    });
  prmoiseArray.push(url);
}
try {
  for (let i = 0; i < prmoiseArray.length; i++) {
    const req = await fetch(prmoiseArray[i]);
    const json = await req.json();
    const item_id = Object.keys(json.query.pages);
    const title = json.query.pages[item_id].title;
    let category = json.query.pages[item_id].categories;
    const extract = json.query.pages[item_id].extract;
    const poster = json.query.pages[item_id].original.source;
    let categoryArray = [];
    const tags = [];
    const decade = [];
    var f = 0;
    category.forEach(function (cat) {
      let title = category[f].title;
      categoryArray.push(title);
      f = f + 1;
    });

    //assign categories

    function includes(t, ...word) {
      if (categoryArray.toString().includes(`${word}`)) {
        let tag = `${t}`;
        tags.push(tag);
      }
    }
    function includesDecade(t, ...word) {
      if (categoryArray.toString().includes(`${word}`)) {
        let tag = `${t}`;
        if (decade.length < 1) {
          decade.push(tag);
        }
      }
    }
    function catInput(ltr, word) {
      for (let words of ltr) {
        includes(`${word}`, words);
      }
    }
    function catInputDecade(ltr, word) {
      for (let words of ltr) {
        includesDecade(`${word}`, words);
      }
    }

    let a = ["hallucinogens", "hypnosis", "psychedelic"];
    catInput(a, "Trippy");

    let b = ["mystery", "detective"];
    catInput(b, "Mystery");

    let c = ["psychological"];
    catInput(c, "Psychological");

    let d = ["serial killer"];
    catInput(d, "Serial killer");

    let e = ["slasher"];
    catInput(e, "Slasher");

    let k = ["supernatural"];
    catInput(k, "Supernatural");

    let g = ["haunted house"];
    catInput(g, "Haunted house");

    let h = ["science fiction"];
    catInput(h, "Sci-Fi");

    let j = ["mad scientist"];
    catInput(j, "Mad scientist");

    let l = ["vampire", "dracula"];
    catInput(l, "Vampires");

    let m = ["gothic"];
    catInput(m, "Gothic");

    let n = ["witchcraft", "witches", "occult"];
    catInput(n, "Witchcraft");

    let o = [
      "19th century",
      "18th century",
      "17th century",
      "16th century",
      "15th century",
    ];
    catInput(o, "Period film");

    let p = ["erotic"];
    catInput(p, "Erotic");

    let q = ["crime"];
    catInput(q, "Crime");

    let r = ["Satanism"];
    catInput(r, "Satanism");

    let s = ["Japanese"];
    catInput(s, "Japanese");

    let t = ["monster"];
    catInput(t, "Monster");

    let u = ["exploitation"];
    catInput(u, "Exploitation");

    let v = ["South Korean"];
    catInput(v, "South Korean");

    let w = ["actual events"];
    catInput(w, "Based on actual events");

    let x = ["fantasy", "fantastique"];
    catInput(x, "Fantasy");

    let y = ["splatter", "splatterpunk"];
    catInput(y, "Splatter");

    let z = ["comedy"];
    catInput(z, "Comedy");

    let zz = ["black comedy"];
    catInput(zz, "Black Comedy");

    let aa = ["independent"];
    catInput(aa, "Independent");

    let ab = ["teen", "high school"];
    catInput(ab, "Teen");

    let ac = ["Techno-horror", "Techno-thriller"];
    catInput(ac, "Techno-horror");

    let ad = ["Folk"];
    catInput(ad, "Folk");

    let ae = ["clowns"];
    catInput(ae, "Clowns");

    let af = ["cults"];
    catInput(af, "Cults");

    let ah = ["German"];
    catInput(ah, "German");

    let ai = ["Internet", "social media"];
    catInput(ai, "Internet & Social Media");

    let aj = ["Thai"];
    catInput(aj, "Thai");

    let ak = ["noir", "neo-noir"];
    catInput(ak, "Noir");

    let al = ["remakes"];
    catInput(al, "Remake");

    let am = ["zombie"];
    catInput(am, "Zombie");

    let an = ["animated"];
    catInput(an, "Animated");

    let ao = ["Apocalyptic"];
    catInput(ao, "Apocalyptic");

    let ap = ["hospitals"];
    catInput(ap, "Set in a hospital");

    let aq = ["Torture"];
    catInput(aq, "Torture");

    let ar = [
      "controversy",
      "controversial",
      "controversies",
      "Video nasties",
      "rape",
      "Torture",
    ];
    catInput(ar, "Controversial & Extreme");

    let as = ["urban legends"];
    catInput(as, "Urban legend");

    let at = ["French"];
    catInput(at, "French");

    let au = ["Italian"];
    catInput(au, "Italian");

    let av = ["Spanish"];
    catInput(av, "Spanish");

    let aw = ["Australian"];
    catInput(aw, "Australian");

    let ax = ["Adventure"];
    catInput(ax, "Adventure");

    let ay = ["Found footage"];
    catInput(ay, "Found footage");

    let az = ["buddy"];
    catInput(az, "Buddy film");

    let ba = ["British"];
    catInput(ba, "British");

    let bb = ["body horror films"];
    catInput(bb, "Body");

    let bc = ["couples"];
    catInput(bc, "Film about couples");

    let bd = ["forests"];
    catInput(bd, "Set in a forest");

    let be = ["possession"];
    catInput(be, "Possession");

    let bf = ["stop-motion"];
    catInput(bf, "Stop-motion animation");

    let bg = ["1960s"];
    catInputDecade(bg, "1960");

    let bh = ["1970s"];
    catInputDecade(bh, "1970");

    let bi = ["1980s"];
    catInputDecade(bi, "1980");

    let bj = ["1990s"];
    catInputDecade(bj, "1990");

    let bk = ["2000s"];
    catInputDecade(bk, "2000");

    let bl = ["2010s"];
    catInputDecade(bl, "2010");

    let bm = ["2020 films"];
    catInputDecade(bm, "2020");

    let bn = ["2021 films"];
    catInputDecade(bn, "2021");

    let bo = ["2022 films"];
    catInputDecade(bo, "2022");

    let bp = ["families", "parenting"];
    catInput(bp, "Films about families");

    let bq = ["mental health"];
    catInput(bq, "Mental health");

    let br = ["Holiday"];
    catInput(br, "Holiday");

    let bs = ["satirical"];
    catInput(bs, "Satire");

    let bt = ["Home invasions"];
    catInput(bt, "Home invasion");

    let bu = ["country houses"];
    catInput(bu, "Set in a house");

    let bv = ["Cannibal-boom", "cannibalism"];
    catInput(bv, "Cannibalism");

    let bw = [
      "American natural horror",
      "Natural horror",
      "British natural horror",
      "Canadian natural horror",
      "Australian natural horror",
      "islands",
      "boats",
    ];
    catInput(bw, "Animals & Nature");

    let bx = ["Canadian"];
    catInput(bx, "Canadian");

    let by = [
      "franchises",
      "(franchise)",
      "sequel",
      "Sequel",
      "Prequel",
      "prequel",
    ];
    catInput(by, "Franchise");

    let bz = ["social class", "upper class", "poverty", "political"];
    catInput(bz, "Social & Political");

    let ca = ["action horror"];
    catInput(ca, "Action");

    let cb = ["coming-of-age", "Coming-of-age"];
    catInput(cb, "Coming-of-age");

    let cc = ["thriller"];
    catInput(cc, "Thriller");

    //assign rating & create object

    function getSentencesWithWord(word, text) {
      const sentenceArray = text
        .replace(/([=.?!])\s*(?=[A-Z])/g, "$1|")
        .split("|");
      return sentenceArray.filter((sentence) => sentence.includes(word));
    }
    const rottenTomatoes = getSentencesWithWord(`Rotten Tomatoes`, extract);
    if (!rottenTomatoes.toString().includes("%")) {
      const obj = {};
      let newObj = Object.create(obj);
      newObj.title = title;
      newObj.tags = tags;
      newObj.decade = decade;
      newObj.rating = null;
      newObj.poster = poster;
      working.push(newObj);
    } else {
      const fields = rottenTomatoes[0].split("%");
      let rating = fields[0].slice(-2);
      if (title === "The Thing (1982 film)") {
        rating = 83;
      }
      rating += "%";

      const obj = {};
      let newObj = Object.create(obj);
      newObj.title = title;
      newObj.tags = tags;
      newObj.decade = decade;
      newObj.rating = rating;
      newObj.poster = poster;
      working.push(newObj);
    }
  }
} catch (e) {
  console.error(e);
}
console.log(working);
//console.log(JSON.stringify(working));

////////Extracting IMDB id's from MDA API

let c = [];

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "06c0e4e1f0msh2c8368d3ebb6cc6p1f4b9cjsn23667da195b9",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};

async function fetchUrl() {
  for (let i = 0; i < movieArray.length; i++) {
    let a = [];
    let title = movieArray[i].title;
    let tags = movieArray[i].tags;
    let resp = await fetch(
      `https://movie-database-alternative.p.rapidapi.com/?s=${title}&page=1`,
      options
    );
    if (!resp.ok) {
      continue;
    } else {
      let data = await resp.json();
      a.push(data);
      let item_id = Object.keys(a);
      let search = a[item_id].Search;
      if (!search) {
        continue;
      }

      for (let i = 0; i < search.length; i++) {
        if (search[i].Title === title) {
          const obj = {};
          let newObj = Object.create(obj);
          newObj.title = title;
          newObj.tags = tags;
          newObj.imdbID = search[i].imdbID;
          c.push(newObj);
          break;
        } else {
          continue;
        }
      }
    }
  }
  console.log(JSON.stringify(c));
}
fetchUrl();

////////Extracting finall array

let d = [];

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "06c0e4e1f0msh2c8368d3ebb6cc6p1f4b9cjsn23667da195b9",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};

async function fetchUrl2() {
  for (let i = 0; i < imdbIdArray.length; i++) {
    let title = imdbIdArray[i].title;
    let tags = imdbIdArray[i].tags;
    let imdbID = imdbIdArray[i].imdbID;
    let resp = await fetch(
      `https://movie-database-alternative.p.rapidapi.com/?y=Year%20of%20release&r=json&i=${imdbID}&type=movie&plot=full`,
      options
    );
    if (!resp.ok) {
      continue;
    } else {
      let data = await resp.json();
      let year = data.Year;
      let rated = data.Rated;
      let runtime = data.Runtime;
      let director = data.Director;
      let stars = data.Actors;
      let plot = data.Plot;
      let poster = data.Poster;
      let imdbRating = "";
      if (!data.Ratings[0]) {
        imdbRating = null;
      } else {
        imdbRating = data.Ratings[0].Value;
      }
      let rottenTomatoes = "";
      if (!data.Ratings[1]) {
        rottenTomatoes = null;
      } else {
        rottenTomatoes = data.Ratings[1].Value;
      }
      const obj = {};
      let newObj = Object.create(obj);
      newObj.title = title;
      newObj.tags = tags;
      newObj.imdbID = imdbID;
      newObj.year = year;
      newObj.rated = rated;
      newObj.runtime = runtime;
      newObj.director = director;
      newObj.stars = stars;
      newObj.plot = plot;
      newObj.poster = poster;
      newObj.imdbRating = imdbRating;
      newObj.rottenTomatoes = rottenTomatoes;
      d.push(newObj);
    }
  }
  console.log(JSON.stringify(d));
}
fetchUrl2();
