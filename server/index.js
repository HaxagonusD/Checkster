const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
// app.use(cors());
app.use(fileUpload());

// Upload Endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/uploads/${file.name}`, (err) => {
    console.log(__dirname);
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(5000, () => {
  console.log("Listening on post 5000");
});
