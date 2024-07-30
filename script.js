// references
const paraButton = document.getElementById("p-button");
const imageButton = document.getElementById("img-button");
const nothingButton = document.getElementById("nothing-button")
const paraBox = document.getElementById("p-div");
const imageBox = document.getElementById("img-div");
const nothingBox = document.getElementById("blank-div");
const paraCountDisplay = document.getElementById("paraCount");
const imageCountDisplay = document.getElementById("imageCount");
const nothingCountDisplay = document.getElementById("nothingCount");

// counting variables
let paraButtonCount = 0;
let imageButtonCount = 0;
let nothingButtonCount = 0;

paraCountDisplay.innerText = "pCount: " + paraButtonCount;
imageCountDisplay.innerText = "imgCount: " + imageButtonCount;
nothingCountDisplay.innerText = "nothingCount: " + nothingButtonCount;

// setting the initial displays
paraBox.style.document = "block"
imageBox.style.display = "none";
nothingBox.style.display = "none";

// functions
function addPara() {
    if (imageBox.style.display == "flex" || nothingBox.style.display == "block" || nothingBox.style.display == nothingBox.style.display) {
        imageBox.style.display = "none";
        nothingBox.style.display = "none";
        paraBox.style.display = "block";
    }

    let newPara = document.createElement("p");
    newPara.innerText = "Dopamine gained. Click again to recieve more.";
    newPara.style.color = "white";
    newPara.style.backgroundColor = "black";
    newPara.style.padding = "10px"
    paraBox.appendChild(newPara);
    paraButtonCount++;
    paraCountDisplay.innerText = "pCount: " + paraButtonCount;
}

function addImage() {
    if (paraBox.style.display == "block" || nothingBox.style.display == "block") {
        paraBox.style.display = "none";
        nothingBox.style.display = "none";
        imageBox.style.display = "flex";
        imageBox.style.flexFlow = "row wrap";
    }

    let newImage = document.createElement("img")
    newImage.src = "bart.jpg";
    newImage.style.width = "200px";
    imageBox.appendChild(newImage);
    imageButtonCount++;
    imageCountDisplay.innerText = "imgCount: " + imageButtonCount;
}

function addNothing() {
    if (imageBox.style.display == "flex" || paraBox.style.display == "block") {
        imageBox.style.display = "none"
        paraBox.style.display = "none"
        nothingBox.style.display = "block"
    }
    nothingButtonCount++;
    nothingCountDisplay.innerText = "nothingCount: " + nothingButtonCount;
}

// button functionality
paraButton.addEventListener("click", addPara);
imageButton.addEventListener("click", addImage);
nothingButton.addEventListener("click", addNothing);