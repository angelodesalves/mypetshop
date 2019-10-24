import React from 'react'
import './Subtitle.css';

function Subtitle({data}) {
	const getList = () => {
		return data.map(item => (
			<div className={'subtitle-item'}>
				{item.color ? <div className={'icon'} style={{background: item.color}}></div> : <div/>}
				<div className={'name'}>
					{item.name}
				</div>
				<div className={'value'}>
					{item.value}
				</div>
			</div>
		));
	}

	if (!data || data.length === 0)
		return null;

	return (
		<div className={'subtitle'}>
			{getList()}
		</div>
	)
}

export default Subtitle