import React from 'react'
import ic_menu from '../icons/ic_menu.svg';

function Sidebar() {
	return (
		<div className={'header'}>
			<img src={ic_menu} alt={'Menu'} className='menu-header' />
			<span>
				{'Petshop'}
			</span>
			<span>
				|
			</span>
			<span>
				{'Meu faturamento'}
			</span>
		</div>
	)
}

export default Sidebar