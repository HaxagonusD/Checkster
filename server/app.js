const express = require("express");
// const fileUpload = require("express-fileupload");
const extractData = require("./helpers/extractData");
// const fs = require("fs");
const app = express();
const cors = require("cors");
app.use(cors());
// app.use(fileUpload());

// Upload Endpoint
app.get("/results/:name", (req, res) => {
  if (!req.files) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  const newLocation = `${__dirname}/uploads/${file.name}`;

  file.mv(newLocation, (err) => {
    console.log("/results", __dirname);
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    (async () => {
      let data = await extractData(newLocation);
      console.log("Extracted data is here", data);
      res.json({
        fileName: file.name,
        extractedData: data,
      });
    })();
  });
});

app.get("/test", (req, res) => {
  res.send("Firebase Works in test now fix /results");
});

app.listen(5000, () => {
  console.log("Listening on post 5000");
});
module.exports = app;
