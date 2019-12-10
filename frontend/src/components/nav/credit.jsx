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
						<div className="credit-icon-linkedin"></div>
						<div className="credit-icon-github"></div>
						<div className="credit-icon-facebook"></div>
						<div className="credit-icon-angellist"></div>	
					</div>
				</div>

				<div className="contributor-2 ">
					<div className="credit-name-2">Raymond Leung</div>
					<div className="credit-links-2">
						<div className="credit-icon-linkedin"></div>
						<div className="credit-icon-github"></div>
						<div className="credit-icon-facebook"></div>
						<div className="credit-icon-angellist"></div>
					</div>
				</div>

				<div className="contributor-1 ">
					<div className="credit-name-1">Ryan Woods</div>
					<div className="credit-links-1">
						<div className="credit-icon-linkedin"></div>
						<div className="credit-icon-github"></div>
						<div className="credit-icon-facebook"></div>
						<div className="credit-icon-angellist"></div>
					</div>
				</div>

			</div>
		</div>
	)

}

export default withRouter(Credit);