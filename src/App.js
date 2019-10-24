import React, { useReducer } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';
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
			<meta name="viewport" content="width=device-width, user-scalable=no" />
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