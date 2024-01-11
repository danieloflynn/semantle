const express = require("express");
const router = express.Router();
const {
  getNewSemantle,
  getHint,
  getClosest,
  getSemantleWord,
  getSemantle,
  createSemantle,
  deleteSemantle,
  updateSemantle,
} = require("../controllers/semantleController");

// Get a word
router.get("/", getNewSemantle);

// Get a hint
router.get("/:id/getHint", getHint);

// Get 100 closest
router.get("/:id/getClosest", getClosest);

// Get a word similarity
router.get("/:id/:word", getSemantleWord);

// Get a word similarity
router.get("/:id", getSemantle);

// Post a semantle
router.post("/", createSemantle);

// Delete a semantle
router.delete("/:id", deleteSemantle);

// Update a semantle
router.patch("/:id", updateSemantle);

module.exports = router;
