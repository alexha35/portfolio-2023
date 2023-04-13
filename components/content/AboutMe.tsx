import React from 'react';

import Box from '../box/Box';
import Typography from '../typography/Typography';

const fadeRight = {
	hidden: { x: -200, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { ease: 'easeIn', duration: 0.7 },
	},
};

const fadeLeft = {
	hidden: { x: 200, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { ease: 'easeIn', duration: 0.7 },
	},
};

const AboutMe = () => {
	return (
		<Box
			id='ABOUT-ME'
			as='section'
			styles={[
				{
					// height: '100vh',
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
				styles={[
					{
						display: 'grid',
						margin: '0 auto',
						'max-width': 'var(--max-width)',
						padding: 'var(--container-padding)',
						gap: '2rem',
						'grid-template-columns': '1fr',
						'grid-template-rows': 'min-content',
					},
					{
						'grid-template-columns': '1fr 1fr',
						'grid-template-rows': '1fr',
						gap: '4rem',
					},
				]}>
				<Box
					styles={[{ display: 'flex', 'flex-direction': 'column', gap: '2rem', 'grid-area': '2/1', position: 'relative' }, { 'grid-area': '1/1' }]}
					initial={fadeRight.hidden}
					whileInView={fadeRight.visible}
					viewport={{ once: true }}>
					<Typography variant='h2'>A little about me</Typography>
					<Typography variant='p'>
						Hi! I am currently a software engineer at General Motors. I graduated from University of Minnesota in 2019 with a degree in Information Technology Infrustructure. My goal is to
						create exceptional user experiences by building intuitive, responsive, and scalable web applications. I am always up to date with latest web technologies and best practices,
						which allows me to develop fast and performant web applications.
					</Typography>
				</Box>
				<Box styles={[{ 'grid-area': '1/1', position: 'relative' }, { 'grid-area': '1/2' }]} initial={fadeLeft.hidden} whileInView={fadeLeft.visible} viewport={{ once: true }}>
					<picture>
						<source type='image/webp' srcSet='/images/MeAndMyDawgs.webp' />
						<img src='/images/MeAndMyDawgs.jpg' alt='Alex and his dogs.' style={{ objectFit: 'contain', width: '100%', borderRadius: 'var(--border-radius)' }} loading='lazy' />
					</picture>
				</Box>
			</Box>
		</Box>
	);
};

export default AboutMe;
