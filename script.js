var numSquares = 6;
var colors = [] //generateRandomColors(numSquares);
var pickedColor; // = pickColor();
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for(var i = 0; i < modeButtons.length;i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // how many squares to show
      // pick new colors
      // pick a new pickedColor
      // update page to reflect changes
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      // if(this.textContent === "Easy"){
      //   numSquares = 3;
      // }else{
      //   numSquares = 6;
      // }
      reset();
    })
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      }else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    })
  }
}

function reset(){
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  // change colors of squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  // add initual colors to squares
  squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//   this.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     } else{
//       squares[i].style.display = "none";
//     }
//   }
//   h1.style.backgroundColor = "steelblue";
// })

// hardBtn.addEventListener("click", function(){
//   this.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(i = 0; i < squares.length; i++){
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//   }
//   h1.style.backgroundColor = "steelblue";
// })

resetButton.addEventListener("click", function(){
  // // generate all new colors
  // colors = generateRandomColors(numSquares);
  // // pick new random color from array
  // pickedColor = pickColor();
  // //change colorDisplay to match pickedColor
  // colorDisplay.textContent = pickedColor;
  // messageDisplay.textContent = "";
  // this.textContent = "New Colors";
  // // change colors of squares
  // for(var i = 0; i < squares.length; i++){
  // // add initual colors to squares
  // squares[i].style.backgroundColor = colors[i];
  // }
  // h1.style.backgroundColor = "steelblue";
  reset();
})

// colorDisplay.textContent = pickedColor;

function changeColors(color){
  // loop through all squares
  for(var i = 0; i < squares.length; i++){
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  // pick random number
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  // make an array
  var arr = [];
  // add num random colors to array
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b +")";
}
