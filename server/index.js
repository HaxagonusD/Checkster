const express = require("express");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(" hey im here ");
});
app.get("/", function (req, res, next) {
  console.log(res);
});

app.listen(5000, () => {
  console.log("Listening on post 5000");
});
