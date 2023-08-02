chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "toggle_popup") {
            let popup = document.getElementById('popupContent');
            if (popup.style.display === 'none') {
                popup.style.display = 'block';
            } else {
                popup.style.display = 'none';
            }
        }
    }
);