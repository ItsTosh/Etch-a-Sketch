const container = document.querySelector("#container")
let numberOfSqr = 16;
let containerSize = 400;
let sqrSize = containerSize / numberOfSqr; 
let mouseDown = false; 

document.body.onmousedown = () => {
  mouseDown = true;
}

document.body.onmouseup = () => {
  mouseDown = false;
}

function initializeGrid() {
  for (let i = 0; i < numberOfSqr * numberOfSqr; i++) {
    // Creation of grid boxes
    const div = document.createElement("div");
    div.setAttribute("id", `${i}`)
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

    container.append(div);
  }
}




initializeGrid();
