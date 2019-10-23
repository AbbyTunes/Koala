const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/keys').mongoURI;
const passport = require('passport');

const users = require("./routes/api/users");
const questions = require("./routes/api/questions");
const answers = require('./routes/api/answers');
const bodyParser = require('body-parser');

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.use("/api/users", users);
app.use("/api/questions", questions);
app.use('/api/answers', answers);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to port ${port}`))