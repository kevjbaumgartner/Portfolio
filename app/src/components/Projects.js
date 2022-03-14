// Library imports
import React from 'react';

export default function Projects() {
	return (
		<div id='Projects' className='AppContent-Regular'>
			<div id='tiles'>
				<div className='tile'>
					<img className='tile-img' src={require('../assets/tile-portfolio.jpg')} alt=''></img>
					<span className='tile-title'>Portfolio</span>
					<p className='tile-text'>
						My portfolio, remade with React.js. It uses framework proprietary extensions
						such as the React router and transition group to streamline interactive development.
					</p>
					<div className='tile-footer'>
						<ul className='tile-stack'>
							<li><i className="fa-brands fa-html5"></i></li>
							<li><i className="fa-brands fa-css3-alt"></i></li>
							<li><i className="fa-brands fa-react"></i></li>
						</ul>
						<a className='tile-link' href='https://github.com/kevjbaumgartner/portfolio' target='_blank' rel='noreferrer'><i className="fa-solid fa-link"></i> Link</a>
					</div>
				</div>
				<div className='tile'>
					<img className='tile-img' src={require('../assets/tile-mtgdeckbuilder.jpg')} alt=''></img>
					<span className='tile-title'>MTG-DeckBuilder</span>
					<p className='tile-text'>
						Deck builder for the Magic: The Gathering trading card game. Uses the Scryfall card
						database API for queries, and React for the frontend.
					</p>
					<div className='tile-footer'>
						<ul className='tile-stack'>
							<li><i className="fa-brands fa-html5"></i></li>
							<li><i className="fa-brands fa-css3-alt"></i></li>
							<li><i className="fa-brands fa-react"></i></li>
							<li><i className="fa-solid fa-cloud"></i></li>
						</ul>
						<a className='tile-link' href='https://github.com/kevjbaumgartner/MTG-DeckBuilder' target='_blank' rel='noreferrer'><i className="fa-solid fa-link"></i> Link</a>
					</div>
				</div>
			</div>
		</div>
	);
};