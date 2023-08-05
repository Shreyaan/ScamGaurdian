export async function getVendorInfo(url) {
  try {
    let hostname = new URL(url).hostname;
    let vendorName = hostname.split(".")[1];
    let apiUrl = `https://extension-orpin.vercel.app/api/vendor?vendorName=${vendorName}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    throw error;
  }
}
