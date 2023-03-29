import React from 'react';
import Typewriter from 'typewriter-effect';

import Typography from '../typography/Typography';

interface TypewriterComponentInterface {
	strings?: string[];
	variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const TypewriterWrapper = ({ strings, variant = 'p' }: TypewriterComponentInterface) => {
	return (
		<>
			<Typography variant={variant} styles={[{ 'text-align': 'center' }]} gradient>
				<Typewriter
					onInit={(tw) => {
						tw.pauseFor(600);
						tw.typeString('learner.');
						tw.pauseFor(800);
						tw.deleteAll();
						tw.typeString('software Engineer.');
						tw.pauseFor(800);
						tw.start();
					}}
				/>
			</Typography>
		</>
	);
};

export default TypewriterWrapper;
