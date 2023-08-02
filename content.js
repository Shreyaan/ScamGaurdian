// Create the button
let button = document.createElement("button");
button.innerHTML = "SG";
button.style.position = "fixed";
button.style.right = "10px";
button.style.bottom = "200px";
button.style.zIndex = 9999;
button.style.padding = "10px";

button.id = "myExtensionButton";

document.body.appendChild(button);

// Create the popup (initially hidden)
let popup = document.createElement("div");
popup.innerHTML = `
    <h1>Shopping Tips</h1>
    <p>Keep these tips in mind while shopping...</p>
`;
popup.style.position = "fixed";
popup.style.right = "20px";
popup.style.top = "60px";
popup.style.zIndex = 10000;
popup.style.width = "200px";
popup.style.height = "40vh";
popup.style.backgroundColor = "#FFF";
popup.style.border = "1px solid #000";
popup.style.padding = "10px";
popup.style.display = "none";
popup.id = "myExtensionPopup";
document.body.appendChild(popup);

// Show/hide the popup when the button is clicked
button.addEventListener("click", function () {
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
});
