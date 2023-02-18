import React from 'react';
import { Component, IComponent } from './component';
import { ArrowDown2, Box2, ColorSwatch, Element2 } from 'iconsax-react';
import { motion } from 'framer-motion';

export interface ISection {
	subComponents: Array<IComponent>;
	name: string;
	icon: string;
	key: string;
}

const icons = {
	form: ColorSwatch,
	utils: Box2,
	layout: Element2,
};

export function Section({ name, icon, subComponents }: ISection) {
	const [active, setActive] = React.useState<string | null>(null);
	const [isOpen, setIsOpen] = React.useState(true);
	const cls = isOpen ? 'open' : 'closed';

	function toggleOpen() {
		setIsOpen(!isOpen);
	}

	const output = subComponents.map((subComponent: IComponent, index: number) => (
		<Component
			active={active}
			setActive={setActive}
			key={subComponent.name}
			index={index}
			{...subComponent}
		/>
	));

	const SectionIcon = icons[icon];
	const iconColor = !isOpen ? '#6d767b' : '#f2ecff';

	return (
		<motion.div
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.2 }}
			className="section__container">
			<li className={`section__item ${cls}`} onClick={toggleOpen}>
				<SectionIcon className="section__icon" variant="Bold" color={iconColor} />
				<button>{name}</button>
				<div className="arrow__icon-container">
					<ArrowDown2 className="icon" color={iconColor} />
				</div>
			</li>

			{isOpen && output}
		</motion.div>
	);
}