import React from "react";
import { Link } from "react-router-dom";
import QuestionEditPopUp from "./question_edit_pop_up";
import MoreDropdownStylesheet from "../../../stylesheets/more_dropdown.scss";
import QuestionPopUpStylesheet from "../../../stylesheets/question_pop_up.scss";

class MoreDropdown extends React.Component {

	constructor(props) {
		super(props)
		this.state = { showMenu: false }
		this.showMenu = this.showMenu.bind(this);
		this.hideMenu = this.hideMenu.bind(this);
	}

	showMenu() {
		this.setState({ showMenu: true })
	}

	hideMenu() {
		this.setState({ showMenu: false })
	}

	render() {
		return (
			<div>
				<div className="question-icon-right" onClick={this.showMenu} >
					<li>
						<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<g id="overflow" className="icon_svg-stroke" strokeWidth="1.5" stroke="#666" fill="none" fillRule="evenodd">
								<path d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z"></path>
							</g>
						</svg>
					</li>
				</div>

				{this.state.showMenu ? (
					<div>
						<div className="modal-dropdown" onClick={this.hideMenu}></div>
						<QuestionEditPopUp />
					</div>
				) : (null)
				}
			</div>
		)
	}
}

export default MoreDropdown;