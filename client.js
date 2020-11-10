const express= require("express");
const app=express();
app.use(express.static("images"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Home.html");
})

app.get("/Bus.html", (req, res) => {
res.sendFile(__dirname + "/Bus.html");
})

app.get("/login.html", (req, res) => {
    res.sendFile(__dirname + "/login.html");
  })

  app.get("/cs.html", (req, res) => {
    res.sendFile(__dirname + "/cs.html");
  })
  app.listen(1239, () => {
    console.log("WELCOME - CLIENT IS RUNNING AT 1239....");
  })