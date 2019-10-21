const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
// user test
router.get("/test", (req, res) => res.json({ msg: "User Route"}));

router.post('/register', (req, res) => {
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
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

router.post('/login', (req, res) => {
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
						res.json({ msg: 'Successfully logged in'});
					} else {
						return res.status(400).json({ password: 'Incorrect password'});
					}
				})
		})
})

module.exports = router;