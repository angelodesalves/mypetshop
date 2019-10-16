import React from 'react'
import Link from './Link';
import ic_totais from '../icons/ic_totais.svg';
import ic_clientes from '../icons/ic_clientes.svg';
import StackedLayout from './StackedLayout';

function Sidebar() {
	return (
		<div className={'content'}>
		<StackedLayout spacing='25px'>
			<Link
				icon={ic_totais}
				text={'Totais'}
				active
			/>
			<Link
				icon={ic_clientes}
				text={'Clientes'}
			/>
		</StackedLayout>
		</div>
	)
}

export default Sidebar