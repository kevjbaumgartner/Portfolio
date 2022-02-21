// Library imports
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Component imports
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

// App
const App = () => {
	const Page = (
		<div>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Landing />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/resume' element={<Resume />} />
			</Routes>
		</div>
	);

	return (
		Page
	);
};

export default App;