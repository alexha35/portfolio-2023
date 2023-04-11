import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { resolveStyles } from '../../utils/styled-bp';

interface BoxInterface {
	children: React.ReactNode | React.ReactNode[] | null;
	styles?: {
		[s: string]: any;
	};
	[s: string]: any;
}

interface WrapperInterface {
	styles?: {
		[s: string]: any;
	};
	[s: string]: any;
}

const Wrapper = styled(motion.div)<WrapperInterface>`
	${(p) => p.styles && resolveStyles(p.styles)}
`;

const Box = forwardRef(({ children, styles = [{}], ...props }: BoxInterface, ref: React.ForwardedRef<HTMLDivElement>) => (
	<Wrapper as={motion.div} ref={ref} styles={styles} {...props}>
		{children}
	</Wrapper>
));

export default Box;
