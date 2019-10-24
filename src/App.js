import React, { useReducer } from 'react';
import Sidebar from './components/structure/Sidebar';
import Header from './components/structure/Header';
import Content from './components/structure/Content';
import json from './json/data';
import './style/App.css';

function reducer(state, action) {
	switch (action.type) {
		case 'setFilter':
			return Object.assign({}, state, {graphicFilter: action.value});
		default:
			throw new Error();
	}
}

function App() {
	const dataJson = Object.assign({}, json, {graphicFilter: 3});
	const [state, dispatch] = useReducer(reducer, dataJson);

	return (
		<>
			<div className={'container'}>
				<Sidebar />
				<Header />
				<Content
					data={state}
					dispatch={dispatch}
				/>
			</div>
		</>
	);
}

export default App