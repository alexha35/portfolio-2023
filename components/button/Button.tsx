import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { resolveStyles } from '../../utils/styled-bp';

interface ButtonPropsInterface {
	children: React.ReactNode | string;
	variant: 'primary' | 'secondary' | 'link';
	href?: string;
	linkProps?: {
		[s: string]: any;
	};
	[s: string]: any;
}

interface ButtonInterface extends React.HTMLProps<HTMLButtonElement> {
	variant: 'primary' | 'secondary' | 'link';
	$style: React.CSSProperties;
}

const StyledButton = styled.button<ButtonInterface>`
	outline: none;
	border: none;

	border-radius: var(--border-radius);
	padding: ${(p) => (p.variant === 'primary' ? '1rem 2rem' : p.variant === 'secondary' ? '1rem 2rem' : 'none')};
	white-space: nowrap;
	cursor: pointer;

	font-size: 14px;
	font-weight: 600;

	background-color: ${(p) => (p.variant === 'primary' ? 'var(--primary)' : p.variant === 'secondary' ? 'var(--secondary)' : 'transparent')};

	${(p) => p.$style && resolveStyles(p.$style)}
`;

const Button = forwardRef(({ children, variant = 'primary', href, linkProps, style, ...props }: ButtonPropsInterface, ref: React.ForwardedRef<HTMLButtonElement>) => {
	const processButton = () => {
		if (href) {
			return (
				<a href={href} {...linkProps}>
					{children}
				</a>
			);
		} else {
			return children;
		}
	};

	return (
		<StyledButton ref={ref} variant={variant} $style={style} {...props}>
			{processButton()}
		</StyledButton>
	);
});

export default Button;
