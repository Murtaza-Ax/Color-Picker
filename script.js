const colorInput = document.getElementById("colorInput");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");
const btn = document.getElementById("btn");
const defaultColor = "#333";

// Chnage values whenever input type changes
colorInput.addEventListener("input", () => {
  const color = colorInput.value;
  hexValue.textContent = color;
  rgbValue.textContent = hexToRgb(color);
  btn.style.backgroundColor = color;
  document.querySelector(".color-picker").style.borderColor = color;
});

// Show Color in bg
btn.addEventListener("click", () => {
  let inputColorInRgb = hexToRgb(colorInput.value);
  if (document.body.style.backgroundColor !== inputColorInRgb) {
    document.body.style.backgroundColor = colorInput.value;
    btn.style.backgroundColor = defaultColor;
    document.querySelector(".color-picker").style.borderColor = defaultColor;
  } else {
    document.body.style.backgroundColor = defaultColor;
    btn.style.backgroundColor = colorInput.value;
    document.querySelector(".color-picker").style.borderColor =
      colorInput.value;
  }
});

// Function to convert hex value into rgb value
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

// Function to copy rgb value on click 
rgbValue.addEventListener("click", () => {
  var copy = rgbValue.innerHTML;
  navigator.clipboard.writeText(copy);
  alert("Copied Done 🤙🤙");
});

// Function to copy Hex value on click 
hexValue.addEventListener("click", () => {
  var copy = hexValue.innerHTML;
  navigator.clipboard.writeText(copy);
  alert("Copied Done 🤙🤙");
});
