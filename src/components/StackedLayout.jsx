import React from 'react'

function StackedLayout(props) {
	return (
		<div>
			{props.children.map(child => {
				return (
					<div style={{paddingBottom: props.spacing}}>
						{child}
					</div>
				)
			})}
		</div>
	)
}

export default StackedLayout