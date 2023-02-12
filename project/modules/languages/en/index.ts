import { Header } from '@essential-js/ui-docs/header';
import { CopyableCode } from '@essential-js/ui/code';
import { Button } from '@essential-js/ui/buttons';
import {
	RefreshCircle,
	Danger,
	SearchNormal1,
	CloseCircle,
	SmsNotification,
	ClipboardText,
} from 'iconsax-react';
import { Modal, ConfirmModal, SuccessModal, ErrorModal, InfoModal } from '@essential-js/ui/modals';
import { ElementTitle as El } from '@essential-js/ui/menu';
import {
	Input as _input,
	ValidateInput as _validateInput,
	Textarea as _texta,
} from '@essential-js/ui/form';
import {
	ValidateInputImplementation,
	ConfirmModalImplementation,
	ErrorModalImplementation,
	InfoModalImplementation,
	SuccessModalImplementation,
	ModalImplementation,
} from './implementations';

// Imports //

// Form
import { default as _404 } from './mdx/404.mdx';

import { default as _Buttons } from './mdx/form/buttons.mdx';
import { default as _Controller } from './mdx/form/controller.mdx';
import { default as _Inputs } from './mdx/form/inputs.mdx';
import { default as _Switch } from './mdx/form/switch.mdx';
import { default as _Textarea } from './mdx/form/textarea.mdx';
import { default as _ValidateInput } from './mdx/form/validate-input.mdx';

// Menu
import { default as _Card } from './mdx/menu/card.mdx';
import { default as _ElementTitle } from './mdx/menu/element-title.mdx';
import { default as _Sidebar } from './mdx/menu/sidebar.mdx';
import { default as _Table } from './mdx/menu/table.mdx';
import { default as _Tabs } from './mdx/menu/tabs.mdx';

// Modals
import { default as _Modals } from './mdx/modals/index.mdx';

// Toast
import { default as _Toast } from './mdx/toast/index.mdx';

// Exports //

// Form
export /*bundle*/ const NotFound = _404;
export /*bundle*/ const Buttons = _Buttons;
export /*bundle*/ const Controller = _Controller;
export /*bundle*/ const Inputs = _Inputs;
export /*bundle*/ const Switch = _Switch;
export /*bundle*/ const Textarea = _Textarea;
export /*bundle*/ const ValidateInput = _ValidateInput;

// Menu
export /*bundle*/ const Card = _Card;
export /*bundle*/ const ElementTitle = _ElementTitle;
export /*bundle*/ const Sideabar = _Sidebar;
export /*bundle*/ const Table = _Table;
export /*bundle*/ const Tabs = _Tabs;

// Modals
export /*bundle*/ const Modals = _Modals;

// Toast
export /*bundle*/ const Toast = _Toast;
