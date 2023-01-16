import * as React from 'react';
import { formController } from './model';

interface Props {
	template: Array<any> | any;
}

export /*bundle*/ function Controller({ template }: Props) {
	const isTemplateAnArray = Array.isArray(template);
	const SingleInput = (!isTemplateAnArray && formController[template.type]) ?? formController.default;

	const inputs =
		isTemplateAnArray &&
		template.map((input) => {
			const Element = formController[input.type] ?? formController.default;
			return <Element key={input.name} {...input} _components={formController} />;
		});

	const output = isTemplateAnArray ? inputs : <SingleInput {...template} />;
	return <>{output}</>;
}
