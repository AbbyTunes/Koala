const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
	authorId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	editorId: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	title: {
		type: String,
		required: true
	},
	createDate: {
		type: Date,
		default: Date.now
	},
	updateDate: [{
		type: Date
	}]
})



module.exports = Question = mongoose.model('Question', QuestionSchema);

	// topics: [{ 
	// 	type: Schema.Types.ObjectId, 
	// 	ref: 'Topic' 
	// }],