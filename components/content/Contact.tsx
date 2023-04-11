import React from 'react';
import styled from 'styled-components';

import Box from '../box/Box';
import Typography from '../typography/Typography';
import Button from '../button/Button';

const Contact = () => {
	return (
		<Box
			id='CONTACT'
			as='section'
			styles={[
				{
					display: 'flex',
					'flex-direction': 'column',
					gap: '1rem',
					'align-items': 'center',
					'justify-content': 'center',
					height: '100vh',
					position: 'relative',
					'text-align': 'center',
				},
			]}>
			<Typography variant='h1'>Contact Me</Typography>
			<Typography variant='p'>I am always excited to hear about new opportunites.</Typography>
			<Button variant='primary' href='mailto:alexha35@gmail.com'>
				CONTACT ME
			</Button>
		</Box>
	);
};
export default Contact;
