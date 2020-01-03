const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  answerIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Answer"
    }
  ],
  editorIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image_url: {
    type: String,
    required: false
  },
  createDate: {
    type: Date,
    default: Date.now
  },
  updateDate: [
    {
      type: Date
    }
  ]
});



module.exports = Question = mongoose.model('Question', QuestionSchema);

	// topics: [{ 
	// 	type: Schema.Types.ObjectId, 
	// 	ref: 'Topic' 
	// }],