import React from 'react';

interface Props extends HTMLElement {
	message: string;
	aparitionTime?: number;
	offsetY?: number;
	offsetX?: number;
}

const DEFAULT_APARITION_TIME = 500;
const DEFAULT_OFFSET = 10;

export /*bundle*/ function ElementTitle({ offsetX = DEFAULT_OFFSET, offsetY = DEFAULT_OFFSET, children, aparitionTime = DEFAULT_APARITION_TIME, message, ...props }: Props) {
	const [showTooltip, setShowTooltip] = React.useState(false);
	const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
	const tooltipRef = React.useRef(null);
	const messageRef = React.useRef(null);

	React.useEffect(() => {
		const handleClickOutside = (event) => {
			if (tooltipRef.current && messageRef.current && !tooltipRef.current.contains(event.target) && !messageRef.current.contains(event.target)) {
				setShowTooltip(false);
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const handleMouseMove = (event) => {
		setMousePosition({ x: event.pageX, y: event.pageY });
	};

	function handleMouseEnter() {
		setTimeout(() => {
			setShowTooltip(true);
		}, aparitionTime ?? DEFAULT_APARITION_TIME);
	}
	function handleMouseLeave() {
		setShowTooltip(false);
	}

	return (
		<div {...props} ref={tooltipRef} className="essential__title" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
			<div ref={messageRef}>{children}</div>
			{showTooltip && (
				<div
					className="title__element"
					style={{
						top: mousePosition.y + offsetY,
						left: mousePosition.x + offsetX,
					}}>
					{message}
				</div>
			)}
		</div>
	);
}
