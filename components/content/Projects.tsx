import React from 'react';
import styled from 'styled-components';

import Box from '../box/Box';
import Typography from '../typography/Typography';

const Projects = () => {
	return (
		<Box
			as='section'
			style={[
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
				<CardContainer>
					<Box style={[{ position: 'relative', overflow: 'hidden' }]}>
						<StyledImage src='/projects/asian-duck.png' />
					</Box>
					<Typography variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
						Asian Duck
					</Typography>
				</CardContainer>
				<CardContainer>
					<Box style={[{ position: 'relative', overflow: 'hidden' }]}>
						<StyledImage src='/projects/chevrolet-ev.png' />
					</Box>
					<Typography variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
						Chevrolet EV
					</Typography>
				</CardContainer>
				<CardContainer>
					<Box style={[{ position: 'relative', overflow: 'hidden' }]}>
						<StyledImage src='/projects/evlive.png' />
					</Box>
					<Typography variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
						EV Live
					</Typography>
				</CardContainer>
				<CardContainer>
					<Box style={[{ position: 'relative', overflow: 'hidden' }]}>
						<StyledImage src='/projects/my-store.png' />
					</Box>
					<Typography variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
						MY STORE
					</Typography>
				</CardContainer>
				<CardContainer>
					<Box style={[{ position: 'relative', overflow: 'hidden' }]}>
						<StyledImage src='/projects/quiz-app.png' />
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
	grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
	gap: 1rem;
`;

const CardContainer = styled.div`
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
