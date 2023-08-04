// Create the button
let button = document.createElement("button");
button.innerHTML = "SG";

button.id = "myExtensionButton";

document.body.appendChild(button);

const cssStyles = `
#myExtensionButton {
  position:fixed;
  right:10px;
  bottom:200px;
  z-index:999;
  padding:1rem;
  font-size:1.5rem;
  background-color:#0F69D2;
  color:#fff;
  border:none;
  font-weight:700;
  transition: all ease-in-out .3s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius:10px;
  cursor:pointer;
}
#myExtensionButton:hover{
  transform:scale(1.2);
}
#myExtensionPopup{
  min-width:300px;
  width:auto;
  height:auto;
  right:4rem;
  top:1rem;
  border:1px solid #000;
  border-radius : 5px;
  position:fixed;
  z-index:10000;
  background-color:#fff;
  display:none;
}
#myExtensionPopup .header{
  background:#0F69D2;
  min-width:300px;
  width:auto;
  color:white;
  text-align:center;
  font-weight:700;
  font-size:1em;
  padding:8px;
  cursor:pointer;
}
#myExtensionPopup section{
  position:relative;
  overflow:hidden;
  color:black;
  background-color:white;
}

#myExtensionPopup .listItem{
  position:relative;
  padding:0.5rem;
  margin-right:0.5rem;

}
#myExtensionPopup p{
  font-size:1rem;
  font-weight:700;
  margin:10px;
}

#myExtensionPopup .riskList{
  font-size:1rem;
  list-style-type:" ☠️ ";
  padding-left:0.5rem;

}

#myExtensionPopup .tipsList{
  font-size:1rem;
  list-style-type:" 💡 ";
  padding-left:0.5rem;
}


#myExtensionPopup .tipsText{
  font-size:1.5rem;
  color:green;
  font-weight:600;
  text-decoration:underline;
}

#myExtensionPopup .riskText{
  font-size:1.5rem;
  color:red;
  font-weight:600;
  text-decoration:underline;
}

.border{
  border:0.5px solid lightgray;
  width:100%;
}

`;

function injectCSS(cssStyles) {
  const styleElement = document.createElement("style");
  styleElement.textContent = cssStyles;
  document.head.appendChild(styleElement);
}

// Inject the CSS styles
injectCSS(cssStyles);

// Create the popup (initially hidden)
let popup = document.createElement("div");
popup.innerHTML = `
    <div>
    <div class='header'>
      <h1>Scam Guardian</h1>
    </div>

    <section>

    <p class="riskText">Risks</p>

    <ul class='listItem'>
     <li class='list riskList'>This is risk</li>
     <li class='list riskList'>This is risk</li>
     <li class='list riskList'>This is risk</li>
    </ul>

    <div class='border'></div>

    <p class="tipsText">Tips</p>

    <ul class="listItem">
      <li class='list tipsList'>This is tips</li>
      <li class='list tipsList'>This is tips</li>
      <li class='list tipsList'>This is tips</li>
    </ul>

    </section>
    </div>
`;

popup.id = "myExtensionPopup";
document.body.appendChild(popup);

// Show/hide the popup when the button is clicked
button.addEventListener("click", function () {
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
});
