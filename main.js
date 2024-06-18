const container = document.querySelector("#container");
let numberOfSqr = 32;
let containerSize = 500;
let sqrSize = containerSize / numberOfSqr; // Equation to make divs proportioned to container
let mouseDown = false; 

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
    div.style.border = "1px solid darkgray"; // Added this to see the grid lines (temporary)

    // Grid Color
    div.addEventListener("mouseover", () => {
      if (mouseDown) {
        div.style["backgroundColor"] = "#333";
      }
    })

    div.addEventListener("click", () => {
      div.style["backgroundColor"] = "#333";
    })

    // Add divs to DOM
    container.append(div);
  }
}

function updateGridVal() {
  // Creates + updates slider
  const slider = document.querySelector(".slider");
  const sliderOutput = document.querySelector(".sliderOutput");
  sliderOutput.textContent = "32 x 32"
  
  slider.oninput = function() {
    deleteGridVal();
    numberOfSqr = slider.value;
    sqrSize = containerSize / numberOfSqr;
    initializeGrid();
    sliderOutput.textContent = `${slider.value} x ${slider.value}`; // ask why it wasnt working when place at the start
  }
}

function deleteGridVal() {
  for (let i = 0; i < numberOfSqr * numberOfSqr; i++) {
    let div = document.querySelector(`#num${i}`);
    div.remove()
  }
}


const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  deleteGridVal();
  initializeGrid();
})


initializeGrid();


