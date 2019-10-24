import React from 'react'
import '../style/Table.css';

const getBody = (data, getRow) => {
	return data.map(item => {
		return getRow(item);
	})
};

function Table({data = [], headers = [], getRow}) {
	const getEmptyState = () => (
		<tr>
			<td colspan="7">
				{'Busca sem resultado'}
			</td>
		</tr>
	)

	return (
		<div className={'tableWrapper'}>
			<table className={'table'}>
				<thead>
					<tr>
						{
							headers.map((item, index) => {
								return <th key={index}>{item}</th>
							})
						}
					</tr>
				</thead>
				<tbody>
					{data.length > 0 ? getBody(data, getRow) : getEmptyState()}
				</tbody>
			</table>
		</div>
	)
}

export default Table