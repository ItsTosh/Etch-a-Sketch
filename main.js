const container = document.querySelector("#container");
let numberOfSqr = 32;
let containerSize = 500;
let sqrSize = containerSize / numberOfSqr; // Equation to make divs proportioned to container
let mouseDown = false; 
let isRainbowMode = false;
let isGrayMode = true;

document.body.onmousedown = () => {
  mouseDown = true;
}

document.body.onmouseup = () => {
  mouseDown = false;
}

function initializeGrid() {
  updateGridVal()

  for (let i = 0; i < numberOfSqr * numberOfSqr; i++) {
    // Creation of grid boxes
    const div = document.createElement("div");
    div.setAttribute("id", `num${i}`)
    div.textContent = "";
    div.style.height = `${sqrSize}px`;
    div.style.width = `${sqrSize}px`;

    // Grid Color
    div.addEventListener("mouseover", () => handleColorChange(div));
    div.addEventListener("click", () => handleColorChange(div, true));

    // Add divs to DOM
    container.append(div);
  }
}

function updateGridVal() {
  // Creates + updates slider
  const slider = document.querySelector(".slider");
  const sliderOutput = document.querySelector(".sliderOutput");
  sliderOutput.textContent = `${slider.value} x ${slider.value}`
  
  slider.oninput = function() {
    deleteGridVal();
    numberOfSqr = slider.value;
    sqrSize = containerSize / numberOfSqr;
    initializeGrid();
  }
}

function deleteGridVal() {
  container.innerHTML = "";
}


const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  deleteGridVal();
  initializeGrid();
})

const eraserBtn = document.querySelector("#eraser");
eraserBtn.addEventListener("click", () => {
  isRainbowMode = false;
  isGrayMode = false;
})

const grayModeBtn = document.querySelector("#grayMode");
grayModeBtn.addEventListener("click", () => {
  isRainbowMode = false;
  isGrayMode = true;
})

const rainbowModeBtn = document.querySelector("#rainbowMode");
rainbowModeBtn.addEventListener("click", () => {
  isRainbowMode = true;
  isGrayMode = false;
})

function handleColorChange(div, isClick = false) {
  if (mouseDown || isClick) {
    if (isGrayMode) {
      div.style["backgroundColor"] = "#333";
    } else if (isRainbowMode) {
      div.style["backgroundColor"] = "#" + Math.floor(Math.random()*16777215).toString(16);
    } else {
      div.style["backgroundColor"] = "white";
    }
  }
}



initializeGrid();


