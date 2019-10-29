const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Answer = require('../../models/Answer');

router.get('/test', (req, res) => res.json({ answer: 'Answers Route' }));

// find by answer_id
router.get('/:answer_id', (req, res) => {
	Answer.findById(req.params.answer_id)
    .populate({
      path: 'question',
      select: 'title'
    })
    .populate({
      path: 'author',
      select: 'firstName lastName'
    })
    .then(answer => res.json(answer))
    .catch(err =>
      res.status(404).json({ answer: 'No answer found with that ID' })
    );
});

// edit an answer
router.patch('/:answer_id',
  passport.authenticate('jwt', { session: false }), (req, res) => {
    Answer.findOneAndUpdate({ _id: req.params.answer_id },
    {
      $set: {
        upvote: req.body.upvote,
        downvote: req.body.downvote,
        voters: req.body.voters,
        description: req.body.description
      }
    },
    { new: true }
    ).then(answer => res.json(answer))
    .catch(err => {
      res.status(400).json({ answer: 'failed to update answer' })
    });
  }
);

// delete an answer
router.delete('/:answer_id',
  passport.authenticate('jwt', { session: false }), (req, res) => {
    Answer.findByIdAndRemove(req.params.answer_id)
      .then(answer => {
        Question.findOneAndUpdate({ _id: answer.question._id },
          { $pull: { answerIds: answer._id } },
          { new: true }
        ).then(question => res.json(answer));
      })
      .catch(err => {
        res.status(400).json({ answer: 'could not find answer' })
      });
  }
);

// delete all answers
router.delete('/',
  passport.authenticate('jwt', { session: false }), (req, res) => {
    Answer.collection.deleteMany({});
  }
)

module.exports = router;