import React from 'react';

interface ImageProps {
	src: string;
	alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
	console.log(src.split('.')[src.split.length - 1]);
	return <img src={src} alt={alt} />;
};

export default Image;
