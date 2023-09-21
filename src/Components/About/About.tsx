import graph1 from '../../assets/9312526-ai.svg';

function About() {
	return (
		<div className='flex flex-col md:pr-5'>
			<h2>hi, i'm</h2>
			<h1 className='p-2 pl-0 text-2xl border-y-[1px] border-black '>IGNAS VEN</h1>
			<img
				className='py-5 max-h-[50vh] object-cover '
				src={graph1}
				alt='abstract monochromic color graphic'
			/>

			<p className='p-2 pl-0 text-xs md:text-sm'>Hey there, I'm Ignas Venckunas, a front-end developer based in Vilnius, Lithuania. I'm all about creating awesome websites with React, Redux, TypeScript, SCSS, Material UI, Tailwinds CSS. My portfolio is where you'll find my work, and I'm on the lookout for cool opportunities to collaborate(or get hired) and bring fresh ideas to the web. </p>
		</div>
	);
}

export default About;
