export async function getVendorInfo(url) {
  try {
    let hostname = new URL(url).hostname;
    let vendorName = hostname.split(".")[1];

    //check if vendor info is in local storage
    let vendorInfo = JSON.parse(localStorage.getItem("vendorInfo"));
    let vendorInfoTime = localStorage.getItem("vendorInfoTime");

    //if vendor info is in local storage and is less than 1 day old, return it
    if (vendorInfo && vendorInfoTime) {
      let now = new Date().getTime();
      let oneDay = 1000 * 60 * 60 * 24;
      console.log(now - vendorInfoTime);
      if (now - vendorInfoTime < oneDay) {
        return vendorInfo;
      }
    } else {
      //if vendor info is more than 1 day old, remove it
      localStorage.removeItem("vendorInfo");
      localStorage.removeItem("vendorInfoTime");
    }

    let apiUrl = `https://extension-orpin.vercel.app/api/vendor?vendorName=${vendorName}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    //set vendor info in local storage for 1 day

    localStorage.setItem("vendorInfo", JSON.stringify(data));
    localStorage.setItem("vendorInfoTime", new Date().getTime());

    return data;
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    throw error;
  }
}
