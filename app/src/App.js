// Library imports
import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';


// Component imports
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import NotFound from './components/NotFound';

// App
const App = () => {
	const [P, setP] = useState(useLocation());

	return (
		<div id='App'>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Landing />} />		{/* Default home screen */}
				<Route path='/about' element={<About />} />			{/* About me */}
				<Route path='/projects' element={<Projects />} />	{/* My projects */}
				<Route path='/resume' element={<Resume />} />		{/* Work/School history */}
				<Route path='*' element={<NotFound />} />			{/* Route 404 */}
			</Routes>
		</div>
	);
};

export default App;