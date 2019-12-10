import React from 'react'
import { Link } from 'react-router-dom'

const Suggestions = (props) => {
 
  const options = props.results.map(r => (
    <li key={r[1]}>
      <Link className="nav-profile-dropdown-links-link" to={`${r[2]}/${r[1]}`}>
        <div className="nav-profile-dropdown-links-link-content">
          {r[0]}
				</div>
      </Link>
      
    </li>
  ))
  return(
    <div className="nav-profile-dropdown-links-container">
      <ul>{options}</ul>
    </div>
  )




}

export default Suggestions