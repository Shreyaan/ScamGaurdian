import { generatePopUpHTML } from "./DOM_Functions/generatePopUpHTML.js";
import { getVendorInfo } from "./helper/getVendorInfo.js";
import { createButton, createPopup } from "./DOM_Functions/createElements.js";
import { appendElementsToBody } from "./helper/appendElementsToBody.js";
import { setButtonBehaviour } from "./DOM_Functions/setButtonBehaviour.js";

export let button = createButton();
export let popup = createPopup();

export function addButtonToWebsites() {
  let currentUrl = window.location.href;
  let vendorInfo = {};

  getVendorInfo(currentUrl)
    .then((data) => {
      vendorInfo = data;
      if (data) {
        if (data.risks.length > 0 || data.tips.length > 0) {
          appendElementsToBody(button, popup);
          setButtonBehaviour();
          popup.innerHTML = generatePopUpHTML(vendorInfo);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
