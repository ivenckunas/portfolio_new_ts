import graph1 from '../../assets/9312526-ai.svg';
import Form from '../Form/Form';

function About() {
	return (
		<div className='flex flex-col h-auto lg:pr-5 '>
			<h2>hi, i'm</h2>
			<h1 className='p-2 pl-0 text-2xl border-y-[1px] border-black uppercase'>ignas ven</h1>
			<p className='p-2 lg:pt-4 pl-0 text-xs lg:text-sm'>
				My name is Ignas Venckunas, a frontend developer based in Alytus, Lithuania. <br /> <br /> Motivated by my experience managing online shops on WordPress and Shopify in my previous role, I started frontend development studies at CodeAcademy, with a focus on ReactJS, TypeScript, and CSS. Through many practical projects during the studies <span className='font-medium'>(over 1200 hours in total)</span>, I built a strong foundation and continue to refine my skills. Currently, I am actively involved as a freelance developer, primarily creating websites for businesses, further improving my expertise in frontend development.
			</p>

			<img
				className='h-[5vh] lg:h-[10vh] mb-5 object-cover'
				src={graph1}
				alt='abstract monochromic color graphic'
			/>
			<Form />
		</div>
	);
}

export default About;
