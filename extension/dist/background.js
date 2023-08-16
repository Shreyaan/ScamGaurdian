chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "scan-urls",
      title: "Scan all URLs on this page",
      contexts: ["page"],
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "scan-urls") {
      chrome.tabs.sendMessage(tab.id, {
        message: "scan_urls",
      });
    }
  });