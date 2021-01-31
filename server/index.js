const express = require("express");
const fileUpload = require("express-fileupload");
const extractData = require("./helpers/extractData");
const fs = require("fs");
const app = express();
const morgan = require("morgan");
// app.use(cors());
app.use(fileUpload());
app.use(morgan("tiny"));

// Upload Endpoint
app.post("/results", (req, res) => {
  if (!req.files) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  const newLocation = `${__dirname}/uploads/${file.name}`;

  file.mv(newLocation, (err) => {
    console.log(__dirname);
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({
      fileName: file.name,
      filePath: `/uploads/${file.name}`,
      data: extractData(newLocation),
    });
  });
});

app.get("/file/:name", async (req, res) => {
  const path = `${__dirname}/uploads/${req.params.name}`;
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(err);
      return res.status(404).send("Not Found!");
    }
    //file exists
    res.sendFile(path);
  });
});

app.listen(5000, () => {
  console.log("Listening on post 5000");
});
