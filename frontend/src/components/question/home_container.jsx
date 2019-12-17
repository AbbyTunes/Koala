import { connect } from 'react-redux';
import { fetchQuestion, fetchQuestions } from '../../actions/question_actions';
import { createAnswer } from '../../actions/answer_actions';
import Home from './home';
import { } from '../../stylesheets/question_index.scss';

const mapStateToProps = state => ({
	currentUser: state.session.user,
	questions: Object.values(state.entities.questions)
});

const mapDispatchToProps = dispatch => ({
	fetchQuestion: id => dispatch(fetchQuestion(id)),
	fetchQuestions: () => dispatch(fetchQuestions()),
	createAnswer: answer => dispatch(createAnswer(answer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);