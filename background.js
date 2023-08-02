chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeBackgroundColor({color: '#4688F1'});
    chrome.action.setBadgeText({text: 'ON'});
  });
  
  chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
          if (request.msg === "toggle_popup") {
              chrome.action.getPopup({}, function(popup) {
                  if (popup === "") {
                      chrome.action.setPopup({popup: "popup.html"});
                  } else {
                      chrome.action.setPopup({popup: ""});
                  }
              });
          }
      }
  );