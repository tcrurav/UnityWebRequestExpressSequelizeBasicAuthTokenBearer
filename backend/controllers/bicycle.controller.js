const db = require("../models");
const Bicycle = db.bicycles;
const Op = db.Sequelize.Op;

// Create and Save a new Bicycle
exports.create = (req, res) => {
  // Validate request
  if (!req.body.brand) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Bicycle
  const bicycle = {
    brand: req.body.brand,
    model: req.body.model
  }

  // Save Bicycle in the database
  Bicycle.create(bicycle).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the bicycle"
    })
  });
};

// Retrieve all Bicycles from the database.
exports.findAll = (req, res) => {
  Bicycle.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Bicycles"
    })
  })
};

// Find a single Bicycle with an id
exports.findOne = (req, res) => {

}

// Update a Bicycle by the id in the request
exports.update = (req, res) => {
  // Validate request
  if (!req.body.brand || !req.params.id) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Bicycle object
  const bicycle = {
    brand: req.body.brand,
    model: req.body.model
  }

  // Save Bicycle in the database
  Bicycle.update(bicycle, { where: { id: req.params.id } }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || `Some error occurred while updating the bicycle with id=${req.params.id}`
    })
  });
};

// Delete a Bicycle with the specified id in the request
exports.delete = (req, res) => {
  console.log("llegó al delete")
  console.log(req.params.id)
  if (!req.params.id) {
    res.status(400).send({
      message: "Id cannot be empty!"
    });
  }

  Bicycle.destroy({ where: { id: req.params.id } }).then(() => {
    res.status(200).send({
      message: "Bicycle deleted!"
    });
  }).catch(err => {
    res.status(500).send({
      message: err.message || `Some error occurred while deleting the bicycle with id=${req.params.id}`
    });
  });
}
