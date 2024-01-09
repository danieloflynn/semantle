const express = require("express");
const router = express.Router();
const {
  getSemantle,
  getWordSimilarity,
  createSemantle,
  deleteSemantle,
  updateSemantle,
} = require("../controllers/semantleController");

// Get a word
router.get("/", getSemantle);

// Get a word similarity
router.get("/:id", getWordSimilarity);

// Post a word
router.post("/", createSemantle);

// Delete a word
router.delete("/:id", deleteSemantle);

// Update a word
router.patch("/:id", updateSemantle);

module.exports = router;
