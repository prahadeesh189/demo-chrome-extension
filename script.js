addModal();



function addModal() {
  // const newBtn = document.createElement("button");
  // newBtn.innerHTML = "CaNo";
  // newBtn.classList.add("new-button");
  // newBtn.setAttribute("id", "myBtn");
  // newBtn.addEventListener("click", openModal);



  // let video = document.getElementsByClassName("ytp-right-controls")[0];
  // video.parentNode.appendChild(newBtn);

  
  var svgString ="<svg width=\"28\" height=\"28\" viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64Z\" fill=\"#49F5D3\"/>\n<path d=\"M19.1 47.3H31.9343C32.4977 47.3 32.9543 46.8433 32.9543 46.28C32.9543 45.7167 32.4977 45.26 31.9343 45.26H19.1C18.5367 45.26 18.08 45.7167 18.08 46.28C18.08 46.8433 18.5367 47.3 19.1 47.3V47.3Z\" fill=\"#333333\"/>\n<path d=\"M19.1 41.18H31.34C31.9033 41.18 32.36 40.7233 32.36 40.16C32.36 39.5967 31.9033 39.14 31.34 39.14H19.1C18.5367 39.14 18.08 39.5967 18.08 40.16C18.08 40.7233 18.5367 41.18 19.1 41.18V41.18Z\" fill=\"#333333\"/>\n<path d=\"M34.9279 34.04C34.9279 33.4767 34.4713 33.02 33.9079 33.02H19.1C18.5367 33.02 18.08 33.4767 18.08 34.04C18.08 34.6033 18.5367 35.06 19.1 35.06H33.9079C34.4713 35.06 34.9279 34.6033 34.9279 34.04Z\" fill=\"#333333\"/>\n<path d=\"M41.54 26.9H19.1C18.5367 26.9 18.08 27.3567 18.08 27.92C18.08 28.4833 18.5367 28.94 19.1 28.94H41.54C42.1033 28.94 42.56 28.4833 42.56 27.92C42.56 27.3567 42.1033 26.9 41.54 26.9Z\" fill=\"#333333\"/>\n<path d=\"M41.54 20.78H19.1C18.5367 20.78 18.08 21.2367 18.08 21.8C18.08 22.3633 18.5367 22.82 19.1 22.82H41.54C42.1033 22.82 42.56 22.3633 42.56 21.8C42.56 21.2367 42.1033 20.78 41.54 20.78Z\" fill=\"#333333\"/>\n<path d=\"M44.26 12.62H40.52V11.6C40.52 11.0367 40.0633 10.58 39.5 10.58C38.9367 10.58 38.48 11.0367 38.48 11.6V12.62H34.4V11.6C34.4 11.0367 33.9433 10.58 33.38 10.58C32.8167 10.58 32.36 11.0367 32.36 11.6V12.62H28.28V11.6C28.28 11.0367 27.8233 10.58 27.26 10.58C26.6967 10.58 26.24 11.0367 26.24 11.6V12.62H22.16V11.6C22.16 11.0367 21.7033 10.58 21.14 10.58C20.5767 10.58 20.12 11.0367 20.12 11.6V12.62H16.38C15.0662 12.6216 14.0016 13.6862 14 15V51.04C14.0016 52.3538 15.0662 53.4184 16.38 53.42H35.6451C36.2084 53.42 36.6651 52.9633 36.6651 52.4C36.6651 51.8367 36.2084 51.38 35.6451 51.38H16.38C16.1923 51.3798 16.0402 51.2277 16.04 51.04V15C16.0402 14.8123 16.1923 14.6602 16.38 14.66H20.12V15.68C20.12 16.2433 20.5767 16.7 21.14 16.7C21.7033 16.7 22.16 16.2433 22.16 15.68V14.66H26.24V15.68C26.24 16.2433 26.6967 16.7 27.26 16.7C27.8233 16.7 28.28 16.2433 28.28 15.68V14.66H32.36V15.68C32.36 16.2433 32.8167 16.7 33.38 16.7C33.9433 16.7 34.4 16.2433 34.4 15.68V14.66H38.48V15.68C38.48 16.2433 38.9367 16.7 39.5 16.7C40.0633 16.7 40.52 16.2433 40.52 15.68V14.66H44.26C44.4477 14.6602 44.5998 14.8123 44.6 15V27.92C44.6 28.4833 45.0567 28.94 45.62 28.94C46.1833 28.94 46.64 28.4833 46.64 27.92V15C46.6384 13.6862 45.5738 12.6216 44.26 12.62V12.62Z\" fill=\"#333333\"/>\n<path d=\"M45.62 30.98C39.4234 30.98 34.4 36.0034 34.4 42.2C34.4 48.3966 39.4234 53.42 45.62 53.42C51.8166 53.42 56.84 48.3966 56.84 42.2C56.8329 36.0063 51.8137 30.9871 45.62 30.98V30.98ZM51.228 40.2689L44.5641 46.9334C44.3573 47.1403 44.0716 47.2484 43.7796 47.2303C43.4876 47.2121 43.2174 47.0694 43.0378 46.8385L39.928 42.8395C39.5821 42.3948 39.6623 41.754 40.107 41.4081C40.5516 41.0623 41.1925 41.1424 41.5383 41.5871L43.9389 44.6736L49.7857 38.8266C50.184 38.4283 50.8297 38.4283 51.228 38.8266C51.6263 39.2249 51.6263 39.8706 51.228 40.2689L51.228 40.2689Z\" fill=\"#3498DB\"/>\n</svg>\n";



  var buttonWrapper = document.createElement("div");
  buttonWrapper.innerHTML = svgString.trim();

  var newBtn = document.createElement("button");
  newBtn.className = "ytp-settings-button ytp-button";
  newBtn.style.transform = "translateY(-10px)";
  newBtn.title = "Add Screenshot";
  
  newBtn.classList.add("new-button");
  newBtn.setAttribute("id", "myBtn");
  newBtn.addEventListener("click", openModal);


  newBtn.appendChild(buttonWrapper.firstElementChild);


  document.getElementsByClassName("ytp-right-controls")[0].append(newBtn);
}



function addScreen(element) {
  let modalElt = document.createElement("div");
  modalElt.classList.add("modal");
  modalElt.setAttribute("id", "myModal");

  let modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // let closeButton = document.createElement("span");
  // closeButton.classList.add("close");
  // closeButton.innerHTML = "&times;";

  // modalContent.appendChild(closeButton);
  modalElt.appendChild(modalContent);

  element.appendChild(modalElt);
}

function clearScreen(element) {
  let vid = document.getElementById("my-video-frame");
  vid.remove();
}

function openModal() {
  addScreen(document.body);

  let video = document.getElementsByClassName("video-stream")[0];
  video.pause();

  // Get the modal
  let modal = document.getElementById("myModal");

  // Get the button that opens the modal
  let btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  let modalContent = document.getElementsByClassName("modal-content")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    let videoId = window.location.href.split("=")[1];

    let currentTime = document.getElementsByClassName("video-stream")[0].currentTime;
    currentTime = Math.floor(currentTime);

    let iframeElt = document.createElement("iframe");
    iframeElt.src = `https://www.youtube.com/embed/${videoId}?start=${currentTime}&autoplay=1&showinfo=0&rel=0&fs=0&autohide=0`;

    iframeElt.frameborder = 0;
    iframeElt.setAttribute("id", "my-video-frame");
    modalContent.appendChild(iframeElt);

    modal.style.display = "block";

    

      // notepad

    $('.modal-content').append(`

      <iframe id="myframe" name="myframe" style="width: 100%; height: 95%;"></iframe>  

    `);


    $("#myframe").contents().find('html head')
    
    .append(`
    
        <meta charset="UTF-8">
        <title>document</title>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

      <style>
        

        body {}

        iframe {
            height: 75vh;
            width: 100%;
            border: none;
        }

        .container {
          width: 60%;
          position: absolute;
          border: 1px solid #f5f5f5;
          border-radius: 5px;
          box-shadow: 2px 5px 10px #e4e4e4;
        }

        .nav {
            display: flex;
            flex-wrap: wrap;


            background: #f5f5f5;
            padding: 5px;
        }

        .nav > * {
            max-width: max-content;
        }

        img {
            max-width: 50px;
            max-height: 50px;
        }


        button.pdf {
          display: block;
          height: 40px;
          width: 60px;
          background-color: #d6d6d6;
          padding: 3px;
        }

        .button {
            margin: 4px;
            padding: 10px 10px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            transition: all 150ms linear;
            text-align: center;
            white-space: nowrap;
            text-decoration: none !important;
            text-transform: none;
            text-transform: capitalize;
            color: #fff;
            border: 0 none;
            border-radius: 4px;
            font-size: 13px;
            font-weight: 500;
            line-height: 1.3;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            justify-content: center;
            align-items: center;
            flex: 0 0 160px;
            box-shadow: 2px 5px 6px #e4e4e4;
        }

        .button:hover {
            transition: all 150ms linear;
            opacity: .85;
        }

        .button:active {
            transition: all 150ms linear;
            opacity: .75;
        }

        .button:focus {
            outline: 1px dotted #959595;
            outline-offset: -4px;
        }

        .button.-regular {
            color: #202129;
            margin-bottom: 13px;
            background-color: #f2f2f2;
        }

        .button.-regular:hover {
            color: #202129;
            background-color: #e1e2e2;
            opacity: 1;
        }

        .button.-regular:active {
            background-color: #d5d6d6;
            opacity: 1;
        }

        .inpColor {
            background-color: #f2f2f2;
            border: none;
        }



        .tooltip {
            position: relative;
            color: #3B627E;
            font-weight: bolder;
            cursor: pointer;
        }

        .tooltip:hover::before {
            content: "";
            border: solid transparent;
            border-bottom-color: rgb(86, 85, 85);
            border-width: 10px;
            position: absolute;
            top: 20px;
        }

        .tooltip:hover::after {
            content: attr(data-tooltip);
            position: absolute;
            min-width: 38px;
            font-weight: 100;
            line-height: 1.3em;
            margin: 0;
            color: #f5f5f5;
            background-color: rgb(86, 85, 85);
            padding: 15px;
            border-radius: 5px;
            left: -39%;
            top: 40px;
            z-index: 1;
            font-size: .7em;
        }

        .inp {
            width: 121px;
            float: left;
            padding: 7px;
        }


      </style>

    `);




    $("#myframe").contents().find('html body')
    .append(`
    
          <div class="if container" style="width: 90%;position: absolute;border: 1px solid #f5f5f5;border-radius: 5px;box-shadow: 2px 5px 10px #e4e4e4;">
              <div class="if nav">
                  <button data-tooltip="bold" class="if tooltip button -regular" onclick="execCmd('bold');"><i class="fa fa-bold"></i></button>
                  <button data-tooltip="italic" class="tooltip button -regular" onclick="execCmd('italic');"><i class="fa fa-italic"></i></button>
                  <button data-tooltip="underline" class="tooltip button -regular" onclick="execCmd('underline');"><i class="fa fa-underline"></i></button>
                  <button data-tooltip="strikeThrough" class="tooltip button -regular" onclick="execCmd('strikeThrough');"><i class="fa fa-strikethrough"></i></button>
                  <button data-tooltip="align left" class="tooltip button -regular" onclick="execCmd('justifyLeft');"><i class="fa fa-align-left"></i></button>
                  <button data-tooltip="align center" class="tooltip button -regular" onclick="execCmd('justifyCenter');"><i class="fa fa-align-center"></i></button>
                  <button data-tooltip="align right" class="tooltip button -regular" onclick="execCmd('justifyRight');"><i class="fa fa-align-right"></i></button>
                  <button data-tooltip="align justify" class="tooltip button -regular" onclick="execCmd('justifyFull');"><i class="fa fa-align-justify"></i></button>
                  <button data-tooltip="cut" class="tooltip button -regular" onclick="execCmd('cut');"><i class="fa fa-cut"></i></button>
                  <button data-tooltip="copy" class="tooltip button -regular" onclick="execCmd('copy');"><i class="fa fa-copy"></i></button>
                  <button data-tooltip="unordered list" class="tooltip button -regular" onclick="execCmd('insertUnorderedList');"><i class="fa fa-list-ul"></i></button>
                  <button data-tooltip="ordered list" class="tooltip button -regular" onclick="execCmd('insertOrderedList');"><i class="fa fa-list-ol"></i></button>
                  <button data-tooltip="paragraph" class="tooltip button -regular" onclick="execCmd('bold');"><i class="fa fa-paragraph"></i></button>
                  <button data-tooltip="horizontal rule" class="tooltip button -regular" onclick="execCmd('insertHorizontalRule');">HR</button>
                  <select data-tooltip="heading" class="tooltip button -regular" onchange="execCommandWithArg('formatBlock',this.value)">
                      <option value="">Heading</option>
                      <option value="H1">H1</option>
                      <option value="H2">H2</option>
                      <option value="H3">H3</option>
                      <option value="H4">H4</option>
                      <option value="H5">H5</option>
                      <option value="H6">H6</option>
                  </select>
                  <button data-tooltip="create link" class="tooltip button -regular" onclick="execCommandWithArg('createLink',prompt('Enter a URL',''));"><i class="fa fa-link"></i></button>
                  <button data-tooltip="remove link" class="tooltip button -regular" onclick="execCmd('unlink');"><i class="fa fa-unlink"></i></button>
                  <button data-tooltip="insert image" id="pic" class="tooltip button -regular"><i class="far fa-images"></i></button>
                  <div class="button -regular inp">
                      <label for="color">Color:</label>
                      <input id="color" data-tooltip="color" class="tooltip inpColor" type="color" onchange="execCommandWithArg('foreColor',this.value)">
                  </div>
                  <div class="button -regular inp">
                      <label for="background">Background:</label>
                      <input id="background" data-tooltip="background" class="tooltip inpColor" type="color" onchange="execCommandWithArg('hiliteColor',this.value)">
                  </div>
                  <select data-tooltip="font name" class="tooltip button -regular" onchange="execCommandWithArg('fontName',this.value)">
                      <option value="">Font family</option>
                      <option value="Arial">Arial</option>
                      <option value="Comic Sans MS">Comic Sans MS</option>
                      <option value="Courier">Courier</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Tahoma">Tahoma</option>
                      <option value="Roboto">Roboto</option>
                      <option value="Ubuntu">Ubuntu</option>
                      <option value="Times New Roman">Times New Roman</option>
                      <option value="Verdana">Verdana</option>
                  </select>
                  <select data-tooltip="font size" class="tooltip button -regular" onchange="execCommandWithArg('fontSize',this.value)">
                      <option value="">Font size</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                  </select>
          
          
                  <button data-tooltip="Pdf" id="pdf" class="tooltip button -regular">.pdf</button>
                  
              </div>
              <iframe name="richTextField"></iframe>
          </div>




          

          
          <script type="text/javascript">

            richTextField.document.designMode = 'On';
            
            let execCmd = (command) => {
                console.log("dnvhfjv");
                richTextField.document.execCommand(command, false, null);
            }
            
            let execCommandWithArg = (command, arg) => {
                richTextField.document.execCommand(command, false, arg);
            }



          </script>


    `);


    

    $("#myframe").contents().find('html body button#pdf').on('click', (event) => {

      console.log( window );

    });



    $("#myframe").contents().find('html body button#pic').on('click', (event) => {

      var player = $('iframe#my-video-frame').contents()[0].querySelector('.video-stream');


      let time = player.currentTime;

      // time = Math.floor(currentTime);

      // console.log(time);
      // let title="";
      // let minutes = Math.floor(time / 60)
      // time = Math.floor(time - (minutes * 60));
      // let hours;
      // if (minutes > 60) {
      //   hours = Math.floor(minutes / 60)
      //   minutes -= hours * 60;
      //   title += hours + "-";
      // }
    
      // title += minutes + "-" + time;
      // title += extension;



      var canvas = document.createElement("canvas");
      canvas.width = 400;
      canvas.height = 225;
      canvas.getContext('2d').drawImage(player, 0, 0, 400, 225);
    
      var base64Canvas = canvas.toDataURL("image/jpeg");




      $("#myframe").contents().find('html body div.if.container iframe').contents()[0].execCommand('insertImage', false, base64Canvas);
    } );


























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
