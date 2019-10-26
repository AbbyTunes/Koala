import React from "react";
import AnswerIndexContainer from './answers/question_answer_index_container';
import MoreDropdown from './forms/more_dropdown';

class QuestionShow extends React.Component {

	componentDidMount() {
		this.props.fetchQuestion()
	}
	render() {
		const {question} = this.props;
		if (question) {
			return (
				<div className="show-frame">
					<div className="show-session">
						<div className="show-left">
							<div className="show-topic">
								<li>hardcode</li>
								<li>topics</li>
							</div>
							<div className="show-title">{question.title}</div>
							
							<div className="question-icon">
								<ul className="question-left">

									<li>
										<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
											<g id="answer" transform="translate(2.500000, 3.500000)" stroke="none" strokeWidth="1.5" fill="none" fillRule="evenodd">
												<g id="pen" transform="translate(9.000000, 9.000000) rotate(-315.000000) translate(-9.000000, -9.000000) translate(7.000000, -1.000000)">
													<path d="M2,8.8817842e-16 L2,8.8817842e-16 L2,8.8817842e-16 C3.1045695,6.85269983e-16 4,0.8954305 4,2 L4,16 L2.00256278,20 L0,16 L0,2 L0,2 C-1.35267774e-16,0.8954305 0.8954305,1.09108686e-15 2,8.8817842e-16 Z" id="pen_body" className="icon_svg-stroke" stroke="#666" strokeLinecap="round" strokeLinejoin="round"></path>
													<polygon id="pen_tip" className="icon_svg-fill_as_stroke" fill="#666" transform="translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) " points="2 17.5 3.25 20 0.75 20"></polygon>
												</g>
												<path d="M12,16 L17,16 L17,11 M7,1 L2,1 L2,6" id="bg" className="icon_svg-stroke" stroke="#666" strokeLinecap="round" strokeLinejoin="round"></path>
											</g>
										</svg>
										<div className="question-left-icon">
											Answer
											<div className="question-dot">·</div>
											<div className="question-number">20{}</div>
										</div>
									</li>

									<li>
										<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
											<g id="comment" className="icon_svg-stroke icon_svg-fill" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd">
												<path d="M12.0711496,18.8605911 C16.1739904,18.8605911 19.5,15.7577921 19.5,11.9302955 C19.5,8.102799 16.1739904,5 12.0711496,5 C7.96830883,5 4.64229922,8.102799 4.64229922,11.9302955 C4.64229922,13.221057 5.02055525,14.429401 5.67929998,15.4641215 C5.99817082,15.9649865 4.1279592,18.5219189 4.56718515,18.9310749 C5.02745574,19.3598348 7.80252458,17.6358115 8.37002246,17.9406001 C9.45969688,18.5258363 10.7235179,18.8605911 12.0711496,18.8605911 Z"></path>
											</g>
										</svg>
										<div className="question-left-icon">
											Comment
											<div className="question-dot">·</div>
											<div className="question-number">20{}</div>
										</div>
									</li>

									<li>
										<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
											<g stroke="none" className="icon_svg-fill_as_stroke" fill="#666" fillRule="nonzero">
												<path d="M21.0182496,2.52256287 L4.34797977,2.52256287 C3.98396204,2.52423267 3.63551728,2.67044154 3.37930133,2.92902438 C3.12308537,3.18760722 2.9800867,3.53738167 2.9817642,3.90139938 L2.9817496,21.4774306 L19.6457097,21.4774306 C20.0108223,21.4774344 20.3608894,21.3319635 20.6184701,21.0731985 C20.8760509,20.8144335 21.0199145,20.4637027 21.0182292,20.0957198 L21.0182496,2.52256287 Z M2.4913634,2.04921404 C2.98092279,1.55513216 3.64670648,1.27576655 4.34511285,1.27256944 L21.6432503,1.27256944 C21.9884286,1.27256944 22.2682507,1.55239192 22.2682503,1.89757017 L22.2682226,20.0928469 C22.2714301,20.7904709 21.9965456,21.4606224 21.5043785,21.9550524 C21.0122114,22.4494823 20.3433278,22.7274379 19.6457031,22.7274306 L2.35674959,22.7274306 C2.01157134,22.7274306 1.73174919,22.4476081 1.73174959,22.1024298 L1.73177083,3.90562151 C1.72897519,3.21063504 2.00216491,2.54293169 2.4913634,2.04921404 Z M14.2684549,5.27680556 L18.7594444,5.27680556 C19.1046224,5.27680556 19.3844444,5.55662759 19.3844444,5.90180556 L19.3844444,10.3927951 C19.3844444,10.7379731 19.1046224,11.0177951 18.7594444,11.0177951 L14.2684549,11.0177951 C13.9232769,11.0177951 13.6434549,10.7379731 13.6434549,10.3927951 L13.6434549,5.90180556 C13.6434549,5.55662759 13.9232769,5.27680556 14.2684549,5.27680556 Z M5.45178819,10.8157465 C5.10661023,10.8157465 4.82678819,10.5359245 4.82678819,10.1907465 C4.82678819,9.84556856 5.10661023,9.56574653 5.45178819,9.56574653 L11.5407986,9.56574653 C11.8859766,9.56574653 12.1657986,9.84556856 12.1657986,10.1907465 C12.1657986,10.5359245 11.8859766,10.8157465 11.5407986,10.8157465 L5.45178819,10.8157465 Z M5.45178819,14.6592622 C5.10661023,14.6592622 4.82678819,14.3794401 4.82678819,14.0342622 C4.82678819,13.6890842 5.10661023,13.4092622 5.45178819,13.4092622 L18.7594444,13.4092622 C19.1046224,13.4092622 19.3844444,13.6890842 19.3844444,14.0342622 C19.3844444,14.3794401 19.1046224,14.6592622 18.7594444,14.6592622 L5.45178819,14.6592622 Z M5.45178819,18.5027778 C5.10661023,18.5027778 4.82678819,18.2229557 4.82678819,17.8777778 C4.82678819,17.5325998 5.10661023,17.2527778 5.45178819,17.2527778 L18.7594444,17.2527778 C19.1046224,17.2527778 19.3844444,17.5325998 19.3844444,17.8777778 C19.3844444,18.2229557 19.1046224,18.5027778 18.7594444,18.5027778 L5.45178819,18.5027778 Z M5.45178819,6.96763889 C5.10661023,6.96763889 4.82678819,6.68781686 4.82678819,6.34263889 C4.82678819,5.99746092 5.10661023,5.71763889 5.45178819,5.71763889 L11.5407986,5.71763889 C11.8859766,5.71763889 12.1657986,5.99746092 12.1657986,6.34263889 C12.1657986,6.68781686 11.8859766,6.96763889 11.5407986,6.96763889 L5.45178819,6.96763889 Z"></path>
											</g>
										</svg>
										<div className="question-left-icon">
											Edit
											{/* <div className="question-dot">·</div>
											<div className="question-number">20{}</div> */}
										</div>
									</li>
								</ul>

								{/* <li>
									<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
										<g stroke="none" fill="none" fillRule="evenodd" strokeLinecap="round">
											<g id="follow" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5">
												<path d="M14.5,19 C14.5,13.3369229 11.1630771,10 5.5,10 M19.5,19 C19.5,10.1907689 14.3092311,5 5.5,5" id="lines"></path>
												<circle id="circle" cx="7.5" cy="17" r="2" className="icon_svg-fill" fill="none"></circle>
											</g>
										</g>
									</svg>
									<div className="question-left-icon">
										Follow
											<div className="question-dot">·</div>
										<div className="question-number">20{}</div>
									</div>
								</li> */}

								<MoreDropdown />
							</div>
							
							<AnswerIndexContainer />
						</div>
						<div className="show-right">
							<div className="top-questions"></div>
							<div></div>
						</div>

					</div>					
				</div>
			)
		} else {
			return null
		}	
	}
		
}

export default QuestionShow;