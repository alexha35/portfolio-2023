import React, { useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

import Box from '../box/Box';
import Typography from '../typography/Typography';
import TypewriterWrapper from '../typewriter/Typewriter';

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

const Masthead = ({ theme }: { theme: 'light' | 'dark' }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const isInView = useInView(containerRef, {
		margin: '-90% -0% 0%',
	});

	return (
		<Box
			id='#'
			ref={containerRef}
			as={motion.section}
			styles={[{ display: 'grid', 'place-items': 'center', height: '100vh', position: 'relative' }]}
			variants={containerVariant}
			initial='hidden'
			animate='visible'>
			<InnerContainer>
				<Typography as={motion.h1} variants={item}>
					Alex Ha
				</Typography>
				<Box styles={[{ display: 'flex', 'flex-direction': 'rom', margin: '0 auto', gap: '10px', 'justify-content': 'center' }]} variants={item}>
					<Typography variant='h2'>I am a </Typography>
					<TypewriterWrapper variant='h2' />
				</Box>
			</InnerContainer>
			<Box
				href='#PROJECTS'
				as={motion.a}
				styles={[{ position: 'absolute', bottom: '2rem', display: 'flex', 'flex-direction': 'column', 'align-items': 'center', gap: '0.5rem' }]}
				initial={{
					opacity: 0.7,
					y: 0,
				}}
				animate={{
					opacity: 1,
					y: 10,
				}}
				transition={{
					duration: 1,
					repeat: Infinity,
					repeatType: 'mirror',
				}}>
				<Box
					styles={[{ 'flex-direction': 'column', 'align-items': 'center' }]}
					style={{
						display: isInView ? 'flex' : 'none',
					}}>
					<Typography variant='p' style={{}} styles={[{ 'font-size': '12px' }]}>
						View projects
					</Typography>
					<GoChevronDown size={24} color={theme === 'light' ? 'var(--typography-black)' : 'var(--typography-white)'} />
				</Box>
			</Box>
		</Box>
	);
};

export default Masthead;

const InnerContainer = styled.div`
	min-width: clamp(297px, 90%, 584px);
	text-align: center;
`;
