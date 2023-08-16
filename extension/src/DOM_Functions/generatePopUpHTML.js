export function generatePopUpHTML(data) {
  return `
    <div>
      <div class='header'>
        <h1>Scam Guardian</h1>
      </div>
  
      <section>
  
        <p class="riskText">Risks:</p>

        <div class="accordion">

          <div class="panels">
              <input type="checkbox" name="panel" id="panel-1">
             <label for="panel-1"> ☠️ Risk 1</label>

              <div class="accordion-content   accordion-content-small">
                  <p class="accordion-body">${data.risks[0]}</p>
                </div>
          </div>
          <div class="panels">
              <input type="checkbox" name="panel" id="panel-2">
             <label for="panel-2"> ☠️ Risk 2</label>

              <div class="accordion-content accordion-content-small">
                  <p class="accordion-body">${data.risks[1]}</p>
                </div>
          </div>
          <div class="panels">
              <input type="checkbox" name="panel" id="panel-3">
             <label for="panel-3"> ☠️ Risk 3</label>

              <div class="accordion-content   accordion-content-small">
                  <p class="accordion-body">${data.risks[2]}</p>
                </div>
          </div>
        </div>


        <p class="tipsText">Tips:</p>

        <div class="accordion">

          <div class="panels">
              <input type="checkbox" name="panel" id="panel-4">
             <label for="panel-4"> 💡 Tip 1</label>

              <div class="accordion-content   accordion-content-small">
                  <p class="accordion-body">${data.tips[0]}</p>
                </div>
          </div>
          <div class="panels">
              <input type="checkbox" name="panel" id="panel-5">
             <label for="panel-5"> 💡 Tip 2</label>

              <div class="accordion-content accordion-content-small">
                  <p class="accordion-body">${data.tips[1]}</p>
                </div>
          </div>
          <div class="panels">
              <input type="checkbox" name="panel" id="panel-6">
             <label for="panel-6"> 💡 Tip 3</label>

              <div class="accordion-content   accordion-content-small">
                  <p class="accordion-body">${data.tips[2]}</p>
                </div>
          </div>
        </div>


      </section>
    </div>
    
    
  `;
}
