import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../stylesheets/credit.scss'

const Credit = () => {
	return ( 
		<div className="show-credit">

			<div className="credit-header">Contributors</div>
			<ul>
				<li>
					<script src="https://www.linkedin.com/autofill/js/autofill.js" type="text/javascript" async></script><script type="IN/Form2"></script>
				</li>
			</ul>
		</div> 
	)

}

export default withRouter(Credit);