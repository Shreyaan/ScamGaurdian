import Toastify from "toastify-js";

export function showToast(text, background, duration) {
  let bg
  if(background==="alert"){
    bg = "linear-gradient(to right, #ff3b3f, #ff757a)"
  }
  else if(background==="success"){
    bg = "linear-gradient(to right, #00b09b, #96c93d)"
  }
  else{
    bg = background
  }
  Toastify({
    text: text,
    duration: duration,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: bg,
      width: "25%",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
