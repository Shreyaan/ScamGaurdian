export function generatePopUpHTML(data) {
  return `
  <div>
  <div class='header'>
    <h1>Scam Guardian</h1>
  </div>

  <section>

  <p class="riskText">Risks</p>

  <ul class='listItem'>
   <li class='list riskList'>${data.risks[0]}</li>
   <li class='list riskList'>${data.risks[1]}</li>
   <li class='list riskList'>${data.risks[2]}</li>
  </ul>

  <div class='border'></div>

  <p class="tipsText">Tips</p>

  <ul class="listItem">
    <li class='list tipsList'>${data.tips[0]}</li>
    <li class='list tipsList'>${data.tips[1]}</li>
    <li class='list tipsList'>${data.tips[2]}</li>
  </ul>

  </section>
  </div>
`;
}
