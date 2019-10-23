const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const passport = require('passport');

const Question = require('../../models/Question');

//http://localhost:5000/api/questions/test
router.get("/test", (req, res) => res.json({ question: "Question Route" }));

// show all questions
router.get("/", (req, res) => {
	Question.find()
		.sort({ date: -1 })
		.then(questions => res.json(questions))
		.catch(err => res.status(404).json({ question: "No questions found" }));
		// not showing the errors when no questions 
});

// find by question id
router.get("/:question_id", (req, res) => {
	Question.findById(req.params.question_id)
		.then(question => res.json(question))
		.catch(err =>
			res.status(404).json({ question: "No question found with that ID" })
		);
});

// post a question
router.post('/',
	passport.authenticate('jwt', { session: false }), (req, res) => {
		const newQuestion = new Question({
			authorId: req.user.id,
			title: req.body.title,
			description: req.body.description
			// topics: 
		});
		newQuestion
			.save()
			.then(question => res.json(question))
			.catch(err => {
				res.status(400).json({ question: "adding new question failed" });
			});
	});

// edit a question

router.patch("/:question_id", passport.authenticate('jwt', { session: false }), (req, res) => {
	Question.findOneAndUpdate({ _id: req.params.question_id },
		{
			$set:
			{
				title: req.body.title,
				description: req.body.description
			}
		}).then(question => res.json(question))
		.catch(err => {
			// err.status(400).send('updating question failed');
			res.status(400).json({ question: "updating question failed" })
		});
});


// delete a question
router.delete("/:question_id", passport.authenticate('jwt', { session: false }), (req, res) => {
	Question.findByIdAndRemove(req.params.question_id, err => {
		if (err) res.send(err);
		else res.json({ question: "the question has been deleted" });
	});
});

module.exports = router;