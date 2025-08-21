const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("addhome", {
    pageTitle: "Registration",
    headerTitle: "Add your detail",
  });
};

exports.postAddHomes = (req, res, next) => {
  console.log(
    "Home Registration successful for : ",
    req.body,
    req.body.house
  );

  const { house, price, location, rating, photoURL } = req.body; 
  const home = new Home(house, price, location, rating, photoURL);
  
  home.save();

  res.render("homeadded", {
    pageTitle: "Home Added Successfully",
    currentPage: "homeadded",
  });
};

exports.getHomes = (req, res, next) => {
  const homes = Home.fetchAll();
  res.render("home", {
    registeredHomes: homes,
    pageTitle: "airbnb Home",
  });
};
