import React from 'react'
import {
	VictoryChart,
	VictoryBar,
	Bar
} from 'victory';

const graphTitleStyle = {
	fontFamily: 'din',
	fontSize: '30px',
	fill: '#737689'
}

function BarGraph({barGraphData}) {
	if (!barGraphData) {
		return null;
	}

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
		</div>
	)
}

export default BarGraph