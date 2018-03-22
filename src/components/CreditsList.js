import React from 'react';
import { Link } from 'react-router-dom';

import Credits from './Credits';

const CreditsList = (props) => {

	const creditsArray = 
		props.credits.map((credit) => {
			return <Credits {...credit} />
		})

	return (
		<div>
			<Link to='/'>Home</Link>
			<h2>Credits:</h2>
			{creditsArray}
		</div>
	)
}

export default CreditsList