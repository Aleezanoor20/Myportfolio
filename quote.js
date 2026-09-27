const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quote-author");

function getQuote() {
    quote.textContent = "Loading quote...";
    fetch("https://www.drivebird.com/api/quotes/today")
    .then((response) => response.json())
    .then((data) => {
         quote.textContent = data.data.quote;
         quoteAuthor.textContent = data.data.author;
})

.catch(() => {
    quote.textContent = "Sorry, the quote could not be loaded.";
    quoteAuthor.textContent = "";
});


}

getQuote();