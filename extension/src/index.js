import { addButtonToWebsites } from "./addButtonToWebsites.js";
import { scanAllUrls } from "./scanAllUrls.js";
import "toastify-js/src/toastify.css"


addButtonToWebsites();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  scanAllUrls(request);
});
