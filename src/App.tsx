import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { GoChevronDown } from 'react-icons/go';

import Header from '../components/header/Header';
import { AppProvider, AppConsumer } from '../context/AppContext';
import { StyledThemeProvider } from '../styles/StyleProvider';
import Typograhpy from '../components/typography/Typography';
import TypewriterWrapper from '../components/typewriter/Typewriter';
import Typography from '../components/typography/Typography';
import { Motion } from '../components/motion/Motion';
import Button from '../components/button/Button';

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

const CardContainer = styled.div`
	width: 420px;
	height: 300px;
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
								<section style={{ display: 'grid', placeItems: 'center', height: '100vh', position: 'relative' }}>
									<InnerContainer>
										{/* <Motion containerRef={containerRef} to={{ opacity: 0, y: -100 }} from={{ opacity: 1, y: 0, duration: 1.5, ease: 'power2' }}> */}
										<Typography ref={nameRef} variant='h1'>
											Alex Ha
										</Typography>
										{/* </Motion>
										
										 */}
										<FlexContainerRow>
											<Typograhpy variant='h2'>I am a </Typograhpy>
											<TypewriterWrapper variant='h2' />
										</FlexContainerRow>
									</InnerContainer>
									<div style={{ position: 'absolute', bottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
										<Typograhpy variant='p' styles={[{ 'font-size': '12px' }]}>
											View projects
										</Typograhpy>
										<GoChevronDown size={24} color={theme === 'light' ? 'var(--typography-black)' : 'var(--typography-white)'} />
									</div>
								</section>
								<section
									style={{
										height: '100vh',
										position: 'relative',
									}}>
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
									<div
										style={{
											display: 'grid',
											gridTemplateColumns: '1fr 1fr',
											gridTemplateRows: '1fr',
											margin: '0 auto',
											maxWidth: 'var(--max-width)',
											padding: 'var(--container-padding)',
											height: '100%',
											gap: '2rem',
										}}>
										<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', gridArea: '1/1' }}>
											<Typograhpy variant='h2'>A little about me</Typograhpy>
											<Typograhpy variant='p'>
												Hi! I am currently a software engineer at General Motors. I graduated from University of Minnesota in 2019 with a degree in Information Technology
												Infrustructure. My interest in web development started back in my senior year of college, when I decided to build my girlfriend's parents restaurant
												website. Outside of coding, I enjoy playing/watching basketball, traveling and training my dog.
											</Typograhpy>
										</div>
										<div style={{ display: 'flex', flexDirection: 'column', gridArea: '1/2', position: 'relative' }}>
											<img src='/images/MeAndMyDawgs.jpg' style={{ objectFit: 'cover', position: 'absolute', width: '100%', borderRadius: 'var(--border-radius)' }} />
										</div>
									</div>
								</section>
								<section
									style={{
										height: '100vh',
										position: 'relative',
										paddingBlockStart: '80px',
										margin: '0 auto',
										maxWidth: 'var(--max-width)',
										padding: 'var(--container-padding)',
									}}>
									<Typograhpy variant='h2' styles={[{ 'margin-block-end': '4rem' }]}>
										Projects
									</Typograhpy>
									<div
										style={{
											display: 'grid',
											gridTemplateColumns: 'repeat(3,1fr)',
											gap: '1rem',
										}}>
										<CardContainer>
											<div style={{ position: 'relative', overflow: 'hidden' }}>
												<StyledImage src='/projects/asian-duck.png' />
											</div>
											<Typograhpy variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
												Asian Duck
											</Typograhpy>
										</CardContainer>
										<CardContainer>
											<div style={{ position: 'relative', overflow: 'hidden' }}>
												<StyledImage src='/projects/chevrolet-ev.png' />
											</div>
											<Typograhpy variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
												Chevrolet EV
											</Typograhpy>
										</CardContainer>
										<CardContainer>
											<div style={{ position: 'relative', overflow: 'hidden' }}>
												<StyledImage src='/projects/evlive.png' />
											</div>
											<Typograhpy variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
												EV Live
											</Typograhpy>
										</CardContainer>
										<CardContainer>
											<div style={{ position: 'relative', overflow: 'hidden' }}>
												<StyledImage src='/projects/my-store.png' />
											</div>
											<Typograhpy variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
												MY STORE
											</Typograhpy>
										</CardContainer>
										<CardContainer>
											<div style={{ position: 'relative', overflow: 'hidden' }}>
												<StyledImage src='/projects/quiz-app.png' />
											</div>
											<Typograhpy variant='h4' styles={[{ 'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', padding: '1rem' }]}>
												Quiz App
											</Typograhpy>
										</CardContainer>
									</div>
								</section>
								<section
									style={{
										display: 'flex',
										flexDirection: 'column',
										gap: '1rem',
										alignItems: 'center',
										justifyContent: 'center',
										height: '100vh',
										position: 'relative',
										textAlign: 'center',
									}}>
									<Typography variant='h1'>Contact Me</Typography>
									<Typograhpy variant='p'>I am always excited to hear about new opportunites.</Typograhpy>
									<Button variant='primary' href='mailto:alexha35@gmail.com'>
										CONTACT ME
									</Button>
								</section>
							</Container>
						)
					}
				</AppConsumer>
			</StyledThemeProvider>
		</AppProvider>
	);
}

export default App;
