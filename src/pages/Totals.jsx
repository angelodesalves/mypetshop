import React from 'react'
import RadioButton from '../components/RadioButton';

const buttonList = [{
	name: 'Hoje'
}, {
	name: 'Ultima semana'
}, {
	name: 'Ultimo mês'
}, {
	name: 'Outro período'
}]

function Totals() {
	const onChange = index => {
		// Some logic here for graphics
	}

	return (
		<RadioButton
			data={buttonList}
			onChange={onChange}
		/>
	)
}

export default Totals