// Library imports
import React from 'react';

export default function About() {
	return (
		<div id='About'>
			<div id='logo'>
				<img src='https://media-exp1.licdn.com/dms/image/C4D03AQH8VzQ649Vvyg/profile-displayphoto-shrink_800_800/0/1545340413878?e=1651104000&v=beta&t=_8KRLDVm7oqysz90sZoDaK1qC8RJYWanBCnffp-JagE' alt='logo'></img>
			</div>
			<div id='written'>
				<span id='intro'>Nice to meet you!</span>
				<p>
					I'm Kevin, a diligent programmer from Milton, Ontario with an aptitude for creative coding since 2011.
					From individual web pages to full scale implementations, I focus on creating visually captivating, accessible, and interactive applications.
					<br /><br />
					As a developer, my passion to understand and come up with solutions drives me to take on challenges new or old.
					As a person, I'm laid-back, easily enthused, and always looking for the best in every situation. I take time to <a className='focus-link' href='https://twitter.com/shenanigansen/status/764093557497929733' target='_blank' rel='noreferrer'>smell the roses</a>, value positive competition, and strive for continuous improvement.
					<br /><br />
					In my downtime, you can catch me playing games, watching anime, working on personal projects, or diving into my latest hobby (recently Magic: The Gathering).
					If you think we'd get along, feel free to send a message my way, I'm always happy to meet new people!
				</p>
			</div>
			<div id='links-social'>
				<a href='https://github.com/kevjbaumgartner/' target='_blank' rel='noreferrer'><i className='fa-brands fa-github-square'></i></a>
				<a href='https://www.linkedin.com/in/kevjbaumgartner/' target='_blank' rel='noreferrer'><i className='fa-brands fa-linkedin'></i></a>
				<a href='mailto:kevjbaumwork@gmail.com'><i className='fa-solid fa-square-envelope'></i></a>
			</div>
			<div id='jots'>
				<div id='skills'>
					<span className='jot-title'>Tech Stack</span>
					<ul className='jot-list'>
						<li>HTML5, CSS3, and JavaScript</li>
						<li>React.js</li>
						<li>MongoDB, and MySQL</li>
						<li>Node.js using Express.js</li>
					</ul>
				</div>
				<div id='hobbies'>
					<span className='jot-title'>Hobbies</span>
					<ul className='jot-list'>
						<li>Mechanical Keyboards</li>
						<li>Tabletop Games</li>
						<li>Video Games</li>
						<li>Horror Movies</li>
					</ul>
				</div>
			</div>
		</div>
	);
};