import { JSX } from 'react';
import { TickCircle, CloseCircle, RefreshCircle, InfoCircle } from 'iconsax-react';
import { nanoid } from 'nanoid';
import { ReactiveModel } from '@essential-js/ui/reactive-model';

export /*bundle*/ interface IToast {
	id: string;
	message: string;
	type: string;
	duration?: number;
	icon: JSX.Element;
}

class Toast extends ReactiveModel {
	#current: Array<IToast | undefined>;
	#icons = {
		error: CloseCircle,
		success: TickCircle,
		info: InfoCircle,
		loading: RefreshCircle,
	};

	#defaultTypes = ['warning', 'info', 'success', 'error', 'loading'];

	get current() {
		return this.#current;
	}

	set current(newValue: Array<IToast | undefined>) {
		this.#current = newValue;
		this.triggerEvent('current-toasts-changed');
	}

	constructor() {
		super();

		this.#defaultTypes.map((type) => {
			this.set(type);
		});

		this.#current = [];
	}

	#add(type: string, message: string, duration: number) {
		const newToast: IToast = {
			id: nanoid(),
			message,
			type,
			duration,
			icon: this.#icons[type],
		};

		this.#current = [...this.#current, newToast];
		this.triggerEvent('current-toasts-changed');
		return newToast.id;
	}

	remove(toastId: string) {
		this.#current = this.#current.filter((toast: IToast) => toast.id !== toastId);
		this.triggerEvent('current-toasts-changed');
	}

	set(type: string) {
		this[type] = (message: string, duration: number) => this.#add(type, message, duration);
	}

	setIcon(iconName: string, icon: JSX.Element) {
		this.#icons[iconName] = icon;
	}
}

export /*bundle*/ const toast = new Toast();
