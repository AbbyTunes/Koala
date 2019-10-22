const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const passport = require('passport');

const users = require("./routes/api/users");
const bodyParser = require('body-parser');

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

// app.get("/", (req, res) => res.send("test"))

app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to port ${port}`))