import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/user_actions';
import { createAnswer } from '../../../actions/answer_actions';
import AnswerForm from './question_answer_form';
import AnswerFormStylesheet from '../../../stylesheets/question_answer_form.scss';

const mapStateToProps = state => ({
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    createAnswer: answer => dispatch(createAnswer(answer))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnswerForm);