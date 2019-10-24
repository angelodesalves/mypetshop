import React, { useState } from 'react'
import Link from './Link';
import ic_totais from '../icons/ic_totais.svg';
import ic_clientes from '../icons/ic_clientes.svg';
import StackedLayout from './StackedLayout';
import Clients from '../pages/Clients';
import Totals from '../pages/Totals';

function Content(props) {
	const [page, setPage] = useState('Totals');

	const getPage = () => {
		var Cmp = Clients;

		if (page === 'Totals') {
			Cmp = Totals;
		}

		return <Cmp
			{...props}
		/>;
	}

	return (
		<div className={'content'}>
			<div>
				<StackedLayout spacing='20px' className={'pageButtons'}>
					<Link
						icon={ic_totais}
						text={'Totais'}
						onClick={() => setPage('Totals')}
						active={page === 'Totals'}
					/>
					<Link
						icon={ic_clientes}
						text={'Clientes'}
						onClick={() => setPage('Clients')}
						active={page === 'Clients'}
					/>
				</StackedLayout>
			</div>
			<div className={'wrapper'}>
				{getPage()}
			</div>
		</div>
	)
}

export default Content