import React from 'react'
import './Link.css';

function Link({icon, text, active, type = 'horizontal', onClick}) {
	const getClass = (type, active) => {
		let classes = ['link', type];

		if (active) {
			classes.push('active');
		}

		return classes.join(' ');
	}

	const onClickLink = () => {
		onClick && onClick();
	}

	return (
		<a className={getClass(type, active)} onClick={() => onClickLink()}>
			<img src={icon} alt={text} className='teste' />
			<span>{text}</span>
		</a>
	)
}

export default Link