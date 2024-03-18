

const images = ["img/a.jpeg", "img/b.jpeg", "img/c.jpeg"]; // Add your image paths here
let currentIndex = 0;
const imageDisplay = document.getElementById('image-display');

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function updateImage() {
    imageDisplay.src = images[currentIndex];
}

let generatedNumber;
function generateNumber() {
generatedNumber = Math.floor(Math.random() * 1000000000000) + 1;
document.getElementById("dis").innerHTML = "YOUR PIN IS: " + generatedNumber
}

let x = document.getElementById("nework").value;
validateNumber = x

function validateNumber() {


const userInput = document.getElementById('numberInput').value;
if (userInput !== "*311" + generatedNumber + "#") {
    alert("Number not matched! Please try again.");

    return;
}

alert("Number matched! It's the generated random number. "  );
}


function sum(){
  let add =  document.getElementById("in").value

   document.getElementById("out").innerHTML = add
}p