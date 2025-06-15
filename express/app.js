// app.js
const express = require("express");
const app = express();
const newMessage = require("./routes/newMessage");
const path = require("node:path");
const { loadMessages } = require("./db");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// app.js

app.use(express.urlencoded({extended:true}))
app.get("/", (req, res) => {
  const messages = loadMessages(); // load from file each time
  res.render("index", { messages });
});

app.use("/new", newMessage);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});