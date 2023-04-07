import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import Header from '../components/header/Header';
import { AppProvider, AppConsumer, AppContextValueInterface } from '../context/AppContext';
import { StyledThemeProvider } from '../styles/StyleProvider';
import { Masthead, AboutMe, Projects, Contact } from '../components/content';

function App() {
	const prevScrollY = useRef(0);
	const containerRef = useRef<HTMLElement>(null);
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
		<AnimatePresence>
			<AppProvider scrollUp={goingUp}>
				<StyledThemeProvider>
					<AppConsumer>
						{({ mounted, theme, setHeaderActive }: AppContextValueInterface) =>
							mounted &&
							setHeaderActive && (
								<Container ref={containerRef} onClick={() => setHeaderActive(false)}>
									<Header />
									<Masthead theme={theme} />
									<AboutMe />
									<Projects />
									<Contact />
								</Container>
							)
						}
					</AppConsumer>
				</StyledThemeProvider>
			</AppProvider>
		</AnimatePresence>
	);
}

export default App;

const Container = styled.main`
	background-color: ${(p) => p.theme.backgroundColor};
`;
