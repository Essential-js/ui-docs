import React from 'react';
import { Button } from '@essential-js/ui/buttons';
import { toast } from '@essential-js/ui/toast';

export function Results() {
	function handleClick() {
		toast.error('Something went wrong');
	}

	return (
		<div className="results">
			<Button onClick={handleClick}>Show error toast</Button>
		</div>
	);
}
