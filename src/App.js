import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';
import './style/App.css';

function App() {
	return (
		<div className={'container'}>
			<Sidebar />
			<Header />
			<Content />
		</div>
	);
}

export default App;