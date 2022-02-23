// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// App import
import App from './App';

// CSS import
import './index.css'
import './fonts/fontawesome-free-6.0.0-web/css/all.min.css' // Font Awesome 6

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);