const express = require("express");
const dotenv = require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const app = express();

app.use(contactRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on ${port}`));
