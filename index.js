"use strict";

let currentColor = "black";
let rainbowButtonElem = document.getElementById("rainbow");
let blackButtonElem = document.getElementById("black");
let whiteButtonElem = document.getElementById("white");
let randomButtonElem = document.getElementById("random");
let boxesElem = document.getElementById("box1");

function rainbowClick() {
  currentColor = "rainbow";
  console.log(currentColor);
}

function blackClick() {
  currentColor = "black";
  console.log(currentColor);
}

function whiteClick() {
  currentColor = "white";
  console.log(currentColor);
}

function randomClick() {
  currentColor = "random";
  console.log(currentColor);
}

function colorBox() {
  boxesElem.style.backgroundColor = currentColor;
  console.log(currentColor);
}

rainbowButtonElem.addEventListener("click", rainbowClick);
blackButtonElem.addEventListener("click", blackClick);
whiteButtonElem.addEventListener("click", whiteClick);
randomButtonElem.addEventListener("click", randomClick);
boxesElem.addEventListener("click", colorBox);
