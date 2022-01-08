addModal(document.body);

function addModal(element) {
  addScreen(element);

  const newBtn = document.createElement("button");
  newBtn.innerHTML = "Open Notemaker";
  newBtn.classList.add("new-button");
  newBtn.setAttribute("id", "myBtn");
  newBtn.addEventListener("click", openModal);

  let video = document.getElementsByTagName("VIDEO")[0];
  video.parentNode.appendChild(newBtn);
}

function addScreen(element) {
  let modalElt = document.createElement("div");
  modalElt.classList.add("modal");
  modalElt.setAttribute("id", "myModal");

  let modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  let closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.innerHTML = "&times;";

  modalContent.appendChild(closeButton);
  modalElt.appendChild(modalContent);

  element.appendChild(modalElt);
}

function openModal() {
  // Get the modal
  let modal = document.getElementById("myModal");

  // Get the button that opens the modal
  let btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  let modalContent = document.getElementsByClassName("modal-content")[0];
  modalContent.appendChild(document.getElementsByTagName("VIDEO")[0]);

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// function replaceText(element) {
//   if (element.hasChildNodes()) {
//     element.childNodes.forEach(replaceText);
//   } else if (element.nodeType === Text.TEXT_NODE) {
//     if (element.textContent.match(/corona/gi)) {
//       const newElt = document.createElement("span");

//       newElt.innerHTML = element.textContent.replace(
//         /corona/gi,
//         "<span style='background-color: lightblue;'>OMICRON DUDE </span>"
//       );
//       element.replaceWith(newElt);
//     }
//   }
// }
