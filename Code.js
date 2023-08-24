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

function doGet(e) {
  var foobarr = e.parameter["func"] || "app.dtlsInvestor";
  var arr = [foobarr].toString().split(".");
  var libName = arr[0];
  var libFunc = arr[1];
  args = [e.parameter["args"]] || [
    "bing.com",
    null,
    { muteHttpExceptions: true },
  ];
  return app.renderTemplate(
    app.contentApp(this[libName][libFunc].apply(this, args)),
    { e: e },
  );
}

var runAll = function (func, args) {
  var arr = func.split(".");
  var libName = arr[0];
  var libFunc = arr[1];
  args = args || [];
  return this[libName][libFunc].apply(this, args);
};
