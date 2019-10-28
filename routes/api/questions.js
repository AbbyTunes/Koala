const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const passport = require('passport');

const Question = require('../../models/Question');
const Answer = require('../../models/Answer');

//// Questions Routes

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
		.populate("answerIds")
		.populate("authorId")
		.populate("editorIds")
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
			title: req.body.title
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
			$set: {
				title: req.body.title
			},
			$push: {
				editorIds: req.user._id,
				updateDate: Date.now()
			}
		},
        { new: true }
        ).then(question => {
			res.json(question)})
		.catch(err => {
			res.status(400).json({ question: "updating question failed" })
		});
});


// delete a question
router.delete("/:question_id", passport.authenticate('jwt', { session: false }), (req, res) => {
	Answer.deleteMany({ questionId: req.params.question_id })
	Question.findByIdAndRemove(req.params.question_id, err => {
		if (err) res.send(err);
		else res.json({ question: "the question has been deleted" });
	});
});


//// Answers Routes

// show all answers for a particular question
router.get('/:question_id/answers', (req, res) => {
	Answer.find({ questionId: req.params.question_id })
		.sort({ date: -1 })
		.then(answers => res.json(answers))
		.catch(err => res.status(404).json({ answers: "No answers for this question.. yet!" }));
		// will not show errors when no answers; shows empty array
});

// post an answer to a particular question
router.post('/:question_id/answers',
	passport.authenticate('jwt', { session: false }), (req, res) => {
		const newAnswer = new Answer({
			authorId: req.user.id,
			questionId: req.params.question_id,
			upvote: 0,
			downvote: 0,
			description: req.body.description
			// comments:
		});
		newAnswer
			.save()
			.then(answer => res.json(answer))
			.catch(err => {
				res.status(400).json({ answer: 'failed to answer question' });
			});
	}
);


module.exports = router;