"use strict";

let category = "dev";
const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
const refreshQuoteButton = document.querySelector("#refreshQuote");
const pickJokes = document.querySelector("#pickJokes");

//Call this function first to display joke on webpage.
function getQuote(category) {
  const chuckSaysParagraph = document.querySelector("#chuckSays");
  get(apiUrl).then(function(repsonse) {
    //The "value" key is used to get joke from JSON data.
    chuckSaysParagraph.innerHTML = repsonse.value;
  });
}
refreshQuoteButton.addEventListener("click", function(e) {
  e.preventDefault();
  getQuote(category);
});
pickJokes.addEventListener("click", function(e) {
  e.preventDefault();
  if (category != pickJokes.value) {
    category = pickJokes.value;
    getQuote(category);
  }
});

getQuote(category);
