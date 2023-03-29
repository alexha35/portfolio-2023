import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Switch from 'react-switch';
import { MdLightbulb, MdNightlight } from 'react-icons/Md';

import { useAppContext } from '../../context/AppContext';

interface NavActiveInterface {
	active: boolean;
}

interface HeaderInterface {
	scrollUp: boolean | null;
}

const StyledHeader = styled.header<HeaderInterface>`
	height: 80px;
	width: 100%;
	/* background-color: ${(p) => p.theme.headerBackgroundColor}; */
	padding: 2rem 4rem 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	position: fixed;
	top: 0;
	z-index: 1;
	transition: 0.25s ease-in-out;
	transform: ${(p) => (p.scrollUp ? 'translateY(0%)' : 'translateY(-100%)')};

	@media only screen and (min-width: 275px) and (max-width: 768px) {
		padding: 2rem;
	}
`;

const Burger = styled.button`
	background-color: transparent;
	outline: none;
	border: none;
	height: 40px;
	width: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	cursor: pointer;
	position: relative;
`;

const Line = styled.span<NavActiveInterface>`
	width: 100%;
	height: 5px;
	background-color: ${(p) => p.theme.burgerBackgroundColor};
	position: absolute;
	border-radius: var(--border-radius);
	transform: rotate(0deg);
	transition: 0.25s ease-in-out;
	z-index: 1;

	:nth-child(1) {
		top: ${(p) => (p.active ? '16px' : '4px')};
		transform: ${(p) => (p.active ? 'rotate(135deg)' : 'rotate(0deg)')};
	}
	:nth-child(2) {
		top: 16px;
		width: 50%;
		transform: ${(p) => (p.active ? 'translateX(-20px)' : '0px')};
		opacity: ${(p) => (p.active ? '0' : '1')};
	}
	:nth-child(3) {
		top: 16px;
		right: 0;
		transform: ${(p) => (p.active ? 'translateX(20px)' : '0px')};
		opacity: ${(p) => (p.active ? '0' : '1')};
	}
	:nth-child(4) {
		top: ${(p) => (p.active ? '16px' : '28px')};
		transform: ${(p) => (p.active ? 'rotate(-135deg)' : 'rotate(0deg)')};
	}
`;

const StyledNav = styled.nav<NavActiveInterface>`
	position: fixed;
	height: 100vh;
	width: 375px;
	top: 0;
	right: 0;
	background-color: var(--secondary-dark);
	transition: 0.25s transform ease-in, 0.25s opacity ease-in-out;
	transform: ${(p) => (p.active ? 'translateX(0)' : 'translateX(150vw)')};

	@media only screen and (min-width: 275px) and (max-width: 768px) {
		width: 100vw;
	}
`;

const List = styled.ul`
	margin-top: 100px;
`;

const Item = styled.li<NavActiveInterface>`
	padding: 2rem;
	list-style: none;
	border-radius: var(--border-radius);
	transition: 0.25s background-color ease-in, 0.25s transform linear;
	-webkit-transition: 0.25s background-color ease-in, 0.25s transform linear;
	transform: ${(p) => (p.active ? 'translateX(0)' : 'translateX(100%)')};

	& > a {
		color: ${(p) => p.theme.fontColor};
		text-decoration: none;
		font-size: 1.5em;
		line-height: 1em;
		font-weight: 500;
		padding: 2rem;
	}

	& > a:hover {
		font-size: 1.8em;
		transition: 0.25s font-size ease-in;
	}

	&:hover {
		background-color: var(--secondary-darker);
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1.5rem;
	align-items: center;
`;

const Header = () => {
	const { scrollUp, setTheme, theme, headerActive, setHeaderActive } = useAppContext();

	const click = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		if (setHeaderActive) {
			setHeaderActive(false);
			e.stopPropagation();
		}
	};

	useEffect(() => {
		if (headerActive) {
			document.body.classList.add('no_scroll');
			return;
		}

		document.body.classList.remove('no_scroll');
	}, [headerActive]);

	const toggleTheme = () => {
		if (!setTheme) return;

		if (theme === 'light') {
			setTheme('dark');
			localStorage.setItem('alex-website-theme', 'dark');
		} else {
			setTheme('light');
			localStorage.setItem('alex-website-theme', 'light');
		}
	};

	return (
		<StyledHeader scrollUp={scrollUp}>
			<img src='../../images/Logo.svg' style={{ height: '60px', width: '60px' }} />
			<Container>
				<Switch
					onChange={toggleTheme}
					checked={theme === 'light'}
					checkedIcon={
						<span style={{ height: '100%', width: '100%', display: 'grid', placeItems: 'center' }}>
							<MdLightbulb size={20} color={'#f7f7f7'} />
						</span>
					}
					uncheckedIcon={
						<span style={{ height: '100%', width: '100%', display: 'grid', placeItems: 'center' }}>
							<MdNightlight size={20} />
						</span>
					}
					offHandleColor='#242424'
					onColor='#242424'
					offColor='#f7f7f7'
					aria-label='theme toggle'
				/>
				<Burger
					onClick={(e) => {
						e.stopPropagation();
						if (setHeaderActive) {
							setHeaderActive(!headerActive);
						}
					}}>
					<Line active={headerActive} />
					<Line active={headerActive} />
					<Line active={headerActive} />
					<Line active={headerActive} />
				</Burger>
			</Container>

			<StyledNav active={headerActive} onClick={(e) => e.stopPropagation()}>
				<List>
					<Item active={headerActive} onClick={(e) => click(e)}>
						<a href='/' style={{ height: '100%', width: '100%', cursor: 'pointer' }}>
							Home
						</a>
					</Item>
					<Item active={headerActive} onClick={(e) => click(e)}>
						<a href='#about-me' style={{ height: '100%', width: '100%', cursor: 'pointer' }}>
							About Me
						</a>
					</Item>
					<Item active={headerActive} onClick={(e) => click(e)}>
						<a href='#experience' style={{ height: '100%', width: '100%', cursor: 'pointer' }}>
							Experience
						</a>
					</Item>
					<Item active={headerActive} onClick={(e) => click(e)}>
						<a href='#contact' style={{ height: '100%', width: '100%', cursor: 'pointer' }}>
							Contact
						</a>
					</Item>
				</List>
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;
