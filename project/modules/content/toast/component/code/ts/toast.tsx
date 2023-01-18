import React, { JSX } from 'react';
import { IToast, ToastTypes, toast } from './model';

interface Props {
	key: string;
	type: ToastTypes;
	message: string;
	duration?: number;
	id: string;
	icon: JSX.Element;
}

const DEFAULT_DURATION = 3000;

export /*bundle*/ function Toast({ type, message, duration, id, icon }: Props) {
	const toastRef = React.useRef<HTMLDivElement>(null);
	const Icon = icon;

	React.useEffect(() => {
		if (toastRef.current) toastRef.current.classList.add('enter');
		return () => {
			if (toastRef.current) toastRef.current.classList.remove('enter');
		};
	}, [toastRef.current]);

	React.useEffect(() => {
		duration = duration ?? DEFAULT_DURATION;

		setTimeout(() => {
			toast.current = toast.current.filter((item: IToast) => item.id !== id);
		}, duration);
	}, [duration]);

	return (
		<article ref={toastRef} className={`toast ${type}`}>
			<Icon style={{ width: '25px', height: '25px' }} className="icon" />
			<p className="message">{message}</p>
		</article>
	);
}
