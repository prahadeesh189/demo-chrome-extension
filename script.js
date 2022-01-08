addModal();

function addModal() {
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

function clearScreen(element) {
  let vid = document.getElementById("my-video-frame");
  vid.remove();
}

function openModal() {
  addScreen(document.body);

  // Get the modal
  let modal = document.getElementById("myModal");

  // Get the button that opens the modal
  let btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  let modalContent = document.getElementsByClassName("modal-content")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    let iframeElt = document.createElement("iframe");
    iframeElt.src =
      "https://www.youtube.com/embed/9YffrCViTVk?start=50&autoplay=1&showinfo=0&rel=0&fs=0&autohide=0";
    iframeElt.width = 560;
    iframeElt.height = 315;
    iframeElt.frameborder = 0;
    iframeElt.setAttribute("id", "my-video-frame");
    modalContent.appendChild(iframeElt);

    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    clearScreen(document.body);
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      clearScreen(document.body);
      modal.style.display = "none";
    }
  };
}
