import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { resolveStyles } from '../../utils/styled-bp';

interface TypographyInterface {
	children: React.ReactNode | React.ReactNode[] | string;
	variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
	color?: string;
	position?: string;
	gradient?: boolean;
	styles?: {
		[s: string]: any;
	};
	[s: string]: any;
}

interface WrapperInterface extends React.ReactHTMLElement<HTMLElement> {
	as?: string;
	gradient?: boolean;
	style?: React.CSSProperties;
	styles?: {
		[s: string]: any;
	};
	[s: string]: any;
}

const Wrapper = styled(motion.div)<WrapperInterface>`
	color: var(--color, ${(p) => p.theme.fontColor});

	/* Text Gradient */
	background-size: 100%;
	background-repeat: repeat;
	background-clip: ${(p) => (p.gradient ? 'text' : '')};
	-webkit-background-clip: ${(p) => (p.gradient ? 'text' : '')};
	-webkit-text-fill-color: ${(p) => (p.gradient ? 'transparent' : '')};
	-moz-background-clip: ${(p) => (p.gradient ? 'text' : '')};
	-moz-text-fill-color: ${(p) => (p.gradient ? 'transparent' : '')};
	background-image: ${(p) => (p.gradient ? 'linear-gradient(90deg, #f7df1e, #af4261);' : '')};

	${(p) => p.styles && resolveStyles(p.styles)}
`;

const Typography = React.forwardRef(({ children = '', variant = 'p', color, gradient = false, styles = [], ...props }: TypographyInterface, ref: React.ForwardedRef<HTMLElement>) => {
	return (
		<Wrapper as={variant} ref={ref} gradient={gradient} style={{ '--color': color }} styles={styles} {...props}>
			{children}
		</Wrapper>
	);
});

export default Typography;
