import React from 'react';
import { Button } from '@essential/ui/buttons';
import { toast } from '@essential/ui/toast';

export function Results() {
	function show() {
		toast.success('Here goes your message');
	}

	return (
		<div className="results">
			<Button onClick={show}>Show toast</Button>
		</div>
	);
}
