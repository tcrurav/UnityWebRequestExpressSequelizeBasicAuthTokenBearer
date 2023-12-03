module.exports = app => {
  const bicycles = require("../controllers/bicycle.controller");
  const auth = require("../controllers/auth");

  var router = require("express").Router();

  // Create a new Bicycle
  router.post("/", auth.isAuthenticated, bicycles.create);

  // Retrieve all Bicycles
  router.get("/", auth.isAuthenticated, bicycles.findAll);

  // Retrieve a single Bicycle with id
  router.get("/:id", auth.isAuthenticated, bicycles.findOne);

  // Update a Bicycle with id
  router.put("/:id", auth.isAuthenticated, bicycles.update);

  // Delete a Bicycle with id
  router.delete("/:id", auth.isAuthenticated, bicycles.delete);

  app.use("/api/bicycles", router);
}