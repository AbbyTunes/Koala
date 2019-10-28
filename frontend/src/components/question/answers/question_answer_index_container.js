import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/user_actions';
import { fetchAnswers, updateAnswer, deleteAnswer } from '../../../actions/answer_actions';
import AnswerIndex from './question_answer_index';
import AnswerIndexStylesheet from '../../../stylesheets/question_answer_index.scss';

const mapStateToProps = (state, ownProps) => ({
    childDeletion: ownProps.childDeletion,
    answers: Object.values(state.entities.answers),
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    fetchAnswers: optionId => dispatch(fetchAnswers(optionId)),
    updateAnswer: answer => dispatch(updateAnswer(answer)),
    deleteAnswer: id => dispatch(deleteAnswer(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnswerIndex);