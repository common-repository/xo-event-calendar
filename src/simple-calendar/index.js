import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './style.scss';

import Edit from './edit';
import Icon from './icon';

registerBlockType( 'xo-event-calendar/simple-calendar', {
	title: __( 'Simple Calendar', 'xo-event-calendar' ),
	description: __(
		'Simple calendar for XO Event Calendar.',
		'xo-event-calendar'
	),
	edit: Edit,
	save: () => {
		return null;
	},
	icon: {
		foreground: '#782121',
		src: Icon,
	},
} );
