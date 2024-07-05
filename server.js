const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("HELLO JI");
});

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on ${port}`));
