import { setButtonBehaviour } from "./setButtonBehaviour.js";
import { cssStyles } from "./cssStyles.js";
import { generatePopUpHTML } from "./generatePopUpHTML.js";
import { getVendorInfo } from "./getVendorInfo.js";

export let button = document.createElement("button");
button.innerHTML = "SG";

button.id = "myExtensionButton";
// Create the popup (initially hidden)
export let popup = document.createElement("div");

popup.id = "myExtensionPopup";

// Get the current URL
let currentUrl = window.location.href;

getVendorInfo(currentUrl);
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

function injectCSS(cssStyles) {
  const styleElement = document.createElement("style");
  styleElement.textContent = cssStyles;
  document.head.appendChild(styleElement);
}

// Inject the CSS styles
injectCSS(cssStyles);

//bug - popup is not showing on first click
// fix
popup.style.display = "none";

setButtonBehaviour();
