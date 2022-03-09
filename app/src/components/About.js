// Library imports
import React from 'react';

export default function About() {
	return (
		<div id='About'>
			<div id='written'>
				<span id='intro'>Nice to meet you!</span>
				<p>
					I'm Kevin, a diligent programmer with an aptitude for creative coding since 2011 from Milton, Ontario.
					<br />
					From individual web pages to full scale implementations, I focus on creating visually captivating, accessible, and interactive applications.
					<br /><br />
					As a developer, I'm driven by my passion to understand and come up with solutions to challenges new and old.
					<br />
					I get along well in a team, but also appreciate the space to work out my own answers.
					<br />
					As a person, I'm easygoing, optimistic, and determined. I strive to improve the efficiency and meaning behind my actions for everything I do.
					<br />
					I value honesty, consistency, and constructiveness, willing to both give and take criticism for continual improvement.
					<br /><br />
					In my downtime, I enjoy playing games, watching anime, working on personal projects, and diving into my latest hobby (recently Magic: The Gathering).
				</p>
			</div>
			<div id='jots'>
				<span className='jot-title'>Tech Stack</span>
				<div id='skills'>
					<ul className='jot-list'>
						<li><i class="fa-brands fa-html5"></i> HTML5, <i class="fa-brands fa-css3-alt"></i> CSS3, and <i class="fa-brands fa-js"></i> JavaScript</li>
						<li><i class="fa-brands fa-react"></i> React.js</li>
						<li><i class="fa-solid fa-database"></i> MongoDB, and MySQL</li>
						<li><i class="fa-brands fa-node-js"></i> Node.js using Express.js</li>
					</ul>
				</div>
				<span className='jot-title'>Hobbies</span>
				<div id='hobbies'>
					<ul className='jot-list'>
						<li><i class="fa-solid fa-keyboard"></i> Mechanical Keyboards</li>
						<li><i class="fa-solid fa-dice"></i> Tabletop Games</li>
						<li><i class="fa-solid fa-gamepad"></i> Video Games</li>
						<li><i class="fa-solid fa-clapperboard"></i> Horror Movies</li>
					</ul>
				</div>
			</div>
		</div>
	);
};