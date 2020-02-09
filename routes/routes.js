/**
 * module dependencies for routes configuration
 */
const path = require("path");
const express = require("express");

const userAPI = require("../controllers/user/api");
const forumAPI = require("../controllers/forum/api");
const discussionAPI = require("../controllers/discussion/api");
const opinionAPI = require("../controllers/opinion/api");
const adminAPI = require("../controllers/admin/api");

/**
 * routes configurations
 */
const routesConfig = app => {
  // serves static files from public directory
  // const publicPath = path.resolve(__dirname, "../public");
  // app.use(express.static(publicPath));

  // serve api endpoint
  app.get("/api", (req, res) => {
    res.send("Hello from API endpoint");
  });

  // apply user apis
  userAPI(app);

  // apply forum apis
  forumAPI(app);

  // apply discussion apis
  discussionAPI(app);

  // apply opinion apis
  opinionAPI(app);

  // apply admin apis
  adminAPI(app);

  // all get request will send index.html for react-router
  // to handle the route request
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "../public", "index.html"));
  // });
};

module.exports = routesConfig;