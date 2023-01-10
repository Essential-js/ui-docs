import { Events } from '@beyond-js/kernel/core';

export /*bundle*/
class ReactiveModel extends Events {
	#ready: boolean;
	get ready(): boolean {
		return this.#ready;
	}

	#fetching: boolean;
	get fetching(): boolean {
		return this.#fetching;
	}

	set fetching(value: boolean) {
		if (value === this.#fetching) return;
		this.#fetching = value;
		this.triggerEvent();
	}

	#fetched: boolean;
	get fetched(): boolean {
		return this.#fetched;
	}

	#processing: boolean;
	get processing(): boolean {
		return this.#processing;
	}

	#processed: boolean;
	get processed(): boolean {
		return this.#processed;
	}

	#loaded: boolean;
	get loaded(): boolean {
		return this.#loaded;
	}

	triggerEvent = (event: string = 'change'): void => {
		this.trigger(event);
	};

	/**
	 * set value in a private property
	 * @param property
	 * @param value
	 */
	#set(property, value): void {
		let props = {};
		if (property && value !== 'undefined') props[property] = value;
		else props = property;
		let updated: boolean = false;

		for (const prop in props) {
			const key: string = `#${prop}`;
			if (!this.hasOwnProperty(key)) continue; //same value on store

			if (this[key] === props[prop]) continue;
			this[key] = props[prop];
			updated = true;
		}

		if (updated) this.triggerEvent();
	}

	getProperties() {
		const props = {};
		Object.keys(this).forEach((property) => (props[property.replace('#', '')] = this[property]));
		return props;
	}
}
