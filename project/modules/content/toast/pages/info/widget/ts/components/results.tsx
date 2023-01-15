import React from 'react';
import { Button } from '@essential-js/ui/buttons';
import { toast } from '@essential-js/ui/toast';

export function Results() {
	function show() {
		toast.info('Here goes the information that you want to display');
	}

	return (
		<div className="results">
			<Button onClick={show}>Show info toast</Button>
		</div>
	);
}
