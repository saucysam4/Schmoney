// Part 1

// function showAlert() {
//     alert("Hello World");
// }

// setTimeout(showAlert, 2000);

// Part 2
function addParagraph() {
    let paragraph = document.createElement("p");
    let textNode = document.createTextNode("Hello World");
    paragraph.appendChild(textNode);
    let container = document.getElementById("container");
    container.appendChild(paragraph);
}

setTimeout(addParagraph, 2000);
