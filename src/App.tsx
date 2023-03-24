import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import './App.css';
import Header from '../components/header/Header';
import { AppProvider, AppConsumer } from '../context/AppContext';
import { StyledThemeProvider } from '../styles/StyleProvider';
import Typograhpy from '../components/typography/Typography';
import TypewriterWrapper from '../components/typewriter/Typewriter';
import Typography from '../components/typography/Typography';
import { Motion } from '../components/motion/Motion';

const Container = styled.main`
	background-color: ${(p) => p.theme.backgroundColor};
`;

const InnerContainer = styled.div`
	min-width: clamp(297px, 90%, 584px);
`;

const FlexContainerRow = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0 auto;
	gap: 10px;
	text-align: left;
`;

function App() {
	const prevScrollY = useRef(0);
	const containerRef = useRef<HTMLElement>(null);
	const nameRef = useRef<HTMLElement>(null);
	const [goingUp, setGoingUp] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (prevScrollY.current + 10 < currentScrollY && goingUp) {
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
					{({ mounted }: { mounted: boolean }) =>
						mounted && (
							<Container ref={containerRef}>
								<Header />
								<section style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
									<InnerContainer>
										<Motion containerRef={containerRef} to={{ opacity: 0, y: -100 }} from={{ opacity: 1, y: 0, duration: 1.5 }}>
											<Typography ref={nameRef} variant='h1' styles={[{ 'text-align': 'left' }]}>
												Alex Ha
											</Typography>
										</Motion>
										<FlexContainerRow>
											<Typograhpy variant='h2'>I am a </Typograhpy>
											<TypewriterWrapper variant='h2' />
										</FlexContainerRow>
										<Typograhpy styles={[{ 'margin-block-start': '4rem' }]} variant='p'>
											View projects
										</Typograhpy>
									</InnerContainer>
								</section>
								{/* <Motion containerRef={containerRef} to={{ opacity: 0, x: -300 }} from={{ opacity: 1, x: 0, duration: 1 }}>
									<section style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
										<div style={{ display: 'flex' }}>YOOOOOOOOOOOOOOOOOOOOO</div>
									</section>
								</Motion> */}
								<section style={{ display: 'grid', placeItems: 'center', height: '100vh' }}></section>
							</Container>
						)
					}
				</AppConsumer>
			</StyledThemeProvider>
		</AppProvider>
	);
}

export default App;
