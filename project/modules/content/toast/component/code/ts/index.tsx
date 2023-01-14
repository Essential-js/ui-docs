import React, { JSX } from 'react';
import { useBinder } from '@essential/ui/hooks';
import { IToast, toast } from './model';
import { Toast } from './toast';

interface Props extends HTMLDivElement {
	className: string;
	position: Partial<IPosition>;
}

interface IPosition {
	top: string;
	left: string;
	right: string;
	bottom: string;
}

export /*bundle*/ function Toasts({ position = { bottom: '1rem', right: '1rem' }, className, ...props }: Partial<Props>) {
	const [items, setItems] = React.useState<Array<IToast | undefined>>([]);

	useBinder([toast], () => setItems(toast.current), 'current-toasts-changed');

	const elements = items.map((item: IToast) => <Toast key={item.id} {...item} />);

	const contextValue = {
		items,
		setItems,
	};
	return (
		<div style={position} className={`essential__toasts ${className}`} {...props}>
			{elements}
		</div>
	);
}
