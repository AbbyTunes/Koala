import React from 'react';
import { Link } from 'react-router-dom'
import headerLogo from '../../images/Koala-logo-final.png'
import profileIcon from '../../images/koala-profile.png'
import githubIcon from '../../images/github-logo.png'
import '../../stylesheets/reset.css' // this will probably get moved
import '../../stylesheets/navbar.css'
import QuestionPopUp from '../question/forms/question_pop_up'

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
														<path d="M418.0992 68.3008c5.7344 7.0656 4.3008 14.9504-4.3008 23.4496-9.9328 4.3008-18.5344 2.8672-25.6-4.3008C365.4656 51.9168 332.8 34.0992 290.0992 34.0992c-32.6656 0-60.8256 11.776-84.2752 35.2256C182.3744 92.7744 170.7008 120.9344 170.7008 153.6c0 32.6656 11.776 60.8256 35.2256 84.2752C229.376 261.3248 257.4336 273.1008 290.0992 273.1008 301.4656 273.1008 307.2 278.7328 307.2 290.0992 307.2 301.4656 301.4656 307.2 290.0992 307.2 219.0336 307.2 158.6176 332.0832 108.7488 381.8496 58.9824 431.616 34.0992 492.1344 34.0992 563.2c0 11.3664-5.7344 17.1008-17.1008 17.1008S0 574.5664 0 563.2c0-65.4336 19.8656-123.6992 59.6992-174.8992s90.3168-86.016 151.4496-104.5504C161.3824 255.2832 136.4992 211.8656 136.4992 153.6c0-42.7008 14.9504-78.9504 44.8512-108.8512C211.1488 14.9504 247.5008 0 290.0992 0 344.1664 0 386.8672 22.7328 418.0992 68.3008zM597.2992 420.2496c71.0656 18.5344 130.4576 56.5248 178.176 114.176 47.616 57.5488 73.6256 124.1088 77.824 199.4752 0 11.3664-5.7344 17.1008-17.1008 17.1008C824.9344 750.8992 819.2 745.2672 819.2 733.9008c-4.3008-81.1008-35.9424-149.7088-94.9248-205.824C665.2928 471.8592 594.5344 443.6992 512 443.6992S358.7072 471.8592 299.7248 527.9744C240.7424 584.192 209.1008 652.8 204.8 733.9008c0 11.3664-5.7344 17.1008-17.1008 17.1008-11.3664 0-17.1008-5.7344-17.1008-17.1008 4.3008-75.3664 30.208-141.824 77.824-199.4752 47.616-57.6512 107.008-95.6416 178.176-114.176C369.7664 387.584 341.2992 338.5344 341.2992 273.1008c0-46.8992 16.6912-87.1424 50.176-120.5248C424.8576 119.0912 465.1008 102.4 512 102.4c46.8992 0 87.1424 16.6912 120.5248 50.176 33.3824 33.3824 50.176 73.6256 50.176 120.5248C682.7008 338.5344 654.2336 387.584 597.2992 420.2496zM415.9488 369.0496C442.9824 396.0832 475.0336 409.6 512 409.6s69.0176-13.5168 96.0512-40.5504C634.9824 342.016 648.4992 310.0672 648.4992 273.1008c0-36.9664-13.5168-69.0176-40.5504-96.0512C581.0176 150.016 548.9664 136.4992 512 136.4992S442.9824 150.016 415.9488 177.0496C389.0176 204.0832 375.5008 236.1344 375.5008 273.1008 375.5008 310.0672 389.0176 342.016 415.9488 369.0496zM812.8512 283.7504c61.1328 18.5344 111.616 53.3504 151.4496 104.5504C1004.1344 439.5008 1024 497.7664 1024 563.2c0 11.3664-5.7344 17.1008-17.1008 17.1008-11.3664 0-17.1008-5.7344-17.1008-17.1008 0-71.0656-24.8832-131.584-74.6496-181.3504C865.3824 332.0832 804.9664 307.2 733.9008 307.2 722.5344 307.2 716.8 301.4656 716.8 290.0992c0-11.3664 5.7344-17.1008 17.1008-17.1008 32.6656 0 60.8256-11.776 84.2752-35.2256C841.6256 214.4256 853.2992 186.2656 853.2992 153.6c0-32.6656-11.776-60.8256-35.2256-84.2752C794.624 45.8752 766.5664 34.0992 733.9008 34.0992c-42.7008 0-76.0832 17.8176-100.2496 53.3504C629.3504 97.3824 621.4656 99.5328 610.0992 93.9008c-9.9328-8.4992-11.3664-16.384-4.3008-23.4496C634.2656 23.4496 676.9664 0 733.9008 0c42.7008 0 78.9504 14.9504 108.7488 44.7488C872.5504 74.6496 887.5008 110.8992 887.5008 153.6 887.5008 211.8656 862.6176 255.2832 812.8512 283.7504z" />
													</svg>
												</span>
											</div>
											<span>Credit</span>
										</Link>
									</div>
								</span>

								{/* credit
								className="icon"  viewBox="0 0 1024 1024" version="1.1"
								style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"  */}
								

								<span id="nav-item-span">
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