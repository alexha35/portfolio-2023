import React from 'react';
import { GoChevronDown } from 'react-icons/go';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Box from '../box/Box';
import Typography from '../typography/Typography';
import TypewriterWrapper from '../typewriter/Typewriter';

const Masthead = ({ theme }: { theme: 'light' | 'dark' }) => {
	return (
		<Box as={motion.section} style={[{ display: 'grid', 'place-items': 'center', height: '100vh', position: 'relative' }]}>
			<InnerContainer>
				<Typography variant='h1'>Alex Ha</Typography>
				<Box style={[{ display: 'flex', 'flex-direction': 'rom', margin: '0 auto', gap: '10px', 'justify-content': 'center' }]}>
					<Typography variant='h2'>I am a </Typography>
					<TypewriterWrapper variant='h2' />
				</Box>
			</InnerContainer>
			<Box style={[{ position: 'absolute', bottom: '2rem', display: 'flex', 'flex-direction': 'column', 'align-items': 'center', gap: '0.5rem' }]}>
				<Typography variant='p' styles={[{ 'font-size': '12px' }]}>
					View projects
				</Typography>
				<GoChevronDown size={24} color={theme === 'light' ? 'var(--typography-black)' : 'var(--typography-white)'} />
			</Box>
		</Box>
	);
};

export default Masthead;

const InnerContainer = styled.div`
	min-width: clamp(297px, 90%, 584px);
	text-align: center;
`;
