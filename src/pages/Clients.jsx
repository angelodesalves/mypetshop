import React, { useState, useMemo } from 'react'
import StackedLayout from '../components/StackedLayout';
import Table from '../components/Table';
import Filter from '../components/Filter';
import data from '../json/data';

const headers = ['Id', 'Nome', 'Documento', 'Data de nascimento', 'Cliente desde', 'Última compra'];

const getRow = data => {
	return (
		<tr>
			<td>{data.id}</td>
			<td>{data.name}</td>
			<td>{data.document}</td>
			<td>{data.birthdate}</td>
			<td>{data.customer_since}</td>
			<td>{data.last_purchase}</td>
		</tr>
	);
};

function Clients() {
	const [filter, setFilter] = useState('');

	const getList = () => {
		if (filter.length > 0) {
			return data.customers.filter(item => {
				return Object.keys(item).some(field => {
					return item[field].toString().toLowerCase().indexOf(filter.toLowerCase()) > -1
				});
			});
		}

		return data.customers;
	}

	return (
		<StackedLayout spacing='10px'>
			<div>
				<Filter setFilter={setFilter} value={filter} />
			</div>
			<Table
				data={getList()}
				headers={headers}
				getRow={getRow}
			/>
		</StackedLayout>
	)
}

export default Clients