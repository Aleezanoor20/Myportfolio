const readMoreButton = document.querySelector("#read-more"); 
const moreText = document.querySelector("#coding-more");

function toggleMoreText() {
    moreText.hidden = !moreText.hidden;
    readMoreButton.textContent = moreText.hidden ? "Read more" : "Show less";
}

readMoreButton.addEventListener("click", toggleMoreText);