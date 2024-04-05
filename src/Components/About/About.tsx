import {useEffect, useState} from 'react';
import graph1 from '../../assets/9312526-ai.svg';
import Form from '../Form/Form';
import Spotify from '../Spotify/Spotify';

function About() {
	const [renderComponent, setRenderComponent] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setRenderComponent(true);
		}, 500);

		return () => clearTimeout(timeout);
	}, []);
	return (
		<div className='flex flex-col h-auto lg:pr-5 '>
			<h2>hi, i'm</h2>
			<h1 className='p-2 pl-0 text-2xl border-y-[1px] border-black uppercase'>ignas ven</h1>
			<p className='p-2 lg:pt-4 pl-0 text-xs lg:text-sm'>My name is Ignas Venckunas, a frontend developer based in Alytus, Lithuania. I'm all about creating awesome websites with React, Redux, TypeScript, SCSS, Material UI, Tailwinds CSS. My portfolio is where you'll find my work, and I'm on the lookout for cool opportunities to collaborate(or get hired) and help you bring fresh ideas to the web. </p>

			<img
				className='h-[20vh] lg:h-[10vh] mb-5 object-cover'
				src={graph1}
				alt='abstract monochromic color graphic'
			/>
			<Form />
			{renderComponent && <Spotify />}
		</div>
	);
}

export default About;
