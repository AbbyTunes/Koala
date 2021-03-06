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
						<a target="_blank" href="https://github.com/AbbyTunes/Koala" id="project-link">
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
						<a target="_blank" href="https://www.linkedin.com/in/abby-jun-xu/" className="credit-a-linkedin">
							<div className="credit-icon-linkedin"></div>
						</a>
						<a target="_blank" href="https://angel.co/abby-jun-xu" className="credit-a-angellist">
							<div className="credit-icon-angellist"></div>	
						</a>
						<a target="_blank" href="https://github.com/AbbyTunes" className="credit-a-github">
							<div className="credit-icon-github"></div>
						</a>
					</div>
				</div>

				<div className="contributor-2">
					<div className="credit-name-2">Raymond Leung</div>
					<div className="credit-links-2">
						<a target="_blank" href="https://www.linkedin.com/in/raymond-leung-b0874b198/" className="credit-a-linkedin">
							<div className="credit-icon-linkedin"></div>
						</a>
						<a target="_blank" href="https://angel.co/raymond-leung-7" className="credit-a-angellist">
							<div className="credit-icon-angellist"></div>
						</a>
						<a target="_blank" href="https://github.com/ray-leun1" className="credit-a-github">
							<div className="credit-icon-github"></div>
						</a>
					</div>
				</div>

				<div className="contributor-3 ">
					<div className="credit-name-3">Ryan Woods</div>
					<div className="credit-links-3">
						<a target="_blank" href="https://www.linkedin.com/in/ryan-woods-530679b4/" className="credit-a-linkedin">
							<div className="credit-icon-linkedin"></div>
						</a>
						<a target="_blank" href="https://angel.co/ryan-woods-17" className="credit-a-angellist">
							<div className="credit-icon-angellist"></div>
						</a>
						<a target="_blank" href="https://github.com/rwoods1227" className="credit-a-github">
							<div className="credit-icon-github"></div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)

}

export default withRouter(Credit);