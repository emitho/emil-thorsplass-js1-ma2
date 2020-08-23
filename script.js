// Question 1

const backgroundButton = document.querySelector("button");
const siteBackground = document.querySelector("body");

backgroundButton.onclick = function() {
    siteBackground.style.backgroundColor = "green";
}


// Question 2

const toggleButton = document.querySelector(".toggler");
const toggleDiv = document.querySelector(".togglee");


toggleButton.onclick = function() {
    toggleDiv.classList.toggle("extra");
}


// Question 3

const numberSelector = document.querySelector("select");
const paragraphContainer = document.querySelector(".paragraphs-container");


numberSelector.onchange = function() {
    let selectedNumber = numberSelector.value;

    paragraphContainer.innerHTML = "";

    for(let i = 1; i <= selectedNumber; i++) {
        paragraphContainer.innerHTML += `<p class="content">A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.</p>`;
    }
}


// Question 4

let charCount = document.querySelector(".char-count");
let textInput = document.querySelector("input");

textInput.onkeyup = function() {
    console.log(event.target.value.length);

    const textLength = event.target.value.length;
    
    charCount.innerHTML = `Character count: ${textLength}`;
}



// Question 5

function scrollClass() {
    console.log(window.scrollY);

    const amountScrolled = window.scrollY;

    if(amountScrolled > 35) {
        document.body.classList.add("highlight");
    } else {
        document.body.classList.remove("highlight");
    }
}

window.onscroll = scrollClass;