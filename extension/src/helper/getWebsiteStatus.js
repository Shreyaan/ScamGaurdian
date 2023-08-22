export async function getWebsiteBlacklsitStatus(hostname) {
  let data = await fetch(
    "https://extension-orpin.vercel.app/api/check-domains",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ domains: hostname }),
    }
  );

  let response = await data.json();
  return response[0].isBlacklisted;
}
