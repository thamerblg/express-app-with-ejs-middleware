const express = require("express");
const app = express();

var requestTime = function (req, res, next) {
  let time = new Date();
  let day = time.getDay();
  let hour = time.getHours();
  day >= 1 && day <= 5 && hour >= 8 && hour <= 17
    ? next()
    : console.log("The web application is not available now");
};

app.use(requestTime);

// register view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "home page" });
});
app.get("/services", (req, res) => {
  res.render("services", { title: "Services page" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact page" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404 page" });
});

// listen for requests
app.listen(5000);
