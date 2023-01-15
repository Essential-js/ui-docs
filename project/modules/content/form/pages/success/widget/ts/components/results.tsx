import React from 'react';
import { Button } from '@essential-js/ui/buttons';
import { toast } from '@essential-js/ui/toast';

export function Results() {
	function show() {
		toast.success('Something went right');
	}

	return (
		<div className="results">
			<Button onClick={show}>Show success toast</Button>
		</div>
	);
}
