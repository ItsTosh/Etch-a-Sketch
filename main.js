const container = document.querySelector("#container")
let numberOfSqr = (16*16);

for (let i = 0; i < numberOfSqr; i++) {
  const div = document.createElement("div");
  div.textContent = 1;

  div.classList.add(i)

  container.append(div);
}