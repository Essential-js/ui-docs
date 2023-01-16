import * as React from 'react';
import { Input } from '../input';
import { Textarea } from '../textarea';

class FormController {
	select: React.FC = HTMLSelectElement;
	textarea: React.FC = Textarea;
	radioItem: React.FC = Input;
	checkItem: React.FC = Input;
	default: React.FC = Input;

	setComponent(type: string, component: React.Component) {
		this[type] = component;
	}
}

export /*bundle*/ const formController = new FormController();
