import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/palenight';

export /*bundle*/ function Code({ children, className, ...props }: Partial<HTMLElement>) {
	return (
		<code className={`essential__code ${className}`} {...props}>
			<Highlight {...defaultProps} theme={theme} code={children} language="tsx">
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<span className={className} style={style}>
						{tokens.map((line, i) => (
							<div {...getLineProps({ line, key: i })}>
								{line.map((token, key) => (
									<span {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</span>
				)}
			</Highlight>
		</code>
	);
}
