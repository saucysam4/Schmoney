// // Ex 1

// const h1 = getFirstElement("h1")
// const h2 = getFirstElement("h2")
// const h3 = getFirstElement("h3")
// const secondParagraph = getSecondParagraph()
// removeLastLine()
// addButton()

// h1?.addEventListener("mouseover", randomizeH1size)
// h2?.addEventListener("click", changeBackground)
// h3?.addEventListener("click", hideH3)
// secondParagraph.addEventListener("mouseover", makeSecondParagraphFadeout)

// function makeSecondParagraphFadeout() {
//     secondParagraph.classList.add("fadeout")
// }




// function getSecondParagraph() {
//     return document.querySelectorAll("p")[1]
// }

// function getRandomNumber() {
//     return Math.floor(Math.random() * 100 + 1)
// }

// function randomizeH1size() {
//     const randomNumber = getRandomNumber()
//     h1.style.fontSize = randomNumber + "px"
// }

// function makeParagraphsBold() {
//     const paragraphs = document.querySelectorAll("p")
//     for (const paragraph of paragraphs) {
//         paragraph.classList.add("bold")
//     }
// }

// function addButton() {
//     const button = document.createElement("button")
//     button.textContent = "Make everything bold"
//     button.addEventListener("click", makeParagraphsBold)
//     const article = getFirstElement("article")
//     article.appendChild(button)
// }

// function hideH3() {
//     h3.classList.add("hide")
// }

// function changeBackground() {
//     h2?.classList.add("red")
// }

// function removeLastLine() {
//     const article = document.querySelector("article")
//     article?.lastElementChild.remove()
// }

// function getFirstElement(selector) {
//     return document.querySelector(selector)
// }

// Ex 2
const form = document.querySelector("form");

function logFormInputs(e) {
    e.preventDefault();
    const firstName = document.querySelector("[name=fnam]").value;
    const lastName = document.querySelector("[name=lname]").value;
    if (firstName === "" || lastName === "") {
        return alert("Please fill in all fields");
    }    
        const ul = document.querySelector(".usersAnswers");
        ul.innerHTML = "";
        const firstLi = document.createElement("li");
        const secondLi = document.createElement(li);
        firstLi.innerText = firstName;
        secondLi.innerText = lastName;
        ul.append(firstLi, secondLi);
    }

form.addEventListener("submit", logFormInputs);

