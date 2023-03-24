import { css } from 'styled-components';

const BP = ['275px', '768px', '1024px', '1152px'];

export const resolveStyles = (styles: { [s: string]: any }) => {
	if (!styles) return;
	const bpProps = styles.reduce((prevStyles: string, currStyls: { [s: string]: any }, idx: number) => {
		return (prevStyles += `@media screen and (min-width: ${BP[idx]}) {
             ${Object.keys(currStyls).map((key, i) => {
					return `${key}: ${Object.values(currStyls)[i]};`;
				})}
        }
    `).replace(/,/g, '\n');
	}, '');
	return css([bpProps] as any);
};
