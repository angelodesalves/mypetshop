import React, { useState } from 'react'
import '../style/RadioButton.css';

function RadioButton({data, active = 0, onChange}) {
	const [activeButton, setActiveButton] = useState(active);

	const getClass = (index) => {
		return `radio-button ${activeButton === index ? 'active' : ''}`
	}

	const onClick = index => {
		setActiveButton(index);
		onChange && onChange();
	}

	const getButtons = () => {
		return data.map((item, index) => (
			<a
				className={getClass(index)}
				onClick={() => onClick(index)}
				key={index}
			>
				{item.name}
			</a>
		));
	}

	return (
		<div>
			{getButtons()}
		</div>
	)
}

export default RadioButton