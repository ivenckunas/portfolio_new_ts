import graph1 from '../../assets/9312526-ai.svg';

function About() {
	return (
		<div className='flex flex-col pr-5'>
			<h2>me</h2>
			<h1 className='p-2 pl-0 text-2xl border-y-[1px] border-black '>IGNAS VEN</h1>
			<img
				className='py-5 max-h-[50vh] object-cover '
				src={graph1}
				alt='abstract monochromic color graphic'
			/>

			<p className='p-2 pl-0 text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error commodi eos nisi! Veniam minus quod voluptas consequuntur, non odit modi?</p>
		</div>
	);
}

export default About;
