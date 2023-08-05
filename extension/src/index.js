import { setButtonBehaviour } from "./setButtonBehaviour.js";
import { generatePopUpHTML } from "./generatePopUpHTML.js";
import { getVendorInfo } from "./getVendorInfo.js";
import { injectCSS } from "./cssStyles.js";

export let button = document.createElement("button");
button.innerHTML = "SG";

button.id = "myExtensionButton";
// Create the popup (initially hidden)
export let popup = document.createElement("div");

popup.id = "myExtensionPopup";

// Get the current URL
let currentUrl = window.location.href;

let vendorInfo = {};

function addButtonToWebsites() {
  getVendorInfo(currentUrl)
    .then((data) => {
      console.log(data);
      vendorInfo = data;
      if (data) {
        if (data.risks.length > 0 || data.tips.length > 0) {
          document.body.appendChild(button);
          popup.innerHTML = generatePopUpHTML(vendorInfo);
          document.body.appendChild(popup);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

addButtonToWebsites();

injectCSS();

//bug - popup is not showing on first click
// fix
popup.style.display = "none";

setButtonBehaviour();
