import { formatUrl } from "./helper/formatUrl.js";

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
          alert(
            "Warning! The following domains could be blacklisted:\n" +
              uniqueBlacklistedDomains.join("\n")
          );
          console.log(uniqueBlacklistedDomains.join("\n"));
        } else {
          alert("No blacklisted domains found!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
