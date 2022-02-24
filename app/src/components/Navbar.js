// Library imports
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

	return (
		<div id='Navbar'>
			<div id='links-local'>
				<Link to={{ pathname: '/about' }}>About</Link>
				<Link to={{ pathname: '/projects' }}>Projects</Link>
				<Link to={{ pathname: '/resume' }}>Resume</Link>
			</div>
		</div>
	);
};