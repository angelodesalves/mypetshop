import React, { useState, useEffect } from 'react'
import PieGraph from '../pages/PieGraph';
import BarGraph from '../pages/BarGraph';
import RadioButton from '../components/RadioButton';
import '../style/Totals.css';
var moment = require('moment');

const buttonList = [
	{
		name: 'Hoje'
	}, {
		name: 'Ultima semana'
	}, {
		name: 'Ultimo mês'
	}, {
		name: 'Outro período'
	}
]

const graphTitleStyle = {
	fontFamily: 'din',
	fontSize: '30px',
	fill: '#737689'
}

const formatSevicesGraphData = (list, setPieGraphData) => {
	let totals = {
		'Banho & Tosa': 0,
		'Consultas': 0,
		'Medicamentos': 0
	}

	list.forEach((value) => {
		totals[value.product_name] = totals[value.product_name] + value.amount * 100;
	});

	setPieGraphData([
		{
			x: 'Banho & Tosa',
			y: totals['Banho & Tosa'] / 100
		}, {
			x: 'Consultas',
			y: totals['Consultas']  / 100
		}, {
			x: 'Medicamentos',
			y: totals['Medicamentos'] / 100
		}
	]);
}

const formatBalanceGraphData = (list, setBarGraphData) => {
	let expenses = 0,
		revenue = 0;

	list.forEach((value) => {
		if (value.type === 'Receitas') {
			console.log(`Total: ${revenue} + valor: ${value.amount * 100} montante: ${revenue + value.amount * 100}`);
			revenue = revenue + value.amount * 100
		} else if (value.type === 'Despesas') {
			expenses = expenses + value.amount * 100
		}
	});

	setBarGraphData([
		{ x: 'Receitas', y: revenue / 100 },
		{ x: 'Despesas', y: expenses / 100 }
	])
}

const getFilteredList = ({graphicFilter, transactions}) => {
	if (graphicFilter === 0) {
		return transactions.filter(item => {
			return moment().diff(moment(item.time), 'days') === 0;
		})
	}

	if (graphicFilter === 1) {
		return transactions.filter(item => {
			return moment().diff(moment(item.time), 'days') <= 7;
		})
	}

	if (graphicFilter === 2) {
		return transactions.filter(item => {
			return moment().diff(moment(item.time), 'month') <= 1;
		})
	}

	return transactions;
}

function Totals({data, dispatch}) {
	const [total, setTotal] = useState(23423.23);
	const [pieGraphData, setPieGraphData] = useState([
		{
			x: 'Banho & Tosa',
			y: 100
		}, {
			x: 'Consultas',
			y: 0
		}, {
			x: 'Medicamentos',
			y: 0
		}
	]);
	const [barGraphData, setBarGraphData] = useState();

	const onChange = index => {
		dispatch({type: 'setFilter', value: index});
	}

	const calcTotal = () => {
		let total = 0,
			list = getFilteredList(data)

		if (list.length > 0) {
			total = list.reduce((total, item) => total + item.amount * 100, 0) / 100
			formatSevicesGraphData(list, setPieGraphData);
			formatBalanceGraphData(list, setBarGraphData);
		}

		setTotal(total.toString().replace('.', ','));
	}

	useEffect(() => {
		calcTotal(data.graphicFilter);
	}, [data.graphicFilter]);

	return (
		<>
			<RadioButton
				data={buttonList}
				onChange={onChange}
				active={data.graphicFilter}
			/>
			<div className={'page-totals'}>
				<span className={'title'}>{'Valor total'}</span>
				<span className={'total'}>
					<small>R$</small>
					<span>{total}</span>
				</span>

				<span className={'content-graphs'}>
					<div className={'line'} />
					<PieGraph pieGraphData={pieGraphData} />
					<BarGraph barGraphData={barGraphData} />
				</span>
			</div>
		</>
	)
}

export default Totals