const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
app.use(cors());
app.use(fileUpload());

/// Upload Endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No File uploaded" });
  }
  const file = req.files.file;
  //// file dir
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/upload/${fileName}` });
  });
});

app.listen(5000, () => {
  console.log("Listening on post 5000");
});
