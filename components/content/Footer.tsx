import React from 'react';
import { motion } from 'framer-motion';

import Box from '../box/Box';
import Typography from '../typography/Typography';

const Footer = () => {
	return (
		<Box as={motion.footer} styles={[{ display: 'flex', 'justify-content': 'center', 'background-color': 'var(--primary)', padding: '1rem' }]}>
			<Typography variant='p' styles={[{ 'font-size': '12px ' }]}>
				Designed and Buit By Alex Ha 🛠️
			</Typography>
		</Box>
	);
};

export default Footer;
