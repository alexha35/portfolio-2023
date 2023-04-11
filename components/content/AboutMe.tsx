import React, { useEffect, useRef } from 'react';

import Box from '../box/Box';
import Typography from '../typography/Typography';
import { useAnimation, useInView } from 'framer-motion';

const containerVariant = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
	},
};

const fadeRight = {
	hidden: { x: -200, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { ease: 'easeIn', duration: 0.5 },
	},
};

const fadeLeft = {
	hidden: { x: 200, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { ease: 'easeIn', duration: 0.5 },
	},
};

const AboutMe = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const controls = useAnimation();

	const isInView = useInView(containerRef);

	useEffect(() => {
		controls.start('containerVariant');
	}, [isInView]);

	console.log(isInView);

	return (
		<Box
			id='ABOUT-ME'
			as='section'
			styles={[
				{
					height: '100vh',
					position: 'relative',
				},
			]}>
			<div
				style={{
					height: '100%',
					width: '100%',
					backgroundColor: 'var(--primary)',
					clipPath: 'polygon(0px 100%, 100% 0px, 100% 100%, 0px 100%)',
					position: 'absolute',
					top: '0',
					left: '0',
				}}
			/>
			<Box
				ref={containerRef}
				variants={containerVariant}
				initial='hidden'
				animate='visible'
				styles={[
					{
						display: 'grid',
						margin: '0 auto',
						'max-width': 'var(--max-width)',
						padding: 'var(--container-padding)',
						height: '100%',
						gap: '2rem',
						'grid-template-columns': '1fr',
						'grid-template-rows': 'min-content',
					},
					{
						'grid-template-columns': '1fr 1fr',
						'grid-template-rows': '1fr',
					},
				]}>
				<Box styles={[{ display: 'flex', 'flex-direction': 'column', gap: '2rem', 'grid-area': '2/1', position: 'relative' }, { 'grid-area': '1/1' }]} variants={fadeRight}>
					<Typography variant='h2'>A little about me</Typography>
					<Typography variant='p'>
						Hi! I am currently a software engineer at General Motors. I graduated from University of Minnesota in 2019 with a degree in Information Technology Infrustructure. My goal is to
						create exceptional user experiences by building intuitive, responsive, and scalable web applications. I am always up to date with latest web technologies and best practices,
						which allows me to develop fast and performant web applications.
					</Typography>
				</Box>
				<Box styles={[{ 'grid-area': '1/1', position: 'relative' }, { 'grid-area': '1/2' }]} variants={fadeLeft}>
					<picture>
						<source type='image/jpg' srcSet='/images/MeAndMyDawgs.jpg' />
						<img src='/images/MeAndMyDawgs.webp' style={{ objectFit: 'contain', width: '100%', borderRadius: 'var(--border-radius)' }} />
					</picture>
				</Box>
			</Box>
		</Box>
	);
};

export default AboutMe;
