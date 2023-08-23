import { generatePopUpHTML } from "./DOM_Functions/generatePopUpHTML.js";
import { getVendorInfo } from "./helper/getVendorInfo.js";
import { createButton, createPopup } from "./DOM_Functions/createElements.js";
import { appendElementsToBody } from "./helper/appendElementsToBody.js";
import { setButtonBehaviour } from "./DOM_Functions/setButtonBehaviour.js";


export let button = createButton();
export let popup = createPopup();

export async function addButtonToWebsites() {
  let currentUrl = window.location.href;

  let vendorData = await getVendorInfo(currentUrl);
  if (vendorData) {
    if (vendorData?.risks?.length > 0 || vendorData?.tips?.length > 0) {
      appendElementsToBody(button, popup);
      setButtonBehaviour();
      popup.innerHTML = generatePopUpHTML(vendorData);
    }
  }
}
