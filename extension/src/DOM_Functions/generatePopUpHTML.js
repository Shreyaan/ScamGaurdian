export function generatePopUpHTML(data) {
  return `
    <div>
      <div class='header'>
        <h1>Scam Guardian</h1>
        <div id="scamGaurdianPopupClose">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 0C6.2 0 0 6.2 0 14C0 21.8 6.2 28 14 28C21.8 28 28 21.8 28 14C28 6.2 21.8 0 14 0ZM19.4 21L14 15.6L8.6 21L7 19.4L12.4 14L7 8.6L8.6 7L14 12.4L19.4 7L21 8.6L15.6 14L21 19.4L19.4 21Z" fill="white"/>
          </svg>
        </div>
      </div>
  
      <section>
  
        <p class="riskText">Risks:</p>

        <div class="scamAccordian">

          <div class="panels">
              <input type="checkbox" name="panel" id="panel-1">
             <label for="panel-1"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 38 38" fill="none">
  <path d="M1.58333 33.25H36.4167L19 3.16667L1.58333 33.25ZM20.5833 28.5H17.4167V25.3333H20.5833V28.5ZM20.5833 22.1667H17.4167V15.8333H20.5833V22.1667Z" fill="#DE000B"/>
</svg>  Risk 1</label>

              <div class="scamAccordian-content   scamAccordian-content-small">
                  <p class="scamAccordian-body">${data.risks[0]}</p>
                </div>
          </div>
          <div class="panels">
              <input type="checkbox" name="panel" id="panel-2">
             <label for="panel-2"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 38 38" fill="none">
  <path d="M1.58333 33.25H36.4167L19 3.16667L1.58333 33.25ZM20.5833 28.5H17.4167V25.3333H20.5833V28.5ZM20.5833 22.1667H17.4167V15.8333H20.5833V22.1667Z" fill="#DE000B"/>
</svg> Risk 2</label>

              <div class="scamAccordian-content scamAccordian-content-small">
                  <p class="scamAccordian-body">${data.risks[1]}</p>
                </div>
          </div>
          <div class="panels">
              <input type="checkbox" name="panel" id="panel-3">
             <label for="panel-3"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 38 38" fill="none">
  <path d="M1.58333 33.25H36.4167L19 3.16667L1.58333 33.25ZM20.5833 28.5H17.4167V25.3333H20.5833V28.5ZM20.5833 22.1667H17.4167V15.8333H20.5833V22.1667Z" fill="#DE000B"/>
</svg> Risk 3</label>

              <div class="scamAccordian-content   scamAccordian-content-small">
                  <p class="scamAccordian-body">${data.risks[2]}</p>
                </div>
          </div>
        </div>


        <p class="tipsText">Tips:</p>

        <div class="scamAccordian">

          <div class="panels">
              <input type="checkbox" name="panel" id="panel-4">
             <label for="panel-4"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 38 38" fill="none">
  <path d="M19 1.58333L4.75 7.91666V17.4167C4.75 26.2042 10.83 34.4217 19 36.4167C27.17 34.4217 33.25 26.2042 33.25 17.4167V7.91666L19 1.58333ZM17.4167 11.0833H20.5833V14.25H17.4167V11.0833ZM17.4167 17.4167H20.5833V26.9167H17.4167V17.4167Z" fill="#009D00"/>
</svg> Tip 1</label>

              <div class="scamAccordian-content   scamAccordian-content-small">
                  <p class="scamAccordian-body">${data.tips[0]}</p>
                </div>
          </div>
          <div class="panels">
              <input type="checkbox" name="panel" id="panel-5">
             <label for="panel-5"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 38 38" fill="none">
  <path d="M19 1.58333L4.75 7.91666V17.4167C4.75 26.2042 10.83 34.4217 19 36.4167C27.17 34.4217 33.25 26.2042 33.25 17.4167V7.91666L19 1.58333ZM17.4167 11.0833H20.5833V14.25H17.4167V11.0833ZM17.4167 17.4167H20.5833V26.9167H17.4167V17.4167Z" fill="#009D00"/>
</svg> Tip 2</label>

              <div class="scamAccordian-content scamAccordian-content-small">
                  <p class="scamAccordian-body">${data.tips[1]}</p>
                </div>
          </div>
          <div class="panels">
              <input type="checkbox" name="panel" id="panel-6">
             <label for="panel-6"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 38 38" fill="none">
  <path d="M19 1.58333L4.75 7.91666V17.4167C4.75 26.2042 10.83 34.4217 19 36.4167C27.17 34.4217 33.25 26.2042 33.25 17.4167V7.91666L19 1.58333ZM17.4167 11.0833H20.5833V14.25H17.4167V11.0833ZM17.4167 17.4167H20.5833V26.9167H17.4167V17.4167Z" fill="#009D00"/>
</svg> Tip 3</label>

              <div class="scamAccordian-content   scamAccordian-content-small">
                  <p class="scamAccordian-body">${data.tips[2]}</p>
                </div>
          </div>
        </div>


      </section>
    </div>
    
    
  `;
}
