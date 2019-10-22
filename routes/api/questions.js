const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
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


// show currentUser's own questions
router.get('/my-questions', passport.authenticate('jwt', { session: false }), (req, res) => {
	Question.find({ authorId: req.user.id })
		.populate("question")
		.then(questions => res.json(questions))
		.catch(err =>
			res.status(404).json({ question: "You have no questions yet" })
		);
});

// post a question
router.post('/',
	passport.authenticate('jwt', { session: false }), (req, res) => {
		const newQuestion = new Question({
			authorId: req.user.id,
			title: req.body.title,
			description: req.body.description
		});
		newQuestion
			.save()
			.then(question => res.json(question))
			.catch(err => {
				res.status(400).send('adding new question failed');
			});
	});

// edit a question

router.patch("/:question_id", (req, res) => {
	Question.findOneAndUpdate({ _id: req.params.question_id },
		{
			$set:
			{
				title: req.body.title,
				description: req.body.description
			}
		}).then(question => console.log(question))
});


// delete a question
router.delete("/:question_id", passport.authenticate('jwt', { session: false }), (req, res) => {
	Question.findByIdAndRemove(req.params.question_id, err => {
		if (err) res.send(err);
		else res.json({ question: "the question has been deleted" });
	});
});

module.exports = router;