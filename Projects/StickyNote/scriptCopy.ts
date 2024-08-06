"use strict";

// Define types for elements and array
const buttonMain = document.querySelector(
  ".creatingButton"
) as HTMLButtonElement | null;
const emptySpaceY = document.querySelector(
  ".emptySpace"
) as HTMLDivElement | null;
const lightColorsHere: string[] = [
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

// Add event listener to button if it exists
if (buttonMain) {
  buttonMain.addEventListener("click", () => {
    console.log("yo");
    const randomColor =
      lightColorsHere[Math.floor(Math.random() * lightColorsHere.length)];
    const createdTextArea = document.createElement("textarea");
    createdTextArea.innerText = "here";
    createdTextArea.style.backgroundColor = randomColor;

    // Append the textarea to emptySpace if it exists
    if (emptySpaceY) {
      emptySpaceY.appendChild(createdTextArea);
    }
  });
}
