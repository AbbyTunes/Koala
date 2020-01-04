import React from "react";
import { Link, withRouter } from 'react-router-dom';
import AnswerForm from './answers/answer_form';
import AnswerIndex from './answers/question_answer_index';
import QuestionEditPopUp from "./forms/question_edit_pop_up";

class QuestionShow extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			answerIcon: true,
			answerForm: false,
			answers: []
		};

		this.toggleAnswer = this.toggleAnswer.bind(this);
		this.updateQuestionShow = this.updateQuestionShow.bind(this);
		this.answerSubmitted = this.answerSubmitted.bind(this);
	}

	componentDidMount() { this.updateQuestionShow(); };

	componentDidUpdate(prevProps) {
		if (prevProps.question && this.props.question) {
			if (prevProps.question.answerIds.length !== this.props.question.answerIds.length) {
				this.updateQuestionShow();
			}
		}

		if (prevProps.question && this.props.question) {
			if (prevProps.question.title !== this.props.question.title) {
				this.props.fetchQuestion().then(question => {
					if (question.editorIds) {
						let editorArray = question.editorIds;
						let lastEdit = editorArray[editorArray.length - 1];
						this.setEditor(lastEdit.firstName, lastEdit.lastName);
						return;
					}
					
				})
			}
		}
	}

	updateQuestionShow() {
		this.props.fetchQuestion()
			.then(data => {
				if (this.props.question.answerIds.some(answer => answer.author._id === this.props.currentUser.id)) {
					this.setState({ answerIcon: false });
					this.setState({ answerForm: false });
					this.setState({ answers: data.question.answerIds });
				} else {
					this.setState({ answerIcon: true });
					this.setState({ answerForm: false });
					this.setState({ answers: data.question.answerIds });
				}
			});
	}

	answerSubmitted() {
		this.props.fetchQuestion()
			.then(data => {
				this.setState({ answerIcon: false });
				this.setState({ answerForm: false });
				this.setState({ answers: data.question.answerIds });
			});
	}

	toggleAnswer() { if (!this.state.answerForm) this.setState({ answerForm: true }); }

	render() {
		const { question } = this.props;

		if (question) {

			let lastEditor;
			let lastEditorName;

			if (question.editorIds.length) {
				const editorArr = question.editorIds;
				lastEditor = editorArr[editorArr.length - 1];
				lastEditorName = (
					<div className="question-editor">by <Link to={`/profile/${lastEditor._id}`}>{lastEditor.firstName} {lastEditor.lastName}</Link>
					</div>
				)
			} else {
				lastEditorName = null;
			}

			let updateDate;
			let editor;

			if (question.updateDate.length) {
				const datesArr = question.updateDate;
				const lastEditDate = datesArr[datesArr.length - 1];
				const editDate = (new Date(lastEditDate)).toLocaleDateString('en-US', {
					year: 'numeric', month: 'short', day: 'numeric'
				});
				updateDate = (
					<div> on {editDate}</div>
				)

				editor = (
					<div className="show-editor">Last edited {lastEditorName} {" "} {updateDate}
					</div>
				)
			} else {
				editor = null
			}

			// debugger

			let questionDescription;
			if (question.description) {
				questionDescription = (
					<div>
						<div className="show-description">Description:</div>
						<div className="show-description">{question.description}</div>
					</div>
				);
			} else {
				questionDescription = null;
			}

			let questionImage;
			if (question.image_url) {
				questionImage = (
					<div className="show-image">
						<img src={question.image_url} alt="" />
					</div>
				);
			} else {
				questionImage = null;
			}

			return (
        <div className="show-frame">
          <div className="show-session">
            <div className="show-left">
              {/* <div className="show-topic">
										<li>hardcode</li>
										<li>topics</li>
									</div> */}

              <div className="show-title">{question.title}</div>

              {questionDescription}

              {questionImage}

              {editor}

              <div className="question-icon">
                <ul className="question-left">
                  <li
                    className={`answer-form-btn${
                      this.state.answerForm ? " active" : ""
                    }${this.state.answerIcon ? "" : " hidden"}`}
                    onClick={this.toggleAnswer}
                  >
                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                      <g transform="translate(2.500000, 3.500000)">
                        <g transform="translate(9.000000, 9.000000) rotate(-315.000000) translate(-9.000000, -9.000000) translate(7.000000, -1.000000)">
                          <path
                            className="svg-base pen-body"
                            d="M2,8.8817842e-16 L2,8.8817842e-16 L2,8.8817842e-16 C3.1045695,6.85269983e-16 4,0.8954305 4,2 L4,16 L2.00256278,20 L0,16 L0,2 L0,2 C-1.35267774e-16,0.8954305 0.8954305,1.09108686e-15 2,8.8817842e-16 Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                        <path
                          className="svg-base border"
                          d="M12,16 L17,16 L17,11 M7,1 L2,1 L2,6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    <div className="question-left-icon">
                      Answer
                      <div className="question-dot">·</div>
                      <div className="question-number">
                        {this.props.question.answerIds.length}
                      </div>
                    </div>
                  </li>
                  <QuestionEditPopUp />
                </ul>
                {/* <MoreDropdown deleteQuestion={deleteQuestion} /> */}
              </div>
              {this.state.answerForm ? (
                <AnswerForm
                  questionId={question._id}
                  updateQuestionShow={this.updateQuestionShow}
                  answerSubmitted={this.answerSubmitted}
                />
              ) : (
                ""
              )}
              <AnswerIndex
                currentUser={this.props.currentUser}
                question={question}
                answers={this.state.answers}
                updateQuestionShow={this.updateQuestionShow}
              />
            </div>
            {/* <div className="show-right"></div> */}
          </div>
        </div>
      );
		} else {
			return null
		}	
	}
		
}

export default withRouter(QuestionShow);