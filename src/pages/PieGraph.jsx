import React from 'react'
import { VictoryPie } from 'victory';

const graphTitleStyle = {
	fontFamily: 'din',
	fontSize: '30px',
	fill: '#737689'
}

function PieGraph({pieGraphData}) {
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
					colorScale={['#cd2ad5', '#792ad5', '#3a86fe']}
					style={{ labels: { display: 'none' } }}
					padAngle={({ datum }) => 2}
					animate={{
						duration: 1000
					}}
				/>
			</svg>
		</div>
	)
}

export default PieGraph