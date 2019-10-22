const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
	authorId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	title: {
		type: String,
		required: true
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

module.exports = Question = mongoose.model('Question', QuestionSchema);

	// topics: [{ 
	// 	type: Schema.Types.ObjectId, 
	// 	ref: 'Topic' 
	// }],