const Semantle = require("../models/semantleModel");
const mongoose = require("mongoose");

// Get a random semantle
const getNewSemantle = async (req, res) => {
  try {
    const word = await Semantle.aggregate([{ $sample: { size: 1 } }]);
    res.redirect("/api/" + word[0]._id.toString());
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// Get a hint
const getHint = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid) {
    return res.status(404).json({ error: "Could not find semantle" });
  }
  try {
    const word = await Semantle.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      { $unwind: { path: "$similarities" } },
      { $match: { "similarities.rank": { $lt: 100 } } },
      { $sample: { size: 1 } },
    ]);

    // Unpack into a response
    const response = {
      valid: true,
      simWord: word[0].similarities.simWord,
      rank: word[0].similarities.rank,
      similarity: word[0].similarities.similarity,
    };

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Could not get hint" });
  }
};

// Get closest words
const getClosest = async (req, res) => {
  const { id } = req.params;

  // Check that query param c is present and valid int
  let closeNum;
  try {
    closeNum = parseInt(req.query.c);
  } catch (e) {
    return res.status(400).json({ error: "Invalid query parameter" });
  }

  // Check that id is valid
  if (!mongoose.Types.ObjectId.isValid) {
    return res.status(404).json({ error: "Could not find semantle" });
  }

  try {
    const word = await Semantle.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      { $unwind: { path: "$similarities" } },
      { $match: { "similarities.rank": { $lt: closeNum } } },
    ]);

    // Unpack into a response
    const response = word.map((word) => {
      return {
        valid: true,
        simWord: word.similarities.simWord,
        rank: word.similarities.rank,
        similarity: word.similarities.similarity,
      };
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Check word similarity for a semantle
const getSemantleWord = async (req, res) => {
  const { id, word } = req.params;
  if (!mongoose.Types.ObjectId.isValid) {
    return res.status(404).json({ error: "Could not find semantle" });
  }

  try {
    // Return just the similarity part to reduce size of the response
    const similarity = await Semantle.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      { $unwind: { path: "$similarities" } },
      { $match: { "similarities.simWord": word } },
    ]);

    let response;
    // If not empty, valid word
    if (similarity.length > 0) {
      // Unpack into a response
      response = {
        valid: true,
        simWord: similarity[0].similarities.simWord,
        rank: similarity[0].similarities.rank,
        similarity: similarity[0].similarities.similarity,
      };
    } else {
      response = {
        valid: false,
        simWord: null,
        rank: null,
        similarity: null,
      };
    }

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get a semantle by id
const getSemantle = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Could not find semantle" });
  }
  try {
    const semantle = await Semantle.findOne({ _id: id }).select(
      "-similarities"
    );
    res.status(200).json(semantle);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a semantle
const createSemantle = async (req, res) => {
  try {
    const { word, similarities } = req.body;
    const semantle = await Semantle.create({ word, similarities });
    res.status(200).json(semantle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a semantle
const deleteSemantle = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Could not find semantle" });
  }
  const semantle = await Semantle.findByIdAndDelete(id);

  if (!semantle) {
    return res.status(400).json({ error: "No such semantle" });
  }
  res.status(200).json(semantle);
};

// Update a semantle
const updateSemantle = async (req, res) => {
  res.status(500).json({ error: "Update router has not been added yet" });
};

module.exports = {
  getNewSemantle,
  getHint,
  getClosest,
  getSemantleWord,
  getSemantle,
  createSemantle,
  deleteSemantle,
  updateSemantle,
};
