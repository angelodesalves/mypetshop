import React from 'react'
import Link from './Link';
import StackedLayout from './StackedLayout';
import logo from '../icons/ic_logo.svg';
import ic_dashboard from '../icons/ic_dashboard.svg';
import ic_cadastro from '../icons/ic_cadastro.svg';

function Sidebar() {
	return (
		<div className={'sidebar'}>
			<StackedLayout spacing='35px'>
				<div className={'logoWrapper'}>
					<img src={logo} alt="logo" />
				</div>
				<Link
					icon={ic_dashboard}
					text={'Meu faturamento'}
					active
					type={'vertical'}
				/>
				<Link
					icon={ic_cadastro}
					text={'Cadastro'}
					type={'vertical'}
				/>
			</StackedLayout>
		</div>
	)
}

export default Sidebar