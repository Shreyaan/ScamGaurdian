import { getWebsiteBlacklsitStatus } from "./helper/getWebsiteStatus.js";
import { generateModalHTML } from "./DOM_Functions/generateModalHtml.js";

let warningModal = document.createElement("div");

export async function currentWebsiteCheck() {
  let currentUrl = window.location.href;

  let hostname = new URL(currentUrl).hostname;

  let blacklistStatus = await getWebsiteBlacklsitStatus(hostname);
  if (blacklistStatus) {
  //  let shouldShowModal = localStorage.getItem("scamgaurdian_stay_btn");
  //   if (shouldShowModal) {
  //     return;
  //   }
    warningModal.innerHTML = generateModalHTML(hostname);
    document.body.appendChild(warningModal);

    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;

    const LeaveBtn = document.getElementsByClassName("scamgaudian-btn-Leave");
    LeaveBtn[0].addEventListener("click", () => {
      window.location.href = "https://extension-orpin.vercel.app";
    });

    const StayBtn = document.getElementById("scamgaurdian_stay_btn");

    StayBtn.addEventListener("click", () => {
      localStorage.setItem("scamgaurdian_stay_btn", "true");
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      warningModal.remove();
    });
  }
}
