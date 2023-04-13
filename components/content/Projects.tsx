import React, { useRef } from 'react';
import styled from 'styled-components';
import { useInView } from 'framer-motion';

import Box from '../box/Box';
import Typography from '../typography/Typography';

const Projects = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	const isInView = useInView(containerRef);
	// console.log(isInView);

	return (
		<Box
			ref={containerRef}
			id='PROJECTS'
			as='section'
			styles={[
				{
					'min-height': '100vh',
					position: 'relative',
					'padding-block-start': '80px',
					margin: '0 auto',
					'max-width': 'var(--max-width)',
					padding: 'var(--container-padding)',
				},
			]}>
			<Typography variant='h2' styles={[{ 'margin-block-end': '2rem' }, { 'margin-block-end': '4rem' }]}>
				Projects
			</Typography>
			<CardGrid>
				<CardContainer href='https://www.asianduckmn.com/' style={{ gridColumn: 'span 2' }}>
					<Box styles={[{ position: 'relative', overflow: 'hidden' }]}>
						<picture>
							<source type='image/webp' srcSet='/projects/asian-duck.webp' />
							<StyledImage src='/projects/asian-duck.png' alt={'Screenshot of Asian Duck homepage'} loading='lazy' />
						</picture>
					</Box>
					<Typography variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
						Asian Duck
					</Typography>
				</CardContainer>
				<CardContainer href='https://www.evlive.gm.com/' style={{ gridColumn: 'span 3' }}>
					<Box styles={[{ position: 'relative', overflow: 'hidden' }]}>
						<picture>
							<source type='image/webp' srcSet='/projects/evlive.webp' />
							<StyledImage src='/projects/evlive.png' alt={'Screenshot of EV-Live homepage'} loading='lazy' />
						</picture>
					</Box>
					<Typography variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
						EV Live
					</Typography>
				</CardContainer>
				<CardContainer href='https://www.chevrolet.com/electric' style={{ gridColumn: 'span 3' }}>
					<Box styles={[{ position: 'relative', overflow: 'hidden' }]}>
						<picture>
							<source type='image/webp' srcSet='/projects/chevrolet-ev.webp' />
							<StyledImage src='/projects/chevrolet-ev.png' alt={'Screenshot of Chevrolet EV homepage'} loading='lazy' />
						</picture>
					</Box>
					<Typography variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
						Chevrolet EV
					</Typography>
				</CardContainer>
				<CardContainer href='https://github.com/alexha35/my-store' style={{ gridColumn: 'span 2' }}>
					<Box styles={[{ position: 'relative', overflow: 'hidden' }]}>
						<picture>
							<source type='image/webp' srcSet='/projects/my-store.webp' />
							<StyledImage src='/projects/my-store.png' alt={'Screenshot of My-Store homepage'} loading='lazy' />
						</picture>
					</Box>
					<Typography variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
						MY STORE
					</Typography>
				</CardContainer>
				<CardContainer href='https://github.com/alexha35/quiz-app' style={{ gridColumn: 'span 2' }}>
					<Box styles={[{ position: 'relative', overflow: 'hidden' }]}>
						<picture>
							<source type='image/webp' srcSet='/projects/quiz-app.webp' />
							<StyledImage src='/projects/quiz-app.png' alt={'Screenshot of Quiz-App homepage'} loading='lazy' />
						</picture>
					</Box>
					<Typography variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
						Quiz App
					</Typography>
				</CardContainer>
			</CardGrid>
		</Box>
	);
};

export default Projects;

const CardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-auto-rows: auto;
	grid-auto-flow: dense;
	gap: 1rem;
`;

const CardContainer = styled.a`
	width: 100%;
	height: auto;
	background-color: ${(p) => p.theme.backgroundAltColor};
	border-radius: var(--border-radius);
	display: grid;
	grid-template-rows: 1fr 100px;
	overflow: hidden;
`;

const StyledImage = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	object-position: top;
	transition: transform 0.25s ease-in;

	:hover {
		transform: scale(1.05);
	}
`;
