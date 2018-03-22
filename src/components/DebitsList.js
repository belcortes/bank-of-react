import React from 'react';
import { Link } from 'react-router-dom';

import Debits from './Debits';

const DebitsList = (props) => {

	const debitsArray = 
		props.debits.map((debit) => {
			return <Debits {...debit} />
		})

	return (
		<div>
			<Link to='/'>Home</Link>
			<h2>Debits:</h2>
			{debitsArray}
		</div>
	)
}

export default DebitsList