import { generatePopUpHTML } from "./DOM_Functions/generatePopUpHTML.js";
import { getVendorInfo } from "./helper/getVendorInfo.js";
import { createButton, createPopup } from "./DOM_Functions/createElements.js";
import { appendElementsToBody } from "./helper/appendElementsToBody.js";
import { setButtonBehaviour } from "./DOM_Functions/setButtonBehaviour.js";
import { getWebsiteBlacklsitStatus } from "./helper/getWebsiteStatus.js";
import Toastify from "toastify-js";

export let button = createButton();
export let popup = createPopup();

export async function addButtonToWebsites() {
  let currentUrl = window.location.href;

  let hostname = new URL(currentUrl).hostname;

  let blacklistStatus = await getWebsiteBlacklsitStatus(hostname);
  if (blacklistStatus) {
    Toastify({
      text: "The following site might not be safe. We advise that you leave this website to avoid your data from being compromised. Learn more",
      duration: 10000,
      destination: "https://extension-orpin.vercel.app/",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #ff3b3f, #ff757a)",
        width: "25%",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }

  let vendorData = await getVendorInfo(currentUrl);
  if (vendorData) {
    if (vendorData?.risks?.length > 0 || vendorData?.tips?.length > 0) {
      appendElementsToBody(button, popup);
      setButtonBehaviour();
      popup.innerHTML = generatePopUpHTML(vendorData);
    }
  }
}
