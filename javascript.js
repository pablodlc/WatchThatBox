

function grow() {
    box.style.height = "250px";
    box.style.width = "250px";
}

function blue() {
    box.style.backgroundColor = "blue";
}

function fade() {
    box.style.opacity = "1"; 
    box.style.transitionDuration = "1s"; 
    box.style.transitionProperty = "opacity"; 
    box.style.opacity = "0.1";;
}

function round() {
    box.style.borderRadius = "50%";
}

function square() {
    box.style.borderRadius = "0%";
}

// Lovingly borrowed from https://css-tricks.com/snippets/javascript/random-hex-color/
function random() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = "#" + randomColor;
    console.log("hex color #" + randomColor);
}

function reset() {
    // box.style.height = "150px";
    // box.style.width = "150px";
    // box.style.backgroundColor = "orange";
    // box.style.borderRadius = "0";
    // box.style.transitionDuration = "0s";
    // box.style.opacity = "1";
    document.location.reload();
}