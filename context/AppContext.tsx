import React, { createContext, useContext, useState } from 'react';

interface AppProviderInterface {
	children: React.ReactNode;
	scrollUp: null | boolean;
}

interface AppContextValueInterface {
	scrollUp: null | boolean;
	headerActive: boolean;
	setHeaderActive: React.Dispatch<React.SetStateAction<boolean>> | null;
	theme: 'light' | 'dark';
	setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>> | null;
	mounted: boolean;
	setMounted: React.Dispatch<React.SetStateAction<boolean>> | null;
}

const AppContext = createContext<AppContextValueInterface>({ scrollUp: null, theme: 'dark', setTheme: null, mounted: false, setMounted: null, headerActive: false, setHeaderActive: null });

const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('Scroll Context Error');
	}

	return context;
};

const AppProvider = ({ children, scrollUp }: AppProviderInterface) => {
	const [theme, setTheme] = useState<'light' | 'dark'>('dark');
	const [headerActive, setHeaderActive] = useState<boolean>(false);
	const [mounted, setMounted] = useState<boolean>(false);

	const values = {
		scrollUp,
		headerActive,
		setHeaderActive,
		theme,
		setTheme,
		mounted,
		setMounted,
	};
	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

const AppConsumer = ({ children }: { children: any }) => {
	return <AppContext.Consumer>{children}</AppContext.Consumer>;
};

export { AppContext, useAppContext, AppProvider, AppConsumer };
