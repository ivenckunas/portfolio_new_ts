import Form from '../Form/Form';
import graph1 from '../../assets/9312526-ai.svg';

function About() {
	return (
		<div className='flex flex-col lg:pr-5 '>
			<h2>hi, i'm</h2>
			<h1 className='p-2 pl-0 text-2xl border-y-[1px] border-black uppercase'>ignas ven</h1>
			<p className='p-2 lg:pt-4 pl-0 text-xs lg:text-sm'>My name is Ignas Venckunas, a front-end developer based in Vilnius, Lithuania. I'm all about creating awesome websites with React, Redux, TypeScript, SCSS, Material UI, Tailwinds CSS. My portfolio is where you'll find my work, and I'm on the lookout for cool opportunities to collaborate(or get hired) and help you bring fresh ideas to the web. </p>

			<img
				className='max-h-[20vh] lg:max-h-[30vh] object-cover'
				src={graph1}
				alt='abstract monochromic color graphic'
			/>

			<Form />


		</div>
	);
}

export default About;
