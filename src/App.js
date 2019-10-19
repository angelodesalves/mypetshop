import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';
import data from './json/data';
import './style/App.css';

function App() {
	return (
		<>
			<meta name="viewport" content="width=device-width, user-scalable=no" />
			<div className={'container'}>
				<Sidebar />
				<Header />
				<Content />
			</div>
		</>
	);
}

export default App;