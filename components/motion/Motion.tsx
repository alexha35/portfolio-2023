// import React, { useRef, useLayoutEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// interface MotionInterface {
// 	children: React.ReactNode;
// 	containerRef: React.RefObject<HTMLElement>;
// 	to: {
// 		[s: string]: any;
// 	};
// 	from: {
// 		[s: string]: any;
// 	};
// }

// export const Motion = ({ children, containerRef, to, from }: MotionInterface) => {
// 	const elementRef = useRef<HTMLDivElement>(null);
// 	gsap.registerPlugin(ScrollTrigger);

// 	useLayoutEffect(() => {
// 		let ctx = gsap.context(() => {
// 			gsap.fromTo(
// 				elementRef.current,
// 				{
// 					...to,
// 				},
// 				{
// 					...from,
// 				}
// 			);
// 		}, containerRef);

// 		return () => ctx.revert();
// 	}, []);

// 	return <div ref={elementRef}>{children}</div>;
// };
