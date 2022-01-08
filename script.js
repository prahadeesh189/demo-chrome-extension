addModal(document.body);

function addModal(element) {
  const newBtn = document.createElement("button");
  newBtn.innerHTML = "Open Notemaker";
  newBtn.classList.add("new-button");
  newBtn.addEventListener("click", function () {
    alert("did something");
  });

  let video = document.getElementsByTagName("VIDEO")[0];
  video.parentNode.appendChild(newBtn);
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
