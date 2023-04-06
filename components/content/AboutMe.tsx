import React from 'react';

import Box from '../box/Box';
import Typography from '../typography/Typography';

const AboutMe = () => {
	return (
		<Box
			as='section'
			style={[
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
				style={[
					{
						display: 'grid',
						margin: '0 auto',
						'max-width': 'var(--max-width)',
						padding: 'var(--container-padding)',
						height: '100%',
						gap: '2rem',
						'grid-template-columns': '1fr',
						'grid-template-rows': 'auto',
					},
					{
						'grid-template-columns': '1fr 1fr',
						'grid-template-rows': '1fr',
					},
				]}>
				<Box style={[{ display: 'flex', 'flex-direction': 'column', gap: '2rem', 'grid-area': '2/1', position: 'relative' }, { 'grid-area': '1/1' }]}>
					<Typography variant='h2'>A little about me</Typography>
					<Typography variant='p'>
						Hi! I am currently a software engineer at General Motors. I graduated from University of Minnesota in 2019 with a degree in Information Technology Infrustructure. My interest
						in web development started back in my senior year of college, when I decided to build my girlfriend's parents restaurant website. Outside of coding, I enjoy playing/watching
						basketball, traveling and training my dog.
					</Typography>
				</Box>
				<Box style={[{ 'grid-area': '1/1', position: 'relative' }, { 'grid-area': '1/2' }]}>
					<img src='/images/MeAndMyDawgs.jpg' style={{ objectFit: 'contain', width: '100%', borderRadius: 'var(--border-radius)' }} />
				</Box>
			</Box>
		</Box>
	);
};

export default AboutMe;
