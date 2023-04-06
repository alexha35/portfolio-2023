import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
	[s: string]: any;
}

const Wrapper = styled(motion.div)<WrapperInterface>`
	${(p) => p.$style && resolveStyles(p.$style)}
`;

const Box = forwardRef(({ children, style = [{}], ...props }: BoxInterface, ref: React.ForwardedRef<HTMLDivElement>) => (
	// <motion.div {...props}>
	<Wrapper as={motion.div} ref={ref} $style={style} {...props}>
		{children}
	</Wrapper>
	// </motion.div>
));

export default Box;
