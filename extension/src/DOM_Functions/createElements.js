export function createButton() {
  let button = document.createElement("button");
  button.innerHTML = "SG";
  button.id = "myExtensionButton";
  return button;
}

export function createPopup() {
  let popup = document.createElement("div");
  popup.id = "myExtensionPopup";
  popup.style.display = "none"; // Initially hidden
  return popup;
}
