// List of effects to apply
type EffectFunction = (element: HTMLElement) => void;

const effectsHere: EffectFunction[] = [
  function changeColor(element: HTMLElement) {
    const colors: string[] = [
      "red",
      "green",
      "blue",
      "purple",
      "yellow",
      "pink",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = randomColor;
  },
  function scale(element: HTMLElement) {
    const randomScale = Math.random() * (2 - 0.5) + 0.5; // Scale between 0.5 and 2
    element.style.transform = `scale(${randomScale})`;
  },
  function rotate(element: HTMLElement) {
    const randomRotate = Math.floor(Math.random() * 360); // Rotate between 0 and 360 degrees
    element.style.transform = `rotate(${randomRotate}deg)`;
  },
  function changeOpacity(element: HTMLElement) {
    const randomOpacity = Math.random(); // Opacity between 0 and 1
    element.style.opacity = randomOpacity.toString();
  },
];

// Function to apply a random effect
function applyRandomEffect2(): void {
  const element = document.getElementById("myElement");

  if (element) {
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];

    // Reset any previous transform to avoid conflicts
    element.style.transform = "";

    randomEffect(element);
  }
}
