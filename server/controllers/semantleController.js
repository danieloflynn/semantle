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
  res.status(200).json();
};

// Create a semantle
const createSemantle = async (req, res) => {};

// Delete a semantle
const deleteSemantle = async (req, res) => {};

// Update a semantle
const updateSemantle = async (req, res) => {};

module.exports = {
  getSemantle,
  getWordSimilarity,
  createSemantle,
  deleteSemantle,
  updateSemantle,
};
