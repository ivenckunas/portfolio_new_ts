import type {Project} from './Projects';

function SingleProject({currentProject}: {currentProject: Project}) {
	return (
		<div className='md:flex gap-5 py-3 md:py-5'>
			<img
				className='mb-3 min-h-[40dvh] object-cover border border-black md:mb-0 md:w-[40dvw] md:h-[70dvh]'
				src={currentProject.photo}
				alt=''
			/>

			<div className='flex flex-grow flex-col justify-end'>
				<h2 className='text-xl'>{currentProject.name}</h2>
				<p className='text-l font-bold'>{currentProject.stack}</p>
				<p className='text-xs md:text-sm'>{currentProject.desc}</p>
				<a
					href={currentProject.link}
					target='_blank'
					className='underline underline-offset-4 hover:text-[#FF0000] '
				>
					link to site
				</a>
			</div>
		</div>
	);
}

export default SingleProject;
