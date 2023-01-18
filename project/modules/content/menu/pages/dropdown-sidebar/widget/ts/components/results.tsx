import React from 'react';
import { DropdownSidebar } from '@essential-js/ui/menu';
const logoTest = `https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/225px-Spotify_logo_without_text.svg.png`;

export function Results() {
	return (
		<div className="results">
			<DropdownSidebar logo={<img src={logoTest} />}>
				<li>A</li>
				<li>B</li>
				<li>C</li>
				<li>D</li>
				<li>E</li>
				<li>F</li>
				<li>G</li>
				<li>H</li>
				<li>I</li>
				<li>J</li>
				<li>K</li>
				<li>L</li>
				<li>M</li>
				<li>N</li>
				<li>O</li>
				<li>P</li>
				<li>Q</li>
				<li>R</li>
				<li>S</li>
				<li>T</li>
				<li>U</li>
			</DropdownSidebar>
		</div>
	);
}
