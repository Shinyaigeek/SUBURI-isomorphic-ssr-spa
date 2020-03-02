const React = require("react");
const express = require("express");
const { renderToNodeStream, renderToString } = require("react-dom/server");
const App = require("../dist/main");

const app = express();

app.use(express.static("dist"))

const helmet = tar => `
<html>
<head></head>
<body>
  <div id="aiueo">
  ${tar}
  </div>
  <script src="./client.js"></script>
</html>
`;

app.get("/", (req, res) => {
  console.log("Request Called !! /");

  const html = renderToString(React.createElement(App.default));
  res.send(helmet(html));
});

app.get("/about", (req, res) => {
    console.log("Request Called !! /about");
  
    const html = renderToString(React.createElement(App.default));
    res.send(helmet(html));
  });

app.listen(3000);
