import Toastify from "toastify-js";

export function showToast(text, background, duration) {
  let bg
  if(background==="alert"){
    bg = "#DE000B"
  }
  else if(background==="success"){
    bg = "#009D00"
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
