import { button, popup } from "./index.js";

export function setButtonBehaviour() {
  let isLongPressing = false;
  let buttonMoved = false; // track if the button was moved during long press
  let lastClickTime = 0; // track the last click time
  let buttonMovedState = false; // track if the button is currently moved

  button.addEventListener("click", function (event) {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime <= 300) {
      // Double click
      if (buttonMovedState) {
        button.style.right = "10px";

        buttonMovedState = false;
      } else {
        // Move the button to the right
        button.style.right = "-50px";
        buttonMovedState = true;
      }
      button.style.transition = "right 0.5s";
      setTimeout(function () {
        button.style.transition = ""; // Reset transition
      }, 500);
    }
    lastClickTime = currentTime;
    event.preventDefault(); // Prevent default behavior of double-click
  });

  button.addEventListener("mousedown", function () {
    isLongPressing = true;
    buttonMoved = false; // Reset the buttonMoved flag
    setTimeout(function () {
      if (isLongPressing) {
        document.addEventListener("mousemove", followMouse);
      }
    }, 500);
  });

  document.addEventListener("mouseup", function () {
    if (isLongPressing) {
      isLongPressing = false;
      document.removeEventListener("mousemove", followMouse);

      if (!buttonMoved) {
        togglePopup();
      }
    }
  });

  function togglePopup() {
    if (popup.style.display === "none") {
      popup.style.display = "block";
    } else {
      popup.style.display = "none";
    }
  }

  function followMouse(event) {
    const mouseY = event.clientY;
    button.style.bottom = `${window.innerHeight - mouseY}px`;
    buttonMoved = true;
  }
}
