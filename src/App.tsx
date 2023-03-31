import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { GoChevronDown } from 'react-icons/go';
import { motion } from 'framer-motion';

import Header from '../components/header/Header';
import { AppProvider, AppConsumer } from '../context/AppContext';
import { StyledThemeProvider } from '../styles/StyleProvider';
import Typograhpy from '../components/typography/Typography';
import TypewriterWrapper from '../components/typewriter/Typewriter';
import Typography from '../components/typography/Typography';
import Box from '../components/box/Box';
import Button from '../components/button/Button';

function App() {
	const prevScrollY = useRef(0);
	const containerRef = useRef<HTMLElement>(null);
	const nameRef = useRef<HTMLElement>(null);
	const [goingUp, setGoingUp] = useState(true);
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (prevScrollY.current + 14 < currentScrollY && goingUp) {
				setGoingUp(false);
			}
			if (prevScrollY.current > currentScrollY && !goingUp) {
				setGoingUp(true);
			}

			prevScrollY.current = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => window.removeEventListener('scroll', handleScroll);
	}, [goingUp]);

	return (
		<AppProvider scrollUp={goingUp}>
			<StyledThemeProvider>
				<AppConsumer>
					{({ mounted, theme, setHeaderActive }: { mounted: boolean; theme: 'light' | 'dark'; setHeaderActive: React.Dispatch<React.SetStateAction<boolean>> }) =>
						mounted && (
							<Container ref={containerRef} onClick={() => setHeaderActive(false)}>
								<Header />
								<Box animate={{ scale: 2 }} as='section' style={[{ display: 'grid', 'place-items': 'center', height: '100vh', position: 'relative' }]}>
									<InnerContainer>
										<Typography ref={nameRef} variant='h1' animate={{ x: 102 }}>
											Alex Ha
										</Typography>
										<FlexContainerRow>
											<Typograhpy variant='h2'>I am a </Typograhpy>
											<TypewriterWrapper variant='h2' />
										</FlexContainerRow>
									</InnerContainer>
									<Box style={[{ position: 'absolute', bottom: '2rem', display: 'flex', 'flex-direction': 'column', 'align-items': 'center', gap: '0.5rem' }]}>
										<Typograhpy variant='p' styles={[{ 'font-size': '12px' }]}>
											View projects
										</Typograhpy>
										<GoChevronDown size={24} color={theme === 'light' ? 'var(--typography-black)' : 'var(--typography-white)'} />
									</Box>
								</Box>
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
											<Typograhpy variant='h2'>A little about me</Typograhpy>
											<Typograhpy variant='p'>
												Hi! I am currently a software engineer at General Motors. I graduated from University of Minnesota in 2019 with a degree in Information Technology
												Infrustructure. My interest in web development started back in my senior year of college, when I decided to build my girlfriend's parents restaurant
												website. Outside of coding, I enjoy playing/watching basketball, traveling and training my dog.
											</Typograhpy>
										</Box>
										<Box style={[{ 'grid-area': '1/1', position: 'relative' }, { 'grid-area': '1/2' }]}>
											<img src='/images/MeAndMyDawgs.jpg' style={{ objectFit: 'contain', width: '100%', borderRadius: 'var(--border-radius)' }} />
										</Box>
									</Box>
								</Box>
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
									<Typograhpy variant='h2' styles={[{ 'margin-block-end': '2rem' }, { 'margin-block-end': '4rem' }]}>
										Projects
									</Typograhpy>
									<CardGrid>
										<CardContainer>
											<Box style={[{ position: 'relative', overflow: 'hidden' }]}>
												<StyledImage src='/projects/asian-duck.png' />
											</Box>
											<Typograhpy variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
												Asian Duck
											</Typograhpy>
										</CardContainer>
										<CardContainer>
											<Box style={[{ position: 'relative', overflow: 'hidden' }]}>
												<StyledImage src='/projects/chevrolet-ev.png' />
											</Box>
											<Typograhpy variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
												Chevrolet EV
											</Typograhpy>
										</CardContainer>
										<CardContainer>
											<Box style={[{ position: 'relative', overflow: 'hidden' }]}>
												<StyledImage src='/projects/evlive.png' />
											</Box>
											<Typograhpy variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
												EV Live
											</Typograhpy>
										</CardContainer>
										<CardContainer>
											<Box style={[{ position: 'relative', overflow: 'hidden' }]}>
												<StyledImage src='/projects/my-store.png' />
											</Box>
											<Typograhpy variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
												MY STORE
											</Typograhpy>
										</CardContainer>
										<CardContainer>
											<Box style={[{ position: 'relative', overflow: 'hidden' }]}>
												<StyledImage src='/projects/quiz-app.png' />
											</Box>
											<Typograhpy variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
												Quiz App
											</Typograhpy>
										</CardContainer>
									</CardGrid>
								</Box>
								<Box
									as='section'
									style={[
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
									<Typograhpy variant='p'>I am always excited to hear about new opportunites.</Typograhpy>
									<Button variant='primary' href='mailto:alexha35@gmail.com'>
										CONTACT ME
									</Button>
								</Box>
							</Container>
						)
					}
				</AppConsumer>
			</StyledThemeProvider>
		</AppProvider>
	);
}

export default App;

const Container = styled.main`
	background-color: ${(p) => p.theme.backgroundColor};
`;

const InnerContainer = styled.div`
	min-width: clamp(297px, 90%, 584px);
	text-align: center;
`;

const FlexContainerRow = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0 auto;
	gap: 10px;
	justify-content: center;
`;

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
