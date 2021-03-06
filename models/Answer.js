const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	question: {
		type: Schema.Types.ObjectId,
		ref: 'Question'
	},
	upvote: {
		type: Number
	},
	downvote: {
		type: Number
	},
	voters: {
		type: Array
	},
	description: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = Answer = mongoose.model('Answer', AnswerSchema);
