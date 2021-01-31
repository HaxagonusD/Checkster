const express = require("express");
const fileUpload = require("express-fileupload");
const extractData = require("./helpers/extractData");
const app = express();
// app.use(cors());
app.use(fileUpload());

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

app.listen(5000, () => {
  console.log("Listening on post 5000");
});
