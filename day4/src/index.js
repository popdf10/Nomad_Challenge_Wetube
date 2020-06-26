import express from "express";

const app = express();

const handleHome = (req, res) => res.send("Home");

const handleAboutUs = (req, res) => res.send("About Us");

const handleContact = (req, res) => res.send("Contact");

const handleProtected = (req, res) => res.send("Protected");

const middleWare = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

const protectedMiddleWare = (req, res) => {
  console.log("I'm a middleware");
  res.redirect("/");
};

app.get("/", middleWare, handleHome);
app.get("/about-us", middleWare, handleAboutUs);
app.get("/contact", middleWare, handleContact);
app.get("/protected", protectedMiddleWare, handleProtected);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
