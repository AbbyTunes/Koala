import { connect } from 'react-redux';
import { fetchAnswers, deleteAnswer } from '../../../actions/answer_actions';
import AnswerIndex from './answer_index';
import AnswerIndexStylesheet from '../../../stylesheets/answer_index.scss';

const mapStateToProps = state => ({
    answers: Object.values(state.entities.answers)
});

const mapDispatchToProps = dispatch => ({
    fetchAnswers: questionId => dispatch(fetchAnswers(questionId)),
    deleteAnswer: id => dispatch(deleteAnswer(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(AnswerIndex);