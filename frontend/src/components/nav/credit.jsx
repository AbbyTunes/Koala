import React from 'react';
import { withRouter } from 'react-router-dom';
import {} from '../../stylesheets/credit.scss';

const Credit = () => {
	return ( 
		<div className="show-credit">

			<div className="credit-header">About Koala</div>

			<div className="credit-body">
				<div className="contributor-1 ">
					<div className="credit-name-1">Project Github Repository</div>

					<div className="credit-links-1">
						<a href="https://github.com/AbbyTunes/Koala" id="project-link">
							<div id="project-icon"></div>
						</a>
					</div>
				</div>
			</div>
			
			<div className="credit-header">Contributors</div>

			<div className="credit-body">

				<div className="contributor-1 ">
					<div className="credit-name-1">Jun Xu (Abby)</div>
					<div className="credit-links-1">
						<a href="https://www.linkedin.com/in/abby-jun-xu/" className="credit-a-linkedin">
							<div className="credit-icon-linkedin"></div>
						</a>
						<a href="https://angel.co/abby-jun-xu" className="credit-a-angellist">
							<div className="credit-icon-angellist"></div>	
						</a>
						<a href="https://github.com/AbbyTunes" className="credit-a-github">
							<div className="credit-icon-github"></div>
						</a>
					</div>
				</div>

				<div className="contributor-3 ">
					<div className="credit-name-3">Raymond Leung</div>
					<div className="credit-links-3">
						<a href="https://www.linkedin.com/in/raymond-leung-b0874b198/" className="credit-a-linkedin">
							<div className="credit-icon-linkedin"></div>
						</a>
						<a href="" className="credit-a-angellist">
							<div className="credit-icon-angellist"></div>
						</a>
						<a href="https://github.com/ray-leun1" className="credit-a-github">
							<div className="credit-icon-github"></div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)

}

export default withRouter(Credit);