import React from 'react'
import {
	VictoryChart,
	VictoryBar,
	Bar
} from 'victory';
import Subtitle from '../generic/Subtitle';

const graphTitleStyle = {
	fontFamily: 'din',
	fontSize: '30px',
	fill: '#737689'
}

function BarGraph({barGraphData}) {
	var subtitleData;

	const getPercentage = (value) => {
		let total = barGraphData[0].y + barGraphData[1].y,
			percentage = value / total * 100;

		return percentage.toFixed(2);
	}

	if (!barGraphData) {
		return null;
	}

	subtitleData = [
		{ color: '#01dcaa', name: 'Receitas', value: `R$ ${barGraphData[0].y} (${getPercentage(barGraphData[0].y)}%)` },
		{ color: '#fe4f64', name: 'Despesas', value: `R$ ${barGraphData[1].y} (${getPercentage(barGraphData[1].y)}%)` }
	];

	return (
		<div className={'barGraph'}>
			<span className={'title'}>{'Despesas x receitas'}</span>
			<VictoryChart
				height={400}
				width={400}
				domainPadding={100}
			>
				<VictoryBar
					barRatio={0.6}
					cornerRadius={20}
					data={barGraphData}
					dataComponent={
						<Bar />
					}
					style={{
						data: {
							fill: ({ datum }) => datum.x === 'Receitas' ? "#01dcaa" : "#fe4f64",
						}
					}}
					categories={{
						x: ['Receitas', 'Despesas']
					}}
					animate={{
						onLoad: { duration: 1000 }
					}}
				/>
			</VictoryChart>
			<Subtitle
				data={subtitleData}
			/>
		</div>
	)
}

export default BarGraph