import { formatUrl } from "./helper/formatUrl.js";
import Toastify from 'toastify-js'

export function scanAllUrls(request) {
  if (request.message === "scan_urls") {
    const urls = Array.from(document.querySelectorAll("a"))
      .map((a) => formatUrl(a.href))
      .filter(Boolean); // Remove nulls
    const payload = {
      domains: urls.join("\n"),
    };

    fetch("https://extension-orpin.vercel.app/api/check-domains", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        const blacklistedDomains = data
          .filter((item) => item.isBlacklisted)
          .map((item) => item.domainName);

        const uniqueBlacklistedDomains = [...new Set(blacklistedDomains)];

        if (uniqueBlacklistedDomains.length > 0) {
          Toastify({
            text:
              "Warning! The following domains could be blacklisted:\n" +
              uniqueBlacklistedDomains.join("\n"),
            duration: 5000,
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
          console.log(uniqueBlacklistedDomains.join("\n"));
        } else {
          Toastify({
            text: "All domains are safe!",
            duration: 5000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
              width: "25%",
            },
            onClick: function () {}, // Callback after click
          }).showToast();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
