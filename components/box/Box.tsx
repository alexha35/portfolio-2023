import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { resolveStyles } from '../../utils/styled-bp';

interface BoxInterface {
	children: React.ReactNode | React.ReactNode[] | null;
	style?: {
		[s: string]: any;
	};
	[s: string]: any;
}

interface WrapperInterface {
	$style?: {
		[s: string]: any;
	};
}

const Wrapper = styled.div<WrapperInterface>`
	${(p) => p.$style && resolveStyles(p.$style)}
`;

const Box = forwardRef(({ children, style = [{}], ...props }: BoxInterface, ref: React.ForwardedRef<HTMLDivElement>) => (
	<Wrapper ref={ref} $style={style} {...props}>
		{children}
	</Wrapper>
));

export default Box;
