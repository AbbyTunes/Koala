import { connect } from 'react-redux';
import { fetchAnswers, deleteAnswer } from '../../actions/answer_actions';
import AnswerIndex from './answer_index';

const mapStateToProps = state => ({
    answers: Object.values(state.entities.answers)
});

const mapDispatchToProps = dispatch => ({
    fetchAnswers: () => dispatch(fetchAnswers()),
    deleteAnswer: id => dispatch(deleteAnswer(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(AnswerIndex);