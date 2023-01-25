import React from 'react';
import { Table } from '@essential-js/ui/menu';

export function Results() {
	return (
		<div className="results">
			<Table breakpoint={600}>
				<thead>
					<tr>
						<th>NAME</th>
						<th>LASTNAME</th>
						<th>AGE</th>
						<th>EMAIL</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td data-label="NAME">Jhon</td>
						<td data-label="LASTNAME">Doe</td>
						<td data-label="AGE">56</td>
						<td data-label="EMAIL">JhonDoe@hot.com</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}
