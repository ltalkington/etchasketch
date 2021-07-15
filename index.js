"use strict";

let boxElem = document.getElementById("boxes-div");
let box = document.querySelector(".boxContainer");
let newInput = document.getElementById("rows");
let resetButton = document.querySelector(".reset");
let newBlock = document.querySelector(".right");

let createGrid = () => {
  // This will create a grid to use up to 256 which is a 16 by 16 grid
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    box.appendChild(div);
  }
};

let updateGrid = () => {
  box.innerHTML = "";
  box.style.setProperty(
    "grid-template-columns",
    `repeat(${newInput.value}, 2fr)`
  );
  box.style.setProperty("grid-template-rows", `repeat(${newInput.value}, 2fr)`);
  for (let i = 0; i < newInput.value * newInput.value; i++) {
    // This will adjust the rows and columns of the program based on the number the user put in
    const div = document.createElement("div");
    div.classList.add("square");
    box.appendChild(div);
  }
  console.log(newInput.value);
};

console.log(newBlock);
newBlock.addEventListener("mouseover", function (event) {
  event.target.classList.replace("square", "color");
});

newInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function () {
  box.innerHTML = "";
  newInput.value = "";
  box.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  box.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});

createGrid();
