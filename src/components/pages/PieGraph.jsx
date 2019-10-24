import React from 'react'
import { VictoryPie } from 'victory';
import Subtitle from '../generic/Subtitle';

const graphTitleStyle = {
	fontFamily: 'din',
	fontSize: '30px',
	fill: '#737689'
}

const graphColors = ['#cd2ad5', '#792ad5', '#3a86fe'];

function PieGraph({pieGraphData}) {
	const getTotal = () =>  pieGraphData.reduce((total, item) => total + item.y * 100, 0) / 100;

	const getPercentage = (value) => {
		let total = getTotal(),
			percentage = value / total * 100;

		return percentage.toFixed(2);
	}

	const formatValue = index => `R$ ${index ? pieGraphData[index].y : getTotal()} (${index ? getPercentage(pieGraphData[index].y) : 100}%)`;

	const subtitleData = [
		{ color: graphColors[0], name: 'Banho & Tosa', value: formatValue(0) },
		{ color: graphColors[1], name: 'Consultas', value: formatValue(1) },
		{ color: graphColors[2], name: 'Medicamentos', value: formatValue(2) },
		{ name: 'Total', value: formatValue() }
	]

	return (
		<div className={'pieGraph'}>
			<span className={'title'}>{'Serviços'}</span>
			<svg viewBox="0 0 400 400" style={{width: '100%'}}>
				<VictoryPie
					standalone={false}
					width={400}
					height={400}
					data={pieGraphData}
					innerRadius={115}
					colorScale={graphColors}
					style={{ labels: { display: 'none' } }}
					padAngle={({ datum }) => 2}
					animate={{
						duration: 1000
					}}
				/>
			</svg>
			<Subtitle
				data={subtitleData}
			/>
		</div>
	)
}

export default PieGraph