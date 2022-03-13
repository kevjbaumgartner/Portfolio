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
						Created to demonstrate my recently gained skills in React.js as well
						as my pre-existing experience in web development. It uses framework proprietary extensions
						such as the React router and transition group to streamline the development process
						of a smooth, and most importantly, interactive design.
					</p>
					<div className='tile-footer'>
						<ul className='tile-stack'>
							<li><i className="fa-brands fa-html5"></i></li>
							<li><i className="fa-brands fa-css3-alt"></i></li>
							<li><i className="fa-brands fa-react"></i></li>
						</ul>
						<a className='tile-link' href='https://github.com/kevjbaumgartner/portfolio' target='_blank' rel='noreferrer'><i className="fa-solid fa-link"></i> Link to the repo</a>
					</div>
				</div>
				<div className='tile'>
					<img className='tile-img' src='https://user-images.githubusercontent.com/43413002/152380336-fca70477-a47a-48a2-9818-cecf2cf6e2bd.gif' alt=''></img>
					<span className='tile-title'>MTG-DeckBuilder</span>
					<p className='tile-text'>
						Testing. This one has a much smaller text amount. Hello World!
					</p>
					<ul className='tile-stack'>
						<li><i className="fa-brands fa-html5"></i></li>
						<li><i className="fa-brands fa-css3-alt"></i></li>
						<li><i className="fa-brands fa-react"></i></li>
					</ul>
					<a className='tile-link' href='https://github.com/kevjbaumgartner/MTG-DeckBuilder' target='_blank' rel='noreferrer'><i className="fa-solid fa-link"></i> Link to the repo</a>
				</div>
				<div className='tile'>
					<img className='tile-img' src={require('../assets/tile-portfolio.jpg')} alt=''></img>
					<span className='tile-title'>Portfolio</span>
					<p className='tile-text'>
						Coincidentally my most recent project, my personal portfolio website!
						Created with the intention to demonstrate my recently learned skills in React.js as well
						as my pre-existing experience in web development. It uses framework proprietary extensions
						such as the React Router, and React Transition Group to streamline the development process
						of a smooth, and most importantly, interactive design.
					</p>
					<ul className='tile-stack'>
						<li><i className="fa-brands fa-html5"></i></li>
						<li><i className="fa-brands fa-css3-alt"></i></li>
						<li><i className="fa-brands fa-react"></i></li>
					</ul>
					<a className='tile-link' href='https://github.com/kevjbaumgartner/portfolio' target='_blank' rel='noreferrer'>Link</a>
				</div>
				<div className='tile'>
					<img className='tile-img' src={require('../assets/tile-portfolio.jpg')} alt=''></img>
					<span className='tile-title'>Portfolio</span>
					<p className='tile-text'>
						Coincidentally my most recent project, my personal portfolio website!
						Created with the intention to demonstrate my recently learned skills in React.js as well
						as my pre-existing experience in web development. It uses framework proprietary extensions
						such as the React Router, and React Transition Group to streamline the development process
						of a smooth, and most importantly, interactive design.
					</p>
					<ul className='tile-stack'>
						<li><i className="fa-brands fa-html5"></i></li>
						<li><i className="fa-brands fa-css3-alt"></i></li>
						<li><i className="fa-brands fa-react"></i></li>
					</ul>
					<a className='tile-link' href='https://github.com/kevjbaumgartner/portfolio' target='_blank' rel='noreferrer'>Link</a>
				</div>
				<div className='tile'>
					<img className='tile-img' src={require('../assets/tile-portfolio.jpg')} alt=''></img>
					<span className='tile-title'>Portfolio</span>
					<p className='tile-text'>
						Coincidentally my most recent project, my personal portfolio website!
						Created with the intention to demonstrate my recently learned skills in React.js as well
						as my pre-existing experience in web development. It uses framework proprietary extensions
						such as the React Router, and React Transition Group to streamline the development process
						of a smooth, and most importantly, interactive design.
					</p>
					<ul className='tile-stack'>
						<li><i className="fa-brands fa-html5"></i></li>
						<li><i className="fa-brands fa-css3-alt"></i></li>
						<li><i className="fa-brands fa-react"></i></li>
					</ul>
					<a className='tile-link' href='https://github.com/kevjbaumgartner/portfolio' target='_blank' rel='noreferrer'>Link</a>
				</div>
				{/* <div className='tile'>
					<img className='tile-img' alt=''></img>
					<span className='tile-title'></span>
					<p className='tile-text'></p>
					<ul className='tile-stack'>

					</ul>
					<a href='' target='_blank' rel='noreferrer'></a>
				</div> */}
			</div>
		</div>
	);
};