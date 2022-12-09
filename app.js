var numSquare = 6;
var colors = generateColor(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquare = 3;
    colors = generateColor(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquare = 6;
    colors = generateColor(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }

});


for (var i = 0; i < squares.length; i++) {
    //add initial colors
    squares[i].style.backgroundColor = colors[i];
    //add click listener to each sqaures

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "correct!";
            changeColor(pickedColor);
            h1.style.background = pickedColor;
            resetButton.textContent = "Play Again?";
        }
        else {
            this.style.backgroundColor = "steelblue";
            messageDisplay.textContent = "Try Again";
        }
    });
}


resetButton.addEventListener("click", function () {
    colors = generateColor(numSquare);
    pickedColor = pickColor();
    resetButton.textContent = "new colors";
    for (var i = 0; i < squares.length; i++) {
        //add initial colors
        squares[i].style.backgroundColor = colors[i];
    }
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
});

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr[i] = generateRandomColor();
    }
    return arr;
}
function generateRandomColor() {
    var R = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    return "rgb(" + R + ", " + G + ", " + B + ")";
}