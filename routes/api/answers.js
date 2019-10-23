const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Answer = require('../../models/Answer');

router.get("/test", (req, res) => res.json({ answer: "Answers Route" }));

// find by answer_id
router.get("/:answer_id", (req, res) => {
  Answer.findById(req.params.answer_id)
    .then(answer => res.json(answer))
    .catch(err =>
      res.status(404).json({ answer: "No answer found with that ID" })
    );
});


module.exports = router;