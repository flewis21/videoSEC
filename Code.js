var doGet = function (e) {
  var libName = "app";
  // Early return for getData action
  if (e && e.parameter && e.parameter.action === "getData") {
    return this[libName].handleRequest(e);
  }

  // Logging
  if (e && e.parameter["func"]) {
    console.log("SIPOC Code: " + JSON.stringify(e) + "\n ");
  }
  var funcUno = e.parameter["func"];
  console.log(
    "SIPOC Code: e.parameter['args'] before funcDos:",
    e.parameter["args"] + "\n ",
  );
  var funcDos = e.parameter["args"];
  console.log(
    "SIPOC Code: e.parameter['args'] after funcDos:",
    e.parameter["args"] + "\n ",
  );
  console.log("SIPOC Code: funcDos:", funcDos + "\n ");
  var foobarr = funcUno || "mis";
  var libFunc = foobarr;
  var htmlArray = [
    `untitled proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks userInterfaceAccess cGWI`,
  ]
    .toString()
    .split(" ");
  var rndHtmlIndex = Math.floor(Math.random() * Math.floor(htmlArray.length));
  console.log("SIPOC Code: rndHtmlIndex = " + htmlArray[rndHtmlIndex] + "\n ");
  var rndPage = htmlArray[rndHtmlIndex];
  var index = htmlArray.findIndex(function (element) {
    return element === e.parameter["args"] || element === rndPage;
  });

  // Determine funcTres
  var funcTres = e && e.parameter["file"] ? e.parameter["file"] : rndPage;

  var tres = htmlArray.findIndex(function (element) {
    return element === funcTres;
  });
  console.log("SIPOC Code: index:", index + "\ntres", tres + "\n ");
  var args;
  index !== -1 ? (args = htmlArray[index]) : (args = rndPage);
  console.log(
    "SIPOC Code: e {parameter: {func: " +
      e.parameter["func"] +
      ",args: " +
      e.parameter["args"] +
      "}}\n ",
  );
  console.log(
    "SIPOC Code: e {parameter: {foobarr: " +
      foobarr +
      ",args: " +
      args +
      "}}\n ",
  );
  var template = HtmlService.createTemplate(`
  <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
        <?!= style ?>
      </head>
      <body>
        <table><tr><td>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf7eQty92OWCEw_YZ4Irf-PpjYboaKysgVLIBnxESn-TcRfnQ/viewform?embedded=true" width="640" height="3686" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </td><td>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSq6HBWVkXDbQatjrtodxKlGSDJkrj0Uc70jRN6vhzDmvW3RPjysRGhnjCyGZ77vaKLl0IVqB3UDQO3/embed?start=false&loop=false&delayms=60000" frameborder="0" width="960" height="3715" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          </td></tr></table>
      </body>
    </html>
`);
  template.style = `
    <style>

      body {

        flex-grow: 1;
        background-color: red;
        border: 2px solid powderblue;
        color:blue;
        text-decoration:bold;
        flex-flow: row wrap;
        grid-column: 1;
        grid-row: 1;
        text-align: center;
        align-content: flex-start;
        overflow: auto;
      }
      .app-container {
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 90%;
        max-width: 800px;
        margin-top: 20px;
        margin-bottom: 20px;
        position: relative;
      }
      nav {
        width: 100%;
        background-color: #4CAF50;
        padding: 15px 0;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 0;
        z-index: 1000;
      }
      nav a {
        color: white !important;
        font-size: 1.2em;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 5px;
        transition: background-color 0.3s ease;
      }
      nav a:hover {
        background-color: #45a049;
      }
      @media (max-width: 600px) {
        .app-container {
          width: 95%;
          padding: 15px;
        }
      }
      h1 {
        color: grey;
        fontsize: 300%;

        fontfamily: Times New Roman;
        margin: 10px;
        margin-bottom: 20px;
        text-align: center;
      }
      p {
        color: purple;
        fontfamily: lato;
        background-color: gold;
        fontsize: 160%;
        margin: 10px;

      }

    
      form label {
        font-size: 1em;
        color: #555;
        margin-bottom: 5px;
        display: block;
      }
      form input[type="text"],
      form input[type="date"],
      form input[type="number"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 1em;
      }
      form button[type="submit"] {
        background-color: #007bff;
        color: white;
        padding: 12px 25px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.1em;
        transition: background-color 0.3s ease;
        display: block;
        margin-top: 20px;
      }
      form button[type="submit"]:hover {
        background-color: #0056b3;
      }
      @media (max-width: 600px) {
        h1 {
          font-size: 2em;
        }
        form label, form input, form button {
          font-size: 0.9em;
        }
      }
      .autocomplete-suggestions {
          border: 1px solid #ccc;
          max-height: 200px;
          overflow-y: auto;
          background-color: white;
          z-index: 100;
          position: absolute;
          width: 100%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-top: -15px;
          left: 0;
      }
      .autocomplete-suggestions div {
          padding: 8px 12px;
          cursor: pointer;
          border-bottom: 1px solid #eee;
      }
      .autocomplete-suggestions div:hover {
          background-color: #f0f0f0;
      }
      .autocomplete-suggestions div:last-child {
          border-bottom: none;
      }
  </style>`;
  console.log(
    "SIPOC Code: line 166\ndoGet(e: {func: " +
      e.parameter["func"] +
      ", args: " +
      e.parameter["args"] +
      "}) ",
  );
  return renderTemplate(
    `<html id="wallDoGet">
      <head>
        <base target="_self">
        <meta charset="utf-8">
        <meta name="Subscribe" content="Pro Media Snip">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
        <style>

            body {

              flex-grow: 1;
              color:blue;
              text-decoration:bold;
              flex-flow: row wrap;
              grid-column: 1;
              grid-row: 1;
              text-align: center;
              align-content: flex-start;
              overflow: auto;
            }
            .app-container {
              background-color: white;
              padding: 30px;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              width: 90%;
              max-width: 800px;
              margin-top: 20px;
              margin-bottom: 20px;
              position: relative;
            }
            nav {
              width: 100%;
              background-color: #4CAF50;
              padding: 15px 0;
              text-align: center;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              position: sticky;
              top: 0;
              z-index: 1000;
            }
            nav a {
              color: white !important;
              font-size: 1.2em;
              text-decoration: none;
              padding: 10px 20px;
              border-radius: 5px;
              transition: background-color 0.3s ease;
            }
            nav a:hover {
              background-color: #45a049;
            }
            @media (max-width: 600px) {
              .app-container {
                width: 95%;
                padding: 15px;
              }
            }
            h1 {
              font-size: 2.5em;
              color: #333;
              margin-bottom: 20px;
              text-align: center;
            }
            form label {
              font-size: 1em;
              color: #555;
              margin-bottom: 5px;
              display: block;
            }
            form input[type="text"],
            form input[type="date"],
            form input[type="number"] {
              width: 100%;
              padding: 10px;
              margin-bottom: 15px;
              border: 1px solid #ddd;
              border-radius: 5px;
              font-size: 1em;
            }
            form button[type="submit"] {
              background-color: #007bff;
              color: white;
              padding: 12px 25px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              font-size: 1.1em;
              transition: background-color 0.3s ease;
              display: block;
              margin-top: 20px;
            }
            form button[type="submit"]:hover {
              background-color: #0056b3;
            }
            @media (max-width: 600px) {
              h1 {
                font-size: 2em;
              }
              form label, form input, form button {
                font-size: 0.9em;
              }
            }
            .autocomplete-suggestions {
                border: 1px solid #ccc;
                max-height: 200px;
                overflow-y: auto;
                background-color: white;
                z-index: 100;
                position: absolute;
                width: 100%;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                margin-top: -15px;
                left: 0;
            }
            .autocomplete-suggestions div {
                padding: 8px 12px;
                cursor: pointer;
                border-bottom: 1px solid #eee;
            }
            .autocomplete-suggestions div:hover {
                background-color: #f0f0f0;
            }
            .autocomplete-suggestions div:last-child {
                border-bottom: none;
            }
      
            /* This is the most likely culprit based on your computed styles */
            /* Make the date numbers a dark color */
            .datepicker-day-button {
              color: #424242 !important; /* A dark gray. Using !important ensures it overrides Materialize defaults and your other styles. */
            }

            /* Consider other states for the datepicker buttons if needed */
            /* Example: If today's date also disappears */
            .datepicker-table td.is-today .datepicker-day-button {
                color: #ff9800 !important; /* Example: orange for today's date */
            }
            /* Example: If selected dates' numbers disappear (often they should be white on a colored background) */
            .datepicker-table td.is-selected .datepicker-day-button {
                color: white !important; /* Keep white if the selected background is dark */
            }


            /* --- SPECIFIC OVERRIDES FOR MATERIALIZE DATEPICKER --- */

            .datepicker-container table {
              /* Re-establish standard table display */
              display: table !important;
              width: 100% !important; /* Ensure it takes full width of its container */
              border-collapse: collapse !important; /* Standard table styling */
            }

            .datepicker-container thead {
              display: table-header-group !important;
            }

            .datepicker-container tbody {
              display: table-row-group !important;
            }

            .datepicker-container tr {
              display: table-row !important;
            }

            .datepicker-container th,
            .datepicker-container td {
              /* Re-establish table cell display */
              display: table-cell !important;
              /* Undo flex and reset padding/margin/border that your global rules removed */
              flex: none !important; /* Crucial to undo flex: 1 */
              padding: 0 !important; /* Materialize has its own padding for day buttons, often 0 for cell and padding on button */
              margin: 0 !important;
              border: none !important;
              vertical-align: middle !important; /* Standard for cells */
              text-align: center !important; /* Days of week and numbers are typically centered */
            }

            /* Also ensure the color fix is here with high specificity */
            .datepicker-container .datepicker-day-button {
              color: #424242 !important;
            }

            /* You may need to inspect Materialize's default CSS to fine-tune padding, line-height, etc.,
              as "all: unset" also removes these. This is why Strategy 1 is preferred. */
              

            /*
            IMPORTANT NOTE ON YOUR GLOBAL TABLE RESETS:
            You have:
            table, thead, tbody, tr, th, td {
              all: unset !important;
              display: block !important;
            }
            AND
            th, td {
              flex: 1 !important;
              padding: 0 !important;
              margin: 0 !important;
              border: none !important;
              vertical-align: top !important;
              text-align: left !important;
            }

            While the "color" fix above should work, these extremely aggressive table resets
            could cause other layout issues with the Materialize datepicker (which uses a table).
            If you encounter further layout problems (e.g., misalignment of days, weird spacing),
            you might need to make these table resets less global or more specific to *only* the tables
            you intend to radically change (like your .receipt table),
            and *not* apply them to the datepicker's internal table.
            For now, apply the color fix first, as it's the direct solution to the numbers being invisible.
            */

          
        </style>
      
        </head>
        <body>
          <div>
            <?!= subBlob ?>
          </div>
          <div id="eObject"><input type="text" id="pageObj" value=""></div>
          <div class="row"><div class="center app-container col s12 l12 m12 z-depth-5 card-panel push-m2 push-s2 push-l2"></div>
            <?!= renBlob ?>
          </div>
        </body>
          <script>
            function serverSide(func, args) {
              return new Promise((resolve, reject) => {
                google.script.run
                  .withSuccessHandler((result) => {
                    console.log("SIPOC Code: line 340\nserverSide success Process: " + result);
                    resolve(result); // result will be { type: "...", data: "..." }
                    // You would then process 'result' here to update specific parts of your current page
                    // For example, update a div with result.data if result.type is "text" or "html"
                  })
                  .withFailureHandler((error) => {
                    console.log("SIPOC Code: line 346\nserverSide failure Process: " + error);
                    reject(error);
                    console.error("Server-side call error:", error);
                    alert("Error during server call: " + error.message);
                  })
                  .runBoilerplate(func, args);
              });
            }
            const currentE = JSON.parse(<?= e ?>);
            const homePageUrl = <?= homePage ?>;

            console.log("Client-side: Initial doGet event object:", currentE);
            console.log("Client-side: Home Page URL:", homePageUrl);

            console.log("line 261");
            document.addEventListener("DOMContentLoaded", eRun);
            function eRun() {
              console.log("line 258");
              var objUrl = document.getElementById("pageObj");
              console.log("line 259");
              var objDiv = document.getElementById("eObject");
              console.log("line 260");
              let initialArgs = currentE.parameter["args"];
              if (initialArgs !== undefined && initialArgs !== null) {
                if (typeof initialArgs === 'object') {
                  objUrl.value = JSON.stringify(initialArgs, null, 2);
                } else {
                  objUrl.value = initialArgs; // If it's a string directly
                }
              } else {
                objUrl.value = '[""]'; // Default if args is missing
              }
              objUrl.addEventListener("change", function () {
                try {
                  // Parse the user's input as the new 'args' value
                  // Allow direct strings or JSON arrays/objects
                  let parsedE;
                  try {
                    parsedE = JSON.parse(this.value);
                  } catch (jsonError) {
                    // If it's not valid JSON, treat it as a plain string
                    parsedE = this.value;
                  }

                  // --- MODIFICATION STARTS HERE ---
                  // Create a *new*, reduced e object containing only func and args
                  const updatedClientE = {
                    parameter: {
                      func: currentE.parameter.func, // Keep the original func
                      args: parsedE                 // Use the new parsed args
                    }
                  };
                  // --- MODIFICATION ENDS HERE ---

                  alert("e.parameter['args'] updated. Sending back to server for re-render.");
                  console.log("Client-side: Updated e object to send:", updatedClientE);
                  async function handlePageUpdate() {
                    try {
                      const newHtmlContent = await serverSide(updatedClientE.parameter["func"], updatedClientE.parameter["args"]);
                      if (newHtmlContent && newHtmlContent.type === "html" && newHtmlContent.data) {
                        document.open();
                        document.write(newHtmlContent.data); // Use the data property
                        document.close();
                        console.log("Client-side: Page re-rendered with new content from server.");
                      } 
                      else if (newHtmlContent && newHtmlContent.type === "object" && newHtmlContent.data) {
                        document.open();
                        document.write(newHtmlContent.data.app); // Use the data property
                        document.close();
                        console.log("Client-side: Page re-rendered with new content from server.");
                      } 
                      else {
                        document.open();
                        document.write(newHtmlContent.data.dataStr);
                        document.close();
                        console.log("Client-side: Page re-rendered with new content from server.");
                      }
                    } catch (error) {
                      console.error("Client-side Error during full re-render:", error);
                      alert("Error re-rendering: " + error.message);
                    }
                  }
                  handlePageUpdate();
                } catch (error) {
                  alert("Error processing input. Please ensure it's valid JSON or a plain string.");
                  console.error("Input processing error:", error);
                }
              });
            }
          </script>
      </html>`,
    {
      renBlob: this[libName].contentApp(
        `<html id="wildSageBrush">
          <head>
            <base target="_self">
            <meta charset="utf-8">
            <meta name="doGet" content="Company get Function">
            <meta name=viewport content="width=device-width, initial-scale=1">
            <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
            <style>

                a:link, a:visited {color:metallic grey !important;
                                  font-size: 4.5em;}
                a:hover, a:active{ 
                  color:white  !important;
                  text-decoration:none  !important;}
                html, body {
                  height: 100%;
                }
                body: {
                  flex-grow: 1;
                  color:blue;
                  text-decoration:bold;
                  flex-flow: row wrap;
                  grid-column: 1;
                  grid-row: 1;
                  text-align: center;
                  align-content: flex-start;
                  overflow: auto;
                  color:metallic grey !important;
              
                  font-size: 4.5em;
                  margin-top: 10px;
                  flex: 0 0 60px;
                  justify-content: space-around;
                  align-items: center;
                  border: solid .5px;
                  border-radius: 10px;
                  margin: 0px 15px 5px 15px;
                  background-color: #ffc107;
                  display: flex;
                  flex-direction: column;
                  min-height: 100vh;
                  padding: 20px;}
              </style
          </head>
          <body class="z-depth-5 content-section responsive-section black center">
            <div id="coApp" class="container">
              <?!= /<[a-z][\s\S]*>/i.test(JSON.stringify(appL["app"]))? appL["app"]:appL["app"] ?>
            </div>
            <div class="row">
              <div class="col s10 l10 m10 z-depth-5 push-m2 push-s2 push-l2">
                <div class="app-container"> 
                    <iframe 
                      src=""
                      id="indexBeta"
                      width="100%"
                      height="100%"
                      allow="autoplay"
                      allow="encrypted-media"
                      title="Dontime Life Website"
                      frameborder="0"
                      allowfullscreen
                      ></iframe>
                </div>
              </div>
            </div>
            <script>
              var urlRegExString = "^https?://(?:www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$";
              console.log(urlRegExString)
              var urlRegEx = new RegExp(urlRegExString);
              console.log(urlRegEx)
              var apll = urlRegEx.test(<?= appL["index"]["url"] ?>);
              console.log(apll)
              var apValue = urlRegEx.test(<?= appL["app"] ?>);
              console.log(apValue)
              var lmValue = urlRegEx.test(<?= appL ?>);
              console.log(lmValue)
              if (apll === true) {
                document.getElementById("indexBeta").src = <?= appL["index"]["url"] ?>
              } else if (apValue === true) {
                document.getElementById("indexBeta").src = <?= appL["app"] ?>
              } else if (lmValue === true) {
               
                document.getElementById("indexBeta").src = <?= appL ?>
              }
              else {
                document.getElementById("indexBeta").src = "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"
              }
            </script>
          </body>
        </html> `,
        {
          appL: this[libName][
            foobarr ||
              HtmlService.createHtmlOutput(
                `<html id="foobarr">
                    <head>
                      <base target="_self">
                      <meta charset="utf-8">
                      <meta name="doGet" content="Company get Function">
                      <meta name=viewport content="width=device-width, initial-scale=1">
                      <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
                    </head>
                    <body>
                      <script>
                            document.getElementById("appList").value
                      </script>
                    </body>
                  </html>`,
              ).getContent()
          ].apply(this, [
            e.parameter["args"] || ["oldSEC", args] ||
              HtmlService.createHtmlOutput(
                `<html id="args">
                    <head>
                      <base target="_self">
                      <meta charset="utf-8">
                      <meta name="doGet" content="Company get Function">
                      <meta name=viewport content="width=device-width, initial-scale=1">
                      <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
                    </head>
                    <body>
                      <script>
                            document.getElementById("username").value
                      </script>
                    </body>
                  </html>`,
              ).getContent(),
          ]),
          debug: Logger.log(
            "appL " +
              JSON.stringify(
                this[libName][
                  foobarr ||
                    HtmlService.createHtmlOutput(
                      `<html id="foobarr">
                    <head>
                      <base target="_self">
                      <meta charset="utf-8">
                      <meta name="doGet" content="Company get Function">
                      <meta name=viewport content="width=device-width, initial-scale=1">
                      <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
                    </head>
                    <body>
                      <script>
                            document.getElementById("appList").value
                      </script>
                    </body>
                  </html>`,
                    ).getContent()
                ].apply(this, [
                  e.parameter["args"] || ["oldSEC", args] ||
                    HtmlService.createHtmlOutput(
                      `<html id="args">
                    <head>
                      <base target="_self">
                      <meta charset="utf-8">
                      <meta name="doGet" content="Company get Function">
                      <meta name=viewport content="width=device-width, initial-scale=1">
                      <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
                    </head>
                    <body>
                      <script>
                            document.getElementById("username").value
                      </script>
                    </body>
                  </html>`,
                    ).getContent(),
                ]),
              ),
          ),
        },
      ),
      subBlob: this[libName].contentApp(
        `<html id="Subscribe">
          <head>
            <base target="_self">
            <meta charset="utf-8">
            <meta name="Subscribe" content="ATL Budget Studio webapp">
            <meta name=viewport content="width=device-width, initial-scale=1">
            <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
            <style>

              a:link, a:visited {color:metallic grey !important;
                                font-size: 4.5em;}
              a:hover, a:active{ 
                color:white  !important;
                text-decoration:none  !important;}
              html, body {
                height: 100%;
              }
              body: {
                flex-grow: 1;
                color:blue;
                text-decoration:bold;
                flex-flow: row wrap;
                grid-column: 1;
                grid-row: 1;
                text-align: center;
                align-content: flex-start;
                overflow: auto;
                color:metallic grey !important;
            
                font-size: 4.5em;
                margin-top: 10px;
                flex: 0 0 60px;
                justify-content: space-around;
                align-items: center;
                border: solid .5px;
                border-radius: 10px;
                margin: 0px 15px 5px 15px;
                background-color: #ffc107;
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                padding: 20px;}
            </style>
          </head>
          <body class="z-depth-5 content-section responsive-section black center">
            <div class="container">
              <?!= subL ?>
            </div>
          </body>
        </html>`,
        {
          subL: template.evaluate().getContent(),
        },
      ),
      e: JSON.stringify(e),
      homePage: this[libName].getScriptUrl(),
    },
  );
};

function tempCodeX(e) {
  console.log(JSON.stringify(e));
  const randomKey = Math.floor(Math.random() * Math.floor(12000)); // Math.floor(Math.random())
  const uniqueKey = [
    Utilities.jsonParse(
      app.urlDataSource("https://www.sec.gov/files/company_tickers.json"),
    ),
  ]
    .entries()
    .next().value;
  const randomTitle = uniqueKey[1][randomKey]["title"];
  const html = app.contentApp(
    `<!DOCTYPE html>
      <html id="test">
        <head>
          <?!= styleHtml() ?>
        </head>
        <body class="green">
          <div><h1 class="blue receipt"><?!= myRandoms ?></h1></div>
          <div class="receipt red" id="vids">
            <?!= videoPlayer(myRandoms) ?>
          </div>
        </body>
      </html>`,
    { myRandoms: randomTitle },
  ); //Global object closed
  return app.renderTemplate(html);
} //webApp closed

function dontime() {
  webApp = HtmlService.createTemplateFromFile("index");
  return webApp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

var tempCodeY = function (e) {
  const Route = {};
  Route.path = function (route, callback) {
    Route[route] = callback;
  };
  Route.path("default", app.videoSEC);
  return Route["default"](e);
};

function runBoilerplate(func, args) {
  console.log(
    "SIPOC Code: line 621\nrunBoilerplate(func:" +
      func +
      ", args:" +
      args +
      ")\n " +
      arguments.callee.caller.name,
  );
  var libName = "app";
  // Check if maxTime exists as a global variable
  const timeRemaining =
    typeof functionRegistry.maxTime !== "undefined" &&
    functionRegistry.maxTime instanceof Date
      ? Math.floor(
          (functionRegistry.maxTime.getTime() -
            (new Date().getTime() % (1000 * 60))) /
            1000,
        ) // Use .getTime() for Date objects
      : "N/A"; // Provide a fallback if maxTime is not defined or not a Date

  console.log(
    `Time remaining: ${timeRemaining}` +
      `\nFunction: ${arguments.callee.name}` +
      `\nfunc: ${func}, args: ${JSON.stringify(args)}`,
  );
  try {
    // If 'foo' is still where your functions like 'mis' are, keep this line.
    // However, if your functions like 'mis' are also global (e.g., globalThis.mis),
    // then you might just call them directly or use `this[func]` if `this` refers to the global scope.
    // Based on the logs, 'mis' and 'yahooSort' seem to be global functions.
    let rawResult;
    if (typeof this[libName][func] === "function") {
      rawResult = this[libName][func].apply(this, args); // Call the global function
    } else {
      // Fallback or error if func is not found in globalThis
      throw new Error(
        `Function '${this[libName][func]}' not found in global scope.`,
      );
    }

    // ... (rest of your processing logic for rawResult)
    if (
      rawResult &&
      typeof rawResult.getContent === "function" &&
      typeof rawResult.setXFrameOptionsMode === "function"
    ) {
      return { type: "html", data: rawResult.getContent() };
    } else if (
      rawResult &&
      typeof rawResult.getResponseCode === "function" &&
      typeof rawResult.getContentText === "function"
    ) {
      const contentType = rawResult.getHeaders()["Content-Type"] || "";
      const responseText = rawResult.getContentText();
      if (contentType.includes("application/json")) {
        try {
          return { type: "jsonData", data: JSON.parse(responseText) };
        } catch (e) {
          return {
            type: "text",
            data: `Error parsing JSON from URL fetch: ${responseText}`,
          };
        }
      } else if (contentType.includes("text/html")) {
        return { type: "html", data: responseText };
      } else {
        return { type: "text", data: responseText };
      }
    } else if (typeof rawResult === "string") {
      try {
        const parsedJson = JSON.parse(rawResult);
        return { type: "jsonData", data: parsedJson };
      } catch (jsonError) {
        if (
          rawResult.trim().startsWith("<") &&
          rawResult.trim().endsWith(">")
        ) {
          return { type: "html", data: rawResult };
        } else {
          return { type: "text", data: rawResult };
        }
      }
    } else if (typeof rawResult === "object" && rawResult !== null) {
      if (rawResult.html) {
        return { type: "html", data: rawResult.html };
      }
      if (rawResult.url) {
        return { type: "url", data: rawResult.url };
      }
      return { type: "object", data: rawResult };
    } else {
      return { type: "unknown", data: rawResult };
    }
  } catch (error) {
    Logger.log("Error in " + func + ": " + error.message);
    throw new Error(`Server error in ${func}: ${error.message}`);
  }
}

var runAll = function (func, args) {
  var arr = func.split(".");
  var libName = arr[0];
  var libFunc = arr[1];
  args = args || [];
  return this[libName][libFunc].apply(this, args);
};
