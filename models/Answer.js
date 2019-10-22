const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
	authorId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	questionId: {
		type: Schema.Types.ObjectId,
		ref: 'Question'
	},
	upvote: {
		type: Integer
	},
	downvote: {
		type: Integer
	},
	body: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = Answer = mongoose.model('Answer', AnswerSchema);

	// comments: [{
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'Comment'
	// }]

	// votes, authorId