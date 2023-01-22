import React from 'react';

interface Props extends Partial<HTMLElement> {
	onHide?: () => void;
}

const CLOSE_DELAY = 100;

export /*bundle*/ function Modal({ onHide, children, className, ...props }: Props) {
	const modalRef = React.useRef(null);

	React.useEffect(() => {
		if (modalRef.current) modalRef.current.classList.add('appear');
	}, [modalRef.current]);

	function hide(event: React.MouseEvent<HTMLElement>) {
		if (event.target === modalRef.current || modalRef.current.contains(event.target)) return;

		modalRef.current.classList.remove('appear');
		modalRef.current.classList.add('disappear');
		setTimeout(() => {
			onHide();
		}, CLOSE_DELAY);
	}

	return (
		<main onClick={hide} className="essential__modal" {...props}>
			<article className={`modal ${className}`} ref={modalRef}>
				{children}
			</article>
		</main>
	);
}
