const Semantle = require("../models/semantleModel");
const mongoose = require("mongoose");

// Get a word
const getSemantle = async (req, res) => {
  try {
    const word = await Semantle.collection("semantle")
      .aggregate.sample(1)
      .select("-similarity");
    res.redirect("/" + word._id);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// get a similarity
const getWordSimilarity = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Could not find semantle" });
  }
  const semantle = Semantle.collection("semantle")
    .findOne({ _id: id })
    .select("-similarity");
  res.status(200).json(semantle);
};

// Create a semantle
const createSemantle = async (req, res) => {
  try {
    const semantle = await Semantle.create(req.body);
    res.status(200).json(semantle);
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a semantle
const deleteSemantle = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Could not find workout" });
  }
  const semantle = await Semantle.findByIdAndDelete(id);

  if (!semantle) {
    return res.status(400).json({ error: "No such workout" });
  }
  res.status(200).json(semantle);
};

// Update a semantle
const updateSemantle = async (req, res) => {
  console.log("Update router has not been added yet");
};

module.exports = {
  getSemantle,
  getWordSimilarity,
  createSemantle,
  deleteSemantle,
  updateSemantle,
};
