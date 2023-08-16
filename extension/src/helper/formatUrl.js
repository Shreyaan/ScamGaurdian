export function formatUrl(url) {
  try {
    const urlObj = new URL(url);
    const parts = urlObj.hostname.split(".");
    const lastParts = parts.slice(-2); // Keep only the last two parts of the domain
    return parts.join(".");
  } catch (e) {
    console.error(`Invalid URL encountered: ${url}`);
    return null;
  }
}
