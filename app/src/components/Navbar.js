// Library imports
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
	let location = useLocation();
	return (
		<div id='Navbar'>
			<div id='links-local'>
				<NavLink to={'/'} className={(state) => (state.isActive ? "focus" : 'none')}><i className="fa-solid fa-house"></i></NavLink>
				<NavLink to={'/about'} className={(state) => (state.isActive ? "focus" : 'none')}>About</NavLink>
				<NavLink to={'/projects'} className={(state) => (state.isActive ? "focus" : 'none')}>Projects</NavLink>
				<NavLink to={'/resume'} className={(state) => (state.isActive ? "focus" : 'none')}>Resume</NavLink>
			</div>
		</div >
	);
};