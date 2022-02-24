// Library imports
import React from 'react';
import { Route, Routes } from 'react-router-dom';


// Component imports
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import NotFound from './components/NotFound';

// App
const App = () => {
	return (
		<div id='App'>
			<Routes>
				<Route exact path='/' element={<Landing />} />						{/* Default - Home screen */}
				<Route path='/about' element={<><Navbar /><About /></>} />			{/* About me */}
				<Route path='/projects' element={<><Navbar /><Projects /></>} />	{/* My projects */}
				<Route path='/resume' element={<><Navbar /><Resume /></>} />		{/* My experience */}
				<Route path='*' element={<><Navbar /><NotFound /></>} />			{/* Route fall through */}
			</Routes>
		</div>
	);
};

export default App;