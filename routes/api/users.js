const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const passport = require('passport');

const User = require('../../models/User');
const Question = require('../../models/Question');
const Answer = require('../../models/Answer');

router.get("/test", (req, res) => res.json({ msg: "User Route" }));

// show all users
router.get('/', (req, res) => {
	User.find()
		.sort({ date: -1 })
		.then(users => res.json(users.map(user => ({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            questions: user.questions
        }))))
		.catch(err => res.status(404).json({ question: "No users found" }));
	// not showing the errors when no users 
});

// find by user id
router.get('/:user_id', (req, res) => {
	User.findById(req.params.user_id)
		.then(user => res.json({
			id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			questions: user.questions
		}))
		.catch(err =>
			res.status(404).json({ user: "No user found with that ID" })
		);
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        firstName: req.user.firstName,
		lastName: req.user.lastName,
		email: req.user.email,
		questions: req.user.questions
    });
})

router.post('/register', (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({ email: req.body.email })
		.then(user => {
			if (user) {
				return res.status(400).json({ email: 'An account with these credentials already exists.' });
			} else {
				const newUser = new User({
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					email: req.body.email,
					password: req.body.password
				})

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;
						newUser.save()
							// .then(user => res.json(user))
							.then(user => {
								const payload = { id: user.id, firstName: user.firstName, lastName: user.lastName };
								
								jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
									res.json({
										success: true,
										token: 'Bearer ' + token
									});
								});
							})
							.catch(err => console.log(err));
					});
				});
			}
		});
});

router.post('/login', (req, res) => {

	const { errors, isValid } = validateLoginInput(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const password = req.body.password;

	User.findOne({email})
		.then(user => {
			if (!user) {
				return res.status(404).json({ email: "this user doesn't exist "});
			}

			bcrypt.compare(password, user.password)
				.then(isMatch => {
					if (isMatch) {
						// res.json({ msg: 'Successfully logged in'});
						const payload = {id: user.id, firstName: user.firstName, lastName: user.lastName};

						jwt.sign(
							payload,
							keys.secretOrKey,
							{expiresIn: 3600},
							(err, token) => {
								res.json({
									success: true,
									token: 'Bearer ' + token
								});
							}
						);
					} else {
						return res.status(400).json({ password: 'Incorrect password'});
					}
				})
		})
})

// show questions by currentUser

// correct
router.get('/current/questions', passport.authenticate('jwt', { session: false }), (req, res) => {
	Question.find({ authorId: req.user._id})
		.populate("questions")
		.then(questions => res.json(questions))
		.catch(err =>
			res.status(404).json({ question: "You have no questions yet" })
		);
});

// show answers by currentUser
router.get('/current/answers', passport.authenticate('jwt', { session: false }), (req, res) => {
	Answer.find({ author: req.user._id })
		.populate({
			path: 'question',
			select: 'title'
		})
		.populate({
			path: 'author',
			select: 'firstName lastName'
		})
		.then(answers => res.json(answers))
		.catch(err =>
			res.status(404).json({ question: "You have no answers yet" })
		);
});

// show questions by a specific user

router.get('/:user_id/questions', (req, res) => {
	Question.find({ authorId: req.params.user_id })
		.then(questions => res.json(questions))
		.catch(err =>
			res.status(404).json({ question: 'This user has no questions' })
		);
});

// show answers by specific user
router.get('/:user_id/answers', (req, res) => {
	Answer.find({ author: req.params.user_id })
		.populate({
			path: 'question',
			select: 'title'
		})
		.populate({
			path: 'author',
			select: 'firstName lastName'
		})
		.then(answers => res.json(answers))
		.catch(err =>
			res.status(404).json({ question: 'This user has no answers' })
		);
});

module.exports = router;