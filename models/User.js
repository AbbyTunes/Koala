const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	questions: [{
		type: Schema.Types.ObjectId,
		ref: 'Question'
	}],
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = User = mongoose.model('User', UserSchema);