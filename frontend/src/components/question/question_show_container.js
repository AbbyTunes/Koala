import { connect } from 'react-redux';
import { fetchQuestion, updateQuestion, deleteQuestion } from '../../actions/question_actions';
<<<<<<< HEAD
import { fetchUser } from '../../actions/user_actions';
=======
import { fetchAnswers } from '../../actions/answer_actions';
>>>>>>> 1b956518a02c5adf6c756c8ac09dfd75f147f90a
import QuestionShow from './question_show';
import QuestionShowStylesheet from '../../stylesheets/question_show.scss';

const mapStateToProps = (state, ownProps) => {
	const questionId = ownProps.match.params.question_id;
<<<<<<< HEAD
	const question = state.entities.questions[questionId];
	const answersNum = state.entities.answers.length;
	return { question, answersNum }
=======
	return {
        currentUser: state.session.user,
        question: state.entities.questions[questionId],
        answers: state.entities.answers
    }
>>>>>>> 1b956518a02c5adf6c756c8ac09dfd75f147f90a
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const questionId = ownProps.match.params.question_id;
	return {
		fetchQuestion: () => dispatch(fetchQuestion(questionId)),
		updateQuestion: () => dispatch(updateQuestion(questionId)),
<<<<<<< HEAD
		deleteQuestion: (id) => dispatch(deleteQuestion(id)),
		fetchUser: (id) => dispatch(fetchUser(id))
=======
        deleteQuestion: (id) => dispatch(deleteQuestion(id)),
        fetchAnswers: optionId => dispatch(fetchAnswers(optionId))
>>>>>>> 1b956518a02c5adf6c756c8ac09dfd75f147f90a
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);