import React from 'react';
import { Link } from 'react-router-dom'
import headerLogo from '../../images/Koala-logo-final.png'
import profileIcon from '../../images/koala-profile.png'
import githubIcon from '../../images/github-logo.png'
import '../../stylesheets/reset.css' // this will probably get moved
import '../../stylesheets/navbar.css'
import QuestionPopUp from '../question/forms/question_pop_up'
import Search from '../search/search_container'

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
		let creditClass = "nav-item-link";
		let gCreditClass = "nav-item-link-icon-svg-g";
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
			case "/credit":
				creditClass += " red";
				gCreditClass += " red-fill";
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
										<Link className={creditClass} to={'/credit'}>
											<div className="nav-item-link-inner">
												<span className="nav-item-link-icon">
													{/* svg not working */}
													<svg version="1.1" baseProfile="full" width="24" height="24" xmlns="http://www.w3.org/2000/svg" >
														<g className={gCreditClass}>
															<path d="M8.34138274,2.68449938 C8.4139274,2.92924151 8.41266315,3.18967341 8.34389684,3.41103916 C8.20752364,3.92243866 7.80459805,4.375 7.24,4.375 C6.86280158,4.375 6.55107974,4.16718544 6.18694715,3.80305285 C6.06820568,3.68431138 5.9465184,3.54910329 5.8223617,3.40011525 C5.76307392,3.32896992 5.70437379,3.25609389 5.64658001,3.18219914 C5.14716084,3.60642159 4.59810475,3.98561558 3.98281494,4.32590442 C3.35564226,4.59033527 2.69437313,4.7613396 2.02010189,4.8345319 C2.16388002,5.48018959 2.54065684,6.06743833 3.10472055,6.46785997 C4.04159534,7.13293547 5.29461019,7.14025388 6.23918974,6.48616728 C6.52297172,6.2896587 6.91232414,6.36040777 7.10883272,6.64418974 C7.3053413,6.92797172 7.23459223,7.31732414 6.95081026,7.51383272 C5.57373091,8.46740951 3.74699132,8.45674018 2.38114454,7.48714294 C1.01529777,6.5175457 0.402693118,4.7965556 0.848688319,3.18201402 C1.29468352,1.56747245 2.70381663,0.404959964 4.37369389,0.273940292 C6.04357115,0.14292062 7.6167678,1.07143754 8.3091113,2.59666431 C8.32221974,2.6255421 8.33294932,2.65489386 8.34138274,2.68449938 Z M20.4878034,8.03429234 C19.333131,8.40186164 18.0471552,8.22912331 17.0141897,7.51383272 C16.7304078,7.31732414 16.6596587,6.92797172 16.8561673,6.64418974 C17.0526759,6.36040777 17.4420283,6.2896587 17.7258103,6.48616728 C18.5410833,7.05071386 19.5861262,7.12254458 20.4593531,6.70400496 C21.1656032,6.24080478 21.3903212,5.30034864 20.9424018,4.53232821 C20.8901611,4.42915286 20.7367041,4.25664608 20.5050083,4.05336599 C20.339354,3.90802791 20.1406243,3.75213451 19.9163524,3.58988863 C19.6483257,3.39598913 19.3590267,3.20373946 19.0694869,3.02269845 C19.0508552,3.01104861 19.0326798,2.99972734 19.0149858,2.98874561 L17.0690367,4.27178899 C16.7638397,4.47301781 16.351842,4.37049687 16.1765445,4.04970246 L15.7376304,3.24648963 C15.6457486,3.1319184 15.5965395,2.98752304 15.6000196,2.839973 C15.5992989,2.74963046 15.6181522,2.65900957 15.6568098,2.57464475 C16.4378802,0.87006388 18.3027447,-0.0581820309 20.1336094,0.34629471 C21.3628559,0.617861274 22.3529111,1.44073725 22.8678985,2.51869753 C22.9690346,2.72942626 23.0525239,2.95109686 23.1163117,3.18201402 C23.2323273,3.60200058 23.2767113,4.02919012 23.2548388,4.44848303 L23.2530095,6.70015924 C23.2610896,6.8011601 23.2818445,6.96203704 23.3164382,7.12014661 C23.7519929,7.17543207 24.1000654,7.71578626 23.7258331,8.15522564 C23.6603223,8.23215129 23.5557983,8.33662214 23.4145393,8.44924232 C23.1757306,8.639635 22.9075672,8.78994369 22.6076614,8.8737925 C21.8466078,9.08657082 21.1026892,8.81577789 20.4878034,8.03429234 Z M8.18196091,5.66997353 C8.217776,4.75509384 8.74125748,3.8787954 9.51022096,3.24501525 C10.2085822,2.63798084 11.1206069,2.27037218 12.1184843,2.27000028 C12.1189895,2.27000011 12.1194947,2.27 12.12,2.27 C12.1205053,2.27 12.1210105,2.27000011 12.1215157,2.27000032 C13.1193931,2.27037218 14.0314178,2.63798084 14.729779,3.24501525 C15.4987425,3.8787954 16.022224,4.75509384 16.0580391,5.66997353 C16.0856852,5.85931673 16.1,6.05298667 16.1,6.25 C16.1,8.4480933 14.3180933,10.23 12.12,10.23 C9.9219067,10.23 8.14,8.4480933 8.14,6.25 C8.14,6.05298667 8.15431476,5.85931673 8.18196091,5.66997353 Z M9.39378481,6.395 C9.46915964,7.83532781 10.6609036,8.98 12.12,8.98 C13.5790964,8.98 14.7708404,7.83532781 14.8462152,6.395 L9.39378481,6.395 Z M16.645,14.895 L16.6455208,14.86949 C16.6915505,13.7426919 16.2386408,12.6528779 15.407541,11.8906011 C15.1918094,11.6927341 15.1423149,11.3716411 15.2884487,11.1179949 C16.2417854,9.46327616 18.1875467,8.65501405 20.0327176,9.14724294 C21.8778885,9.63947184 23.1625275,11.309495 23.165,13.22 L23.165,23 C23.165,23.345178 22.885178,23.625 22.54,23.625 L17.27,23.625 C16.924822,23.625 16.645,23.345178 16.645,23 L16.645,14.895 Z M7.715,23 L7.715,15.135 C7.715,12.8043584 9.60435836,10.915 11.935,10.915 C14.2656416,10.915 16.155,12.8043584 16.155,15.135 L16.155,23 C16.155,23.345178 15.875178,23.625 15.53,23.625 L8.34,23.625 C7.99482203,23.625 7.715,23.345178 7.715,23 Z M7.22447918,14.86949 L7.225,14.895 L7.225,23 C7.225,23.345178 6.94517797,23.625 6.6,23.625 L1.33,23.625 C0.984822031,23.625 0.705,23.345178 0.705,23 L0.705000524,13.219191 C0.707472514,11.309495 1.99211151,9.63947184 3.83728239,9.14724294 C5.68245328,8.65501405 7.62821457,9.46327616 8.58155129,11.1179949 C8.72768507,11.3716411 8.67819064,11.6927341 8.46245897,11.8906011 C7.63135921,12.6528779 7.17844949,13.7426919 7.22447918,14.86949 Z"></path>
														</g>
													</svg>
												</span>
											</div>
											<span>Credit</span>
										</Link>
									</div>
								</span>

								{/* <span id="nav-item-span">
									<div className="header-nav-item">
										<a className="nav-item-link github" href={"https://github.com/AbbyTunes/Koala"}>
											<div className="nav-item-link-inner">
												<span className="nav-item-link-icon">
													<img className="profile-photo-img" src={githubIcon} alt="Github logo" />
												</span>
											</div>
											<span>Github</span>
										</a>
									</div>
								</span> */}

							</div>

							<div className="navbar-right-contents">
								{/* does search stuff, bonus implementation */}
								<div className="navbar-search-container">
									<div className="navbar-search">
										<div className="navbar-search-input-container">
											{/* <input 
											className="navbar-search-input" 
											type="text" 
											data-lpignore="true" 
											autoFocus="True" 
											data-group="js-editable" 
											placeholder="Search Koala" 
											w2cid="wS9ZF19Z12" 
											// id="__w2_wS9ZF19Z12_input"
											/> */}
											<Search />
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
																	<Link className="dropdown-icon-link-to-profile" to={`/profile/${this.props.currentUser.id}`}>
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
																<a className="nav-profile-dropdown-links-link" href={"https://github.com/AbbyTunes/Koala"}>
																	<div className="nav-profile-dropdown-links-link-content">
																		Github
																	</div>
																</a>
																{/* <Link className="nav-profile-dropdown-links-link" to={"/create_ad"}>
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
																</Link> */}
																<a className="nav-profile-dropdown-links-link" href={"https://www.savethekoala.com/"}>
																	<div className="nav-profile-dropdown-links-link-content">
																		Donate
																	</div>
																</a>
															</div>

															<div className="nav-profile-dropdown-settings-links-container">
																{/* <Link className="nav-profile-dropdown-settings-link" to={"/settings"}>
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
																</Link> */}
																<div className="nav-profile-dropdown-settings-link" onClick={this.logoutUser}>
																	<div className="nav-profile-dropdown-settings-link-content" >
																		Logout
																	</div>
																</div>
															</div>

															<div className="nav-profile-dropdown-official-links-container">
																<div className="nav-profile-dropdown-official-links-wrapper">
																	<a className="nav-profile-dropdown-official-links-link" href={"https://www.savethekoala.com/sites/savethekoala.com/files/uploads/old/images/photogallery/photosale0024.jpg"}>
																		Koala 1
																		<span className="bullet"> · </span>
																	</a>
																	<a className="nav-profile-dropdown-official-links-link" href={"https://www.savethekoala.com/sites/savethekoala.com/files/uploads/old/images/photogallery/photosale0023.jpg"}>
																		Koala 2
																		<span className="bullet"> · </span>
																	</a>
																	<a className="nav-profile-dropdown-official-links-link" href={"https://www.savethekoala.com/sites/savethekoala.com/files/uploads/old/images/photogallery/photosale0025.jpg"}>
																		Koala 3
																		<span className="bullet"> · </span>
																	</a>
																	<a className="nav-profile-dropdown-official-links-link" href={"https://www.savethekoala.com/sites/savethekoala.com/files/styles/slide_image/public/imageblock/5.png?itok=x0ja2MKc"}>
																		Koala 4
																		<span className="bullet"> · </span>
																	</a>
																	{/* <Link className="nav-profile-dropdown-official-links-link" to={"/acceptable_use"}>
																		Koala 5
																		<span className="bullet"> · </span>
																	</Link>
																	<Link className="nav-profile-dropdown-official-links-link" to={"/businesses"}>
																	 Koala 6
																	</Link> */}
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
									{/* <Link id="ask-question-modal-button" to={'/new_koala'}>Write a Koala</Link> */}
									<QuestionPopUp />
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