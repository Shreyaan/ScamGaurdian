// Create the button
let button = document.createElement("button");
button.innerHTML = "SG";

button.id = "myExtensionButton";
// Create the popup (initially hidden)
let popup = document.createElement("div");



popup.id = "myExtensionPopup";

// Get the current URL
let currentUrl = window.location.href;

getVendorInfo(currentUrl);
let vendorInfo = {};
async function getVendorInfo(url) {
  try {
    let hostname = new URL(url).hostname;
    let vendorName = hostname.split(".")[1];
    let apiUrl = `https://db-test-lyart.vercel.app/api/vendor?vendorName=${vendorName}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    throw error;
  }
}

function addButtonToWebsites() {
  getVendorInfo(currentUrl)
    .then((data) => {
      console.log(data);
      vendorInfo = data;
      if (data) {
        if (data.risks.length > 0 || data.tips.length > 0) {
          document.body.appendChild(button);
          popup.innerHTML = generatePopUpHTML(vendorInfo);
          document.body.appendChild(popup);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

addButtonToWebsites();

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
  transition: transform ease-in-out .3s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius:10px;
  cursor:pointer;
}
#myExtensionButton:hover{
  transform:scale(1.2);
}
#myExtensionPopup{
  width:25vw;
  height:auto;
  max-height: 80vh;
  right:4rem;
  top:1rem;
  border:1px solid #000;
  border-radius : 5px;
  position:fixed;
  z-index:10000;
  background-color:#fff;
  display:none;
  overflow-y: scroll;
}
#myExtensionPopup .header{
  background:#0F69D2;
   width:25vw;
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

#myExtensionPopup .border{
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

//bug - popup is not showing on first click
// fix
popup.style.display = "none";

let isLongPressing = false;
let buttonMoved = false; // track if the button was moved during long press
let lastClickTime = 0; // track the last click time
let buttonMovedState = false; // track if the button is currently moved

button.addEventListener("click", function (event) {
  const currentTime = new Date().getTime();
  if (currentTime - lastClickTime <= 300) {
    // Double click
    if (buttonMovedState) {
      button.style.right = "10px";

      buttonMovedState = false;
    } else {
      // Move the button to the right
      button.style.right = "-50px";
      buttonMovedState = true;
    }
    button.style.transition = "right 0.5s";
    setTimeout(function () {
      button.style.transition = ""; // Reset transition
    }, 500);
  }
  lastClickTime = currentTime;
  event.preventDefault(); // Prevent default behavior of double-click
});

button.addEventListener("mousedown", function () {
  isLongPressing = true;
  buttonMoved = false; // Reset the buttonMoved flag
  setTimeout(function () {
    if (isLongPressing) {
      document.addEventListener("mousemove", followMouse);
    }
  }, 500);
});

document.addEventListener("mouseup", function () {
  if (isLongPressing) {
    isLongPressing = false;
    document.removeEventListener("mousemove", followMouse);

    if (!buttonMoved) {
      togglePopup();
    }
  }
});

function togglePopup() {
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}

function followMouse(event) {
  const mouseY = event.clientY;
  button.style.bottom = `${window.innerHeight - mouseY}px`;
  buttonMoved = true; // Set the flag to true when the button is moved
}


function generatePopUpHTML(data) {
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