import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../stylesheets/credit.scss'

const Credit = () => {
	return ( 
		<div className="show-credit">
			<div className="credit-header">Contributors</div>

			<div className="credit-body">

				<div className="contributor-1 ">
					<div className="credit-name-1">Jun Xu (Abby)</div>
					<div className="credit-links-1">
						<a href="https://www.linkedin.com/in/jun-xu-6a204466/" className="credit-a-linkedin">
							<div className="credit-icon-linkedin"></div>
						</a>
						<a href="https://github.com/AbbyTunes" className="credit-a-angellist">
							<div className="credit-icon-angellist"></div>	
						</a>
						<a href="https://github.com/AbbyTunes" className="credit-a-github">
							<div className="credit-icon-github"></div>
						</a>
					</div>
				</div>

				<div className="contributor-2 ">
					<div className="credit-name-2">Name</div>
					<div className="credit-links-2">
						<a href="" className="credit-a-linkedin">
							<div className="credit-icon-linkedin"></div>
						</a>
						<a href="" className="credit-a-angellist">
							<div className="credit-icon-angellist"></div>
						</a>
						<a href="" className="credit-a-github">
							<div className="credit-icon-github"></div>
						</a>
					</div>
				</div>

				<div className="contributor-3 ">
					<div className="credit-name-3">Name</div>
					<div className="credit-links-3">
						<a href="" className="credit-a-linkedin">
							<div className="credit-icon-linkedin"></div>
						</a>
						<a href="" className="credit-a-angellist">
							<div className="credit-icon-angellist"></div>
						</a>
						<a href="" className="credit-a-github">
							<div className="credit-icon-github"></div>
						</a>
					</div>
				</div>

			</div>
		</div>
	)

}

export default withRouter(Credit);