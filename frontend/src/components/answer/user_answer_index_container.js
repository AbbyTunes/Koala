import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/question_actions';
import { fetchAnswers, updateAnswer, deleteAnswer } from '../../actions/answer_actions';
import AnswerIndex from './user_answer_index';
// import AnswerIndexStylesheet from '../../../stylesheets/user_answer_index.scss';

const mapStateToProps = state => ({
    answers: Object.values(state.entities.answers),
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    fetchAnswers: optionId => dispatch(fetchAnswers(optionId)),
    updateAnswer: answer => dispatch(updateAnswer(answer)),
    deleteAnswer: id => dispatch(deleteAnswer(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(AnswerIndex);