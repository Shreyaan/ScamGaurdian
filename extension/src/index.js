import { addButtonToWebsites } from "./addButtonToWebsites.js";
import { scanAllUrls } from "./scanAllUrls.js";

addButtonToWebsites();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  scanAllUrls(request);
});
