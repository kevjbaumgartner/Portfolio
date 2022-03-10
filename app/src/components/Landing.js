// Library imports
import React from 'react';

export default function Landing() {
	return (
		<div id='Landing' className='AppContent-Center'>
			<div id='logo'>
				<img src='https://media-exp1.licdn.com/dms/image/C4D03AQH8VzQ649Vvyg/profile-displayphoto-shrink_800_800/0/1545340413878?e=1651104000&v=beta&t=_8KRLDVm7oqysz90sZoDaK1qC8RJYWanBCnffp-JagE' alt='logo'></img>
			</div>
			<div id='menu'>
				<div className='text'>
					Hi! I'm <span className='focus'>Kevin Baumgartner</span>,
					<br />
					a full stack developer.
					<br /><br />
					I specialize in web development, using the <a href='https://www.mongodb.com/mern-stack' target='_blank' rel='noreferrer' className='focus-link'>MERN solution stack</a> to create beautiful solutions for everyday ideas.
				</div>
			</div>
		</div>
	);
};