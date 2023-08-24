export function generateModalHTML(hostname) {
  return `
  <div class="scamgaurdian-blocking">
  <div class="scamgaurdian-blocking-modal">
    <div class="">
      <p class="scamgaudian-heading">Scam Guardian</p>
      <div class="scamgaudian-content">
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height="67"
            viewBox="0 0 67 67"
            fill="none"
          >
            <path
              d="M2.79163 58.625H64.2083L33.5 5.58337L2.79163 58.625ZM36.2916 50.25H30.7083V44.6667H36.2916V50.25ZM36.2916 39.0834H30.7083V27.9167H36.2916V39.0834Z"
              fill="#DE000B"
            />
          </svg>
          <p>Warning</p>
        </div>
        <p>
          We have detected that the following site is not safe. We advise
          that you leave this website to avoid your data from being
          compromised.
        </p>
        <p class="scamgaudian-link">
          <a href="https://extension-orpin.vercel.app/">Learn more</a>
        </p>
        <p>${hostname}</p>
        <div class="scamgaudian_bottom_btns">
          <div class="scamgaudian-btn_stay" id="scamgaurdian_stay_btn">Trust Website</div>
          <div
          class="scamgaudian-btn-Leave"
          onclick="window.location.href = "https://extension-orpin.vercel.app";"
        >
          <span>Leave Website</span>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
}
