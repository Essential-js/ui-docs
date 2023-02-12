import React from 'react';
import { Eye, EyeSlash } from 'iconsax-react';

interface Props extends Partial<HTMLInputElement> {
	label: string;
	inputClassName: string;
	after?: any;
	before?: any;
}

const PASSWORD_TYPE = 'password';
const TEXT_TYPE = 'text';

export /*bundle*/ function Input({
	label,
	after = null,
	before = null,
	inputClassName,
	...props
}: Props) {
	const [customType, setCustomType] = React.useState(props.type);
	const [showPassword, setShowPassword] = React.useState(false);
	const isPasswordType = props.type === PASSWORD_TYPE;

	function toggleDisplayPassword() {
		setShowPassword(!showPassword);

		const newType = customType === PASSWORD_TYPE ? TEXT_TYPE : PASSWORD_TYPE;
		setCustomType(newType);
	}

	const Icon = isPasswordType && (showPassword ? EyeSlash : Eye);

	return (
		<div className={`essential__input ${props.className}`}>
			{before && <div className="before">{before}</div>}
			<div className="input__container">
				<input {...props} type={customType} className={inputClassName} />
				{Icon && <Icon className="password__icon" onClick={toggleDisplayPassword} />}
				<label htmlFor={props.id}>{label}</label>
			</div>
			{after && <div className="after">{after}</div>}
		</div>
	);
}
