// Library imports
import React from 'react';

export default function About() {
	return (
		<div id='About'>
			<div id='written'>
				<span id='intro'>Nice to meet you!</span>
				<p>
					I'm Kevin, a diligent programmer with an aptitude for creative coding since 2011 from Milton, Ontario.
					From individual web pages to full scale implementations, I focus on creating visually captivating, accessible, and interactive applications.
					<br /><br />
					As a developer, my passion to understand and come up with solutions drives me to take on challenges new or old.
					As a person, I'm laid-back, easily enthused, and always looking for the best in every situation. I take time to smell the roses, value positive competition, and strive for continuous improvement.
					<br /><br />
					In my downtime, you can catch me playing games, watching anime, working on personal projects, or diving into my latest hobby (recently Magic: The Gathering).
					If you think we'd get along, feel free to send a message my way, I'm always happy to meet new people!
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