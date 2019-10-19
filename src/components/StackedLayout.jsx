import React from 'react'

function StackedLayout(props) {
	return (
		<div className={props.className}>
			{props.children.map((child, index) => {
				return (
					<div
						key={index}
						style={{paddingBottom: props.spacing}}
					>
						{child}
					</div>
				)
			})}
		</div>
	)
}

export default StackedLayout