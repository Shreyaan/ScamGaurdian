import { addButtonToWebsites } from "./addButtonToWebsites.js";
import { currentWebsiteCheck } from "./currentWebsiteCheck.js";
import { scanAllUrls } from "./scanAllUrls.js";
import "toastify-js/src/toastify.css";

currentWebsiteCheck();
addButtonToWebsites();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  scanAllUrls(request);
});
