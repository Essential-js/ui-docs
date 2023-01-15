import React from 'react';

interface Props extends Partial<HTMLElement> {
	onHide?: () => void;
}

export /*bundle*/ function Modal({ onHide, children, className, ...props }: Props) {
	const modalRef = React.useRef(null);

	function hide(event: React.MouseEvent<HTMLElement>) {
		if (event.target === modalRef.current) return;
		onHide();
	}

	return (
		<main onClick={hide} className="essential__modal" {...props}>
			<article className={className} ref={modalRef}>
				{children}
			</article>
		</main>
	);
}
