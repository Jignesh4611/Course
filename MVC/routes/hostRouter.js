const path = require("path");

const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtil");
const homesController = require("../controllers/homes");
hostRouter.get("/add-home", homesController.getAddHome);
hostRouter.post("/add-home", homesController.postAddHomes);
exports.hostRouter = hostRouter;
