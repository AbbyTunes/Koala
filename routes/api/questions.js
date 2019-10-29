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
		.populate({
			path: 'authorId',
			select: 'firstName lastName'
		})
		.populate({
			path: 'editorIds',
			select: 'firstName lastName'
		})
		.populate({
			path: 'answerIds',
			select: 'author'
		})
		.sort({ date: -1 })
		.then(questions => res.json(questions))
		.catch(err => res.status(404).json({ question: "No questions found" }));
		// not showing the errors when no questions 
});

// find by question id
router.get("/:question_id", (req, res) => {
	Question.findById(req.params.question_id)
		.populate({
			path: 'authorId',
			select: 'firstName lastName'
		})
		.populate({
			path: 'editorIds',
			select: 'firstName lastName'
		})
		.populate({
			path: 'answerIds',
			select: 'author'
		})
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


// // delete a question
// router.delete("/:question_id", passport.authenticate('jwt', { session: false }), (req, res) => {
	
// 	Answer.collection.deleteMany({ "questionId": {"$eq" :req.params.question_id}}); 
// //	db.answers.deleteMany({ "questionId": req.params.question_id })

// 	Question.findByIdAndRemove(req.params.question_id, err => {
// 		if (err) res.send(err);
// 		else res.json({ question: "the question has been deleted" });
// 	});
// });


//// Answers Routes

// show all answers for a particular question
router.get('/:question_id/answers', (req, res) => {
	// Answer.find({ question: { id: req.params.question_id } })
	Answer.find({ question: req.params.question_id })
		.populate({
			path: 'question',
			select: 'title'
		})
		.populate({
			path: 'author',
			select: 'firstName lastName'
		})
		.sort({ date: -1 })
		.then(answers => res.json(answers))
		.catch(err => res.status(404).json({ answers: "No answers for this question.. yet!" }));
		// will not show errors when no answers; shows empty array
});

// post an answer to a particular question
router.post('/:question_id/answers',
	passport.authenticate('jwt', { session: false }), (req, res) => {
		const newAnswer = new Answer({
			author: req.user.id,
			question: req.params.question_id,
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