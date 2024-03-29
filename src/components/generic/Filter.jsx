import React from 'react'
import './Filter.css';

function Filter({value, setFilter}) {
	return (
		<input
			className={'filter'}
			onChange={e => setFilter(e.target.value)}
			value={value}
			placeholder={'Pesquisar'}
		/>
	)
}

export default Filter