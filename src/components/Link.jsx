import React from 'react'
import '../style/Link.css';


function Link({icon, text, active, type = 'horizontal'}) {
	const getClass = (type, active) => {
		let classes = ['link', type];

		if (active) {
			classes.push('active');
		}

		return classes.join(' ');
	}

	return (
		<a className={getClass(type, active)}>
			<img src={icon} alt={text} className='teste' />
			<span>{text}</span>
		</a>
	)
}

export default Link