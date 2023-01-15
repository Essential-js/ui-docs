import React from 'react';
import { Button } from '@essential/ui/buttons';
import { toast } from '@essential/ui/toast';

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
