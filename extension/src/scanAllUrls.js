import { formatUrl } from "./helper/formatUrl.js";
import { showToast } from "./helper/showToast.js";

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
          const blacklistedText =
            "Warning! The following domains could be blacklisted:\n" +
            uniqueBlacklistedDomains.join("\n");
          showToast(blacklistedText, "alert", 5000);
          console.log(uniqueBlacklistedDomains.join("\n"));
        } else {
          showToast("All domains are safe!", "success", 5000);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
