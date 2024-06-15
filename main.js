const container = document.querySelector("#container")
let numberOfSqr = 64;
let containerSize = 400;
let sqrSize = containerSize / numberOfSqr

for (let i = 0; i < numberOfSqr * numberOfSqr; i++) {
  const div = document.createElement("div");
  div.textContent = "";
  div.style.height = `${sqrSize}px`;
  div.style.width = `${sqrSize}px`;
  div.style.border = "1px solid darkgray"; // Add this to see the grid lines
  
  container.append(div);
}

