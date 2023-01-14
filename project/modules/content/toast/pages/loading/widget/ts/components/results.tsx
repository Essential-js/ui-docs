import React from 'react';
import { Button } from '@essential/ui/buttons';
import { toast } from '@essential/ui/toast';

export function Results() {
	function handleClick() {
		// Here apply the toast duration
		const loadingToast = toast.loading('Here goes your message', 90000);

		setTimeout(() => {
			toast.remove(loadingToast);
		}, 2000);
	}

	return (
		<div className="results">
			<Button onClick={handleClick}>Show loading toast</Button>
		</div>
	);
}
