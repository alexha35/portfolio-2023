import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { useAppContext } from '../context/AppContext';

interface StyledThemeProviderInterface {
	children: React.ReactNode;
}

export const StyledThemeProvider = ({ children }: StyledThemeProviderInterface) => {
	const { theme, setTheme, setMounted } = useAppContext();

	useEffect(() => {
		const savedTheme = localStorage.getItem('alex-website-theme');

		if (savedTheme && setTheme && setMounted) {
			setTheme(savedTheme as 'light' | 'dark');
		}

		setMounted && setMounted(true);
	}, []);

	const themeContext = {
		fontColor: theme === 'light' ? 'var(--typography-black)' : 'var(--typography-white)',
		backgroundColor: theme === 'light' ? 'var(--white-bg)' : 'var(--black-bg)',
		burgerBackgroundColor: theme === 'light' ? 'var(--black-bg)' : 'var(--white-bg)',
		headerBackgroundColor: theme === 'light' ? '#f1efefeb' : '#242424fb',
		backgroundAltColor: theme === 'light' ? 'var(--white-alt-bg)' : 'var(--black-alt-bg)',
	};

	return <ThemeProvider theme={themeContext}>{children}</ThemeProvider>;
};
