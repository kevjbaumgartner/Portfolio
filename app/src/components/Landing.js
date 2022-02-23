// Library imports
import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
	return (
		<div id='Landing' className='AppContent'>
			<img id='logo' src='https://media-exp1.licdn.com/dms/image/C4D03AQH8VzQ649Vvyg/profile-displayphoto-shrink_800_800/0/1545340413878?e=1651104000&v=beta&t=_8KRLDVm7oqysz90sZoDaK1qC8RJYWanBCnffp-JagE' alt='logo'></img>
			<div id='menu'>
				<h1 id='title'>kevjbaumgartner</h1>
				<p id='text'>Nice to meet you,  I'm Kevin!</p>
				<div id='links-local'>
					<Link to={{ pathname: '/about' }}>About</Link>
					<Link to={{ pathname: '/projects' }}>Projects</Link>
					<Link to={{ pathname: '/resume' }}>Resume</Link>
				</div>
				<div id='links-social'>
					<a href='https://github.com/kevjbaumgartner/' target='_blank' rel='noreferrer'><i className='fa-brands fa-github-square fa-2xl'></i></a>
					<a href='https://www.linkedin.com/in/kevjbaumgartner/' target='_blank' rel='noreferrer'><i className='fa-brands fa-linkedin fa-2xl'></i></a>
				</div>
			</div>
		</div>
	);
};