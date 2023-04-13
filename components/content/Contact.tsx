import React, { useRef } from 'react';
import styled from 'styled-components';

import Box from '../box/Box';
import Typography from '../typography/Typography';
import Button from '../button/Button';
import { motion } from 'framer-motion';

const containerVariant = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
		},
	},
};

const item = {
	hidden: { y: 100, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { ease: 'easeIn', duration: 0.5 },
	},
};

const Contact = () => {
	return (
		<Box
			id='CONTACT'
			as={motion.section}
			variants={containerVariant}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
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
					margin: '0 auto',
					'max-width': 'var(--max-width)',
					padding: 'var(--container-padding)',
				},
			]}>
			<Typography variant={motion.h1} variants={item}>
				Contact Me
			</Typography>
			<Typography variant={motion.p} variants={item}>
				I am always excited to hear about new opportunites.
			</Typography>
			<Button as={motion.a} variant='primary' href='mailto:alexha35@gmail.com' variants={item}>
				CONTACT ME
			</Button>
		</Box>
	);
};
export default Contact;
