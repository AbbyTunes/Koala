import React from 'react';
import { Link } from 'react-router-dom'
import headerLogo from '../../images/Koala-logo-final.png'
import profileIcon from '../../images/koala-profile.png'
import '../../stylesheets/reset.css' // this will probably get moved
import '../../stylesheets/navbar.css'

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.logoutUser = this.logoutUser.bind(this);
		this.getLinks = this.getLinks.bind(this);
		this.toggleClass = this.toggleClass.bind(this);
		this.state = {active: false};
	}

	logoutUser(e) {
		e.preventDefault();
		this.props.logout();
	}

	toggleClass() {
		const currentState = this.state.active;
		this.setState({ active: !currentState });
	};


// still need to add things to make the icons/links have red border thing at bottom
	getLinks() {
		let homeClass = "nav-item-link";
		let gHomeClass = "nav-item-link-icon-svg-g";
		let answerClass = "nav-item-link";
		let gAnswerClass = "nav-item-link-icon-svg-g";
		let questionsClass = "nav-item-link";
		let gQuestionsClass = "nav-item-link-icon-svg-g";
		switch (this.props.pathname) {
			case "/":
				homeClass += " red";
				gHomeClass += " red-fill";
				break;
			case "/answer":
				answerClass += " red";
				gAnswerClass += " red-fill";
				break;
			case "/questions":
				questionsClass +=" red";
				gQuestionsClass +=" red-fill";
			default:
				break;
		}
	
		if (this.props.loggedIn) {
			return (
				<div className="navbar-header">
					<div className="navbar-header-inner">
						<div className="navbar-header-logo"> 
							<Link to={'/'}>
								<img src={headerLogo} alt="Header logo"/>
							</Link>
						</div>
						{/* the svg path is a series of brush strokes that makes an icon, copied directly */}
						<div className="navbar-header-contents">
							<div className="navbar-nav">
								<span id="nav-item-span">
									<div className="header-nav-item">

										<Link className={homeClass} to={'/'}>
											<div className="nav-item-link-inner">
												<span className="nav-item-link-icon">
													<svg version="1.1" baseProfile="full" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
														<g className={gHomeClass}> 
															<path d="M21.0182496,2.52256287 L4.34797977,2.52256287 C3.98396204,2.52423267 3.63551728,2.67044154 3.37930133,2.92902438 C3.12308537,3.18760722 2.9800867,3.53738167 2.9817642,3.90139938 L2.9817496,21.4774306 L19.6457097,21.4774306 C20.0108223,21.4774344 20.3608894,21.3319635 20.6184701,21.0731985 C20.8760509,20.8144335 21.0199145,20.4637027 21.0182292,20.0957198 L21.0182496,2.52256287 Z M2.4913634,2.04921404 C2.98092279,1.55513216 3.64670648,1.27576655 4.34511285,1.27256944 L21.6432503,1.27256944 C21.9884286,1.27256944 22.2682507,1.55239192 22.2682503,1.89757017 L22.2682226,20.0928469 C22.2714301,20.7904709 21.9965456,21.4606224 21.5043785,21.9550524 C21.0122114,22.4494823 20.3433278,22.7274379 19.6457031,22.7274306 L2.35674959,22.7274306 C2.01157134,22.7274306 1.73174919,22.4476081 1.73174959,22.1024298 L1.73177083,3.90562151 C1.72897519,3.21063504 2.00216491,2.54293169 2.4913634,2.04921404 Z M14.2684549,5.27680556 L18.7594444,5.27680556 C19.1046224,5.27680556 19.3844444,5.55662759 19.3844444,5.90180556 L19.3844444,10.3927951 C19.3844444,10.7379731 19.1046224,11.0177951 18.7594444,11.0177951 L14.2684549,11.0177951 C13.9232769,11.0177951 13.6434549,10.7379731 13.6434549,10.3927951 L13.6434549,5.90180556 C13.6434549,5.55662759 13.9232769,5.27680556 14.2684549,5.27680556 Z M5.45178819,10.8157465 C5.10661023,10.8157465 4.82678819,10.5359245 4.82678819,10.1907465 C4.82678819,9.84556856 5.10661023,9.56574653 5.45178819,9.56574653 L11.5407986,9.56574653 C11.8859766,9.56574653 12.1657986,9.84556856 12.1657986,10.1907465 C12.1657986,10.5359245 11.8859766,10.8157465 11.5407986,10.8157465 L5.45178819,10.8157465 Z M5.45178819,14.6592622 C5.10661023,14.6592622 4.82678819,14.3794401 4.82678819,14.0342622 C4.82678819,13.6890842 5.10661023,13.4092622 5.45178819,13.4092622 L18.7594444,13.4092622 C19.1046224,13.4092622 19.3844444,13.6890842 19.3844444,14.0342622 C19.3844444,14.3794401 19.1046224,14.6592622 18.7594444,14.6592622 L5.45178819,14.6592622 Z M5.45178819,18.5027778 C5.10661023,18.5027778 4.82678819,18.2229557 4.82678819,17.8777778 C4.82678819,17.5325998 5.10661023,17.2527778 5.45178819,17.2527778 L18.7594444,17.2527778 C19.1046224,17.2527778 19.3844444,17.5325998 19.3844444,17.8777778 C19.3844444,18.2229557 19.1046224,18.5027778 18.7594444,18.5027778 L5.45178819,18.5027778 Z M5.45178819,6.96763889 C5.10661023,6.96763889 4.82678819,6.68781686 4.82678819,6.34263889 C4.82678819,5.99746092 5.10661023,5.71763889 5.45178819,5.71763889 L11.5407986,5.71763889 C11.8859766,5.71763889 12.1657986,5.99746092 12.1657986,6.34263889 C12.1657986,6.68781686 11.8859766,6.96763889 11.5407986,6.96763889 L5.45178819,6.96763889 Z"></path>														</g>
													</svg>
												</span>
											</div>
											<span>Home</span>
										</Link>
									</div>
								</span>

								{/* <span id="nav-item-span">
									<div className="header-nav-item">
										<Link className={answerClass} to={'/answer'}>
											<div className="nav-item-link-inner">
												<span className="nav-item-link-icon">
													<svg version="1.1" baseProfile="full" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
														<g className={gAnswerClass}>
															<path d="M3.56993697,19.0927202 L4.90727984,20.430063 L6.32212519,19.8415186 L21.6540999,4.51430825 C22.0414488,4.12695944 22.1927257,3.56238623 22.0509462,3.0332579 C21.9091667,2.50412957 21.4958704,2.09083329 20.9667421,1.94905379 C20.4376281,1.80727812 19.8730711,1.95854305 19.4857232,2.34586864 L4.15848145,17.6778748 L3.56993697,19.0927202 Z M3.04166667,3.04166667 L3.04166667,13.4375 C3.04166667,13.782678 2.76184464,14.0625 2.41666667,14.0625 C2.0714887,14.0625 1.79166667,13.782678 1.79166667,13.4375 L1.79166667,2.41666667 C1.79166667,2.0714887 2.0714887,1.79166667 2.41666667,1.79166667 L12.4791667,1.79166667 C12.8243446,1.79166667 13.1041667,2.0714887 13.1041667,2.41666667 C13.1041667,2.76184464 12.8243446,3.04166667 12.4791667,3.04166667 L3.04166667,3.04166667 Z M20.9583333,20.9583333 L20.9583333,10.5625 C20.9583333,10.217322 21.2381554,9.9375 21.5833333,9.9375 C21.9285113,9.9375 22.2083333,10.217322 22.2083333,10.5625 L22.2083333,21.5833333 C22.2083333,21.9285113 21.9285113,22.2083333 21.5833333,22.2083333 L11.5208333,22.2083333 C11.1756554,22.2083333 10.8958333,21.9285113 10.8958333,21.5833333 C10.8958333,21.2381554 11.1756554,20.9583333 11.5208333,20.9583333 L20.9583333,20.9583333 Z M18.6017396,1.46208528 C19.3049382,0.758886609 20.3297725,0.484283075 21.2902659,0.741646501 C22.2507593,0.999009928 23.0009901,1.74924069 23.2583535,2.7097341 C23.5157169,3.67022752 23.2411134,4.69506179 22.5379147,5.39826041 L7.11833139,20.8130521 C7.06053277,20.8708327 6.99196292,20.9167166 6.91650427,20.9481057 L1.69837927,23.1187307 C1.18343214,23.3329374 0.667062601,22.8165679 0.881269257,22.3016207 L3.05189426,17.0834957 C3.08328339,17.0080371 3.12916726,16.9394672 3.18694792,16.8816686 L18.6017396,1.46208528 Z"></path>
														</g>
													</svg>
												</span>
											</div>
											<span>Answer</span>
										</Link>
									</div>
								</span> */}

								<span id="nav-item-span">
									<div className="header-nav-item">
										<Link className={questionsClass} to={'/questions'}>
											<div className="nav-item-link-inner">
												<span className="nav-item-link-icon">
													<svg version="1.1" baseProfile="full" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
														<g className={gQuestionsClass}>
															{/* <circle r="10" fill="#ff0" transform="translate(8,8)" /> */}
															<path d="M6.88,11.059 L6.88,13 L9.231,13 L9.231,11.059 Z M8,16 C3.582,16 0,12.418
																0,8 C0,3.582 3.582,0 8,0 C12.418,0 16,3.582 16,8 C16,12.418 12.418,16 8,16
																Z M5.57,3.51 C4.586,4.043 4.063,4.948 4,6.224 L6.28,6.224 C6.28,5.852
																6.408,5.494 6.663,5.149 C6.918,4.804 7.35,4.632 7.961,4.632 C8.581,4.632
																9.009,4.772 9.243,5.052 C9.477,5.332 9.594,5.642 9.594,5.982 C9.594,6.277
																9.488,6.548 9.278,6.794 L8.821,7.191 L8.245,7.574 C7.677,7.95 7.324,8.282
																7.187,8.571 C7.051,8.86 6.966,9.382 6.935,10.139 L9.065,10.139 C9.07,9.781
																9.105,9.517 9.168,9.347 C9.268,9.078 9.47,8.843 9.775,8.641 L10.335,8.272
																C10.903,7.896 11.287,7.587 11.487,7.345 C11.829,6.947 12,6.456 12,5.874
																C12,4.925 11.607,4.209 10.821,3.725 C10.034,3.242 9.047,3 7.858,3 C6.953,3
																6.191,3.17 5.57,3.51 Z M5.57,3.513" transform="translate(-5,0)"  transform="scale(1.5, 1.5)"></path>								
														</g>
													</svg>
												</span>
											</div>
											<span>Questions</span>
										</Link>
									</div>
								</span>

								<span id="nav-item-span">
									<div className="header-nav-item">
										<Link className="nav-item-link" to={'/filler2'}>
											<div className="nav-item-link-inner">
												<span className="nav-item-link-icon">
													<svg version="1.1" baseProfile="full" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
														<g className="nav-item-link-icon-svg-g">
															<path d="M3.56993697,19.0927202 L4.90727984,20.430063 L6.32212519,19.8415186 L21.6540999,4.51430825 C22.0414488,4.12695944 22.1927257,3.56238623 22.0509462,3.0332579 C21.9091667,2.50412957 21.4958704,2.09083329 20.9667421,1.94905379 C20.4376281,1.80727812 19.8730711,1.95854305 19.4857232,2.34586864 L4.15848145,17.6778748 L3.56993697,19.0927202 Z M3.04166667,3.04166667 L3.04166667,13.4375 C3.04166667,13.782678 2.76184464,14.0625 2.41666667,14.0625 C2.0714887,14.0625 1.79166667,13.782678 1.79166667,13.4375 L1.79166667,2.41666667 C1.79166667,2.0714887 2.0714887,1.79166667 2.41666667,1.79166667 L12.4791667,1.79166667 C12.8243446,1.79166667 13.1041667,2.0714887 13.1041667,2.41666667 C13.1041667,2.76184464 12.8243446,3.04166667 12.4791667,3.04166667 L3.04166667,3.04166667 Z M20.9583333,20.9583333 L20.9583333,10.5625 C20.9583333,10.217322 21.2381554,9.9375 21.5833333,9.9375 C21.9285113,9.9375 22.2083333,10.217322 22.2083333,10.5625 L22.2083333,21.5833333 C22.2083333,21.9285113 21.9285113,22.2083333 21.5833333,22.2083333 L11.5208333,22.2083333 C11.1756554,22.2083333 10.8958333,21.9285113 10.8958333,21.5833333 C10.8958333,21.2381554 11.1756554,20.9583333 11.5208333,20.9583333 L20.9583333,20.9583333 Z M18.6017396,1.46208528 C19.3049382,0.758886609 20.3297725,0.484283075 21.2902659,0.741646501 C22.2507593,0.999009928 23.0009901,1.74924069 23.2583535,2.7097341 C23.5157169,3.67022752 23.2411134,4.69506179 22.5379147,5.39826041 L7.11833139,20.8130521 C7.06053277,20.8708327 6.99196292,20.9167166 6.91650427,20.9481057 L1.69837927,23.1187307 C1.18343214,23.3329374 0.667062601,22.8165679 0.881269257,22.3016207 L3.05189426,17.0834957 C3.08328339,17.0080371 3.12916726,16.9394672 3.18694792,16.8816686 L18.6017396,1.46208528 Z"></path>
														</g>
													</svg>
												</span>
											</div>
											<span>Filler</span>
										</Link>
									</div>
								</span>
							</div>

							<div className="navbar-right-contents">
								{/* does search stuff, bonus implementation */}
								<div className="navbar-search-container">
									<div className="navbar-search">
										<div className="navbar-search-input-container">
											<input 
											className="navbar-search-input" 
											type="text" 
											data-lpignore="true" 
											autoFocus="True" 
											data-group="js-editable" 
											placeholder="Search Koala" 
											w2cid="wS9ZF19Z12" 
											// id="__w2_wS9ZF19Z12_input"
											/>
										</div>
									</div>
								</div>
{/* link triggers dropdown here */}
								<div className="navbar-user-icon-container" onClick={this.toggleClass}>
									<span>
										<div className="header-nav-item">

											<div className={this.state.active ? "nav-profile-dropdown" : "hidden"}>
												<div className="nav-profile-dropdown-contents">
													<div className="nav-profile-dropdown-overflow">
														<div className="nav-profile-dropdown-inner-style">

															<div className="nav-profile-dropdown-header-container">
																<div className="nav-profile-dropdown-header-icon-container">
																	<Link className="dropdown-icon-link-to-profile" to={'/profile'}>
																		<div className="dropdown-icon-content-container">
																			<span className="dropdown-icon-content-wrapper">
																				<img className="profile-photo-img-dropdown" src={profileIcon} alt="Header logo" />
																			</span>
																		</div>
																	</Link>
																	<div className="margin-left"></div>
																</div>
																<Link className="dropdown-link-to-profile" to={`/profile/${this.props.currentUser.id}`}>
																	<div className="dropdown-link-to-profile-flex-center">
	{/* for now will be profile, maybe add currentUser to state and do it that way in span */}
																		<div className="dropdown-link-to-profile-username-container">
																			<span>{this.props.currentUser.firstName}</span>
																		</div>
																		<div className="dropdown-link-to-profile-arrow-container">
																			<span className="dropdown-link-to-profile-arrow">
																				<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
  																				<g id="chevron_right" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
																						<polyline id="chevron" transform="translate(12.500000, 12.002415) scale(1, -1) rotate(-90.000000) translate(-12.500000, -12.002415) " points="5.49758463 8.50241537 12.4975846 15.5024154 19.5024154 8.50241537"></polyline>
																					</g>
																				</svg>
																			</span>
																		</div>
																	</div>
																</Link>
															</div>
															<div className="nav-profile-dropdown-links-container">
																<Link className="nav-profile-dropdown-links-link" to={"/messages"}>
																	<div className="nav-profile-dropdown-links-link-content">
																		Messages
																	</div>
																</Link>
																<Link className="nav-profile-dropdown-links-link" to={"/create_ad"}>
																	<div className="nav-profile-dropdown-links-link-content">
																		Create Ad
																	</div>
																</Link>
																<Link className="nav-profile-dropdown-links-link" to={"/stats"}>
																	<div className="nav-profile-dropdown-links-link-content">
																		Stats
																	</div>
																</Link>
																<Link className="nav-profile-dropdown-links-link" to={"/your_content"}>
																	<div className="nav-profile-dropdown-links-link-content">
																		Your Content
																	</div>
																</Link>
																<Link className="nav-profile-dropdown-links-link" to={"/bookmarks"}>
																	<div className="nav-profile-dropdown-links-link-content">
																		Bookmarks
																	</div>
																</Link>
																<Link className="nav-profile-dropdown-links-link" to={"/drafts"}>
																	<div className="nav-profile-dropdown-links-link-content">
																		Drafts
																	</div>
																</Link>
															</div>

															<div className="nav-profile-dropdown-settings-links-container">
																<Link className="nav-profile-dropdown-settings-link" to={"/settings"}>
																	<div className="nav-profile-dropdown-settings-link-content">
																		Settings
																	</div>
																</Link>
																<Link className="nav-profile-dropdown-settings-link" to={"/languages"}>
																	<div className="nav-profile-dropdown-settings-link-content">
																		Languages
																	</div>
																</Link>
																<Link className="nav-profile-dropdown-settings-link" to={"/help"}>
																	<div className="nav-profile-dropdown-settings-link-content">
																		Help
																	</div>
																</Link>
																<div className="nav-profile-dropdown-settings-link" onClick={this.logoutUser}>
																	<div className="nav-profile-dropdown-settings-link-content" >
																		Logout
																	</div>
																</div>
															</div>

															<div className="nav-profile-dropdown-official-links-container">
																<div className="nav-profile-dropdown-official-links-wrapper">
																	<Link className="nav-profile-dropdown-official-links-link" to={"/about"}>
																		About
																		<span className="bullet"> · </span>
																	</Link>
																	<Link className="nav-profile-dropdown-official-links-link" to={"/careers"}>
																		Careers
																		<span className="bullet"> · </span>
																	</Link>
																	<Link className="nav-profile-dropdown-official-links-link" to={"/terms"}>
																		Terms
																		<span className="bullet"> · </span>
																	</Link>
																	<Link className="nav-profile-dropdown-official-links-link" to={"/privacy"}>
																		Privacy
																		<span className="bullet"> · </span>
																	</Link>
																	<Link className="nav-profile-dropdown-official-links-link" to={"/acceptable_use"}>
																		Acceptable Use
																		<span className="bullet"> · </span>
																	</Link>
																	<Link className="nav-profile-dropdown-official-links-link" to={"/businesses"}>
																		Businesses
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</div>											
											</div>											
											<a className="nav-item-link">
												<span className="expanded">
													<span className="profile-icon-wrapper">
														<div className="profile-icon-wrapper-inner-div">
															<span className="profile-icon-wrapper-inner-span">
																<img className="profile-photo-img" src={profileIcon} alt="Header logo" />
															</span>
														</div>
													</span>
												</span>
											</a>

										</div>
									</span>
								</div>
								{/* link triggers modal */}
								<div className="navbar-add-question">
									<Link id="ask-question-modal-button" to={'/new_koala'}>Write a Koala</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<Link to={'/signup'}>Signup</Link>
					<Link to={'/login'}>Login</Link>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				{this.getLinks()}
			</div>
		);
	}
}

export default NavBar;