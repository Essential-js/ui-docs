import { JSX } from 'react';
import { TickCircle, CloseCircle, RefreshCircle, InfoCircle } from 'iconsax-react';
import { nanoid } from 'nanoid';
import { ReactiveModel } from '@essential-js/ui/reactive-model';

export /*bundle*/ type ToastTypes = 'success' | 'error' | 'info' | 'loading';
export /*bundle*/ interface IToast {
	id: string;
	message: string;
	type: ToastTypes;
	duration?: number;
	icon: JSX.Element;
}

class Toast extends ReactiveModel {
	#current: Array<IToast | undefined>;
	icons = {
		error: CloseCircle,
		success: TickCircle,
		info: InfoCircle,
		loading: RefreshCircle,
	};

	get current() {
		return this.#current;
	}

	set current(newValue: Array<IToast | undefined>) {
		this.#current = newValue;
		this.triggerEvent('current-toasts-changed');
	}

	constructor() {
		super();
		this.#current = [];
	}

	#add(type: ToastTypes, message: string, duration: number) {
		const newToast: IToast = {
			id: nanoid(),
			message,
			type,
			duration,
			icon: this.icons[type],
		};

		this.#current = [...this.#current, newToast];
		this.triggerEvent('current-toasts-changed');
		return newToast.id;
	}

	remove(toastId: string) {
		this.#current = this.#current.filter((toast: IToast) => toast.id !== toastId);
		this.triggerEvent('current-toasts-changed');
	}

	success(message: string, duration: number) {
		return this.#add('success', message, duration);
	}

	error(message: string, duration: number) {
		return this.#add('error', message, duration);
	}

	info(message: string, duration: number) {
		return this.#add('info', message, duration);
	}

	loading(message: string, duration: number) {
		return this.#add('loading', message, duration);
	}
}

export /*bundle*/ const toast = new Toast();
