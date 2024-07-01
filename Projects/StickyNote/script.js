"use strict";

const button = document.querySelector(".creatingButton");
const emptySpace = document.querySelector(".emptySpace");
const lightColors = [
  "#FFB6C1", // Light Pink
  "#FFE4E1", // Misty Rose
  "#FFF0F5", // Lavender Blush
  "#FAFAD2", // Light Goldenrod Yellow
  "#E6E6FA", // Lavender
  "#D3D3D3", // Light Grey
  "#ADD8E6", // Light Blue
  "#87CEFA", // Light Sky Blue
  "#B0E0E6", // Powder Blue
  "#E0FFFF", // Light Cyan
  "#98FB98", // Pale Green
  "#F0FFF0", // Honeydew
  "#F5FFFA", // Mint Cream
  "#FFFACD", // Lemon Chiffon
  "#FFB6C1", // Light Pink
  "#FFA07A", // Light Salmon
  "#FFDEAD", // Navajo White
  "#F5F5DC", // Beige
  "#FFF5EE", // Seashell
  "#F0E68C", // Khaki
];

button.addEventListener("click", function () {
  console.log("yo");
  const randomColor =
    lightColors[Math.floor(Math.random() * lightColors.length)];
  const createdTextArea = document.createElement("textarea");
  createdTextArea.innerText = "here";
  createdTextArea.style.backgroundColor = randomColor;
  emptySpace.appendChild(createdTextArea);
});
