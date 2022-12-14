const express = require("express");
const app = express();
app.use(express.static(__dirname + "/dist/router-angular"));

// add api endpoints here << if any >>
// ....

app.all("*", (req, res) => {
  res.status(200).sendFile(__dirname + "/dist/router-angular/index.html");
});

app.listen(process.env.PORT || 8080);
