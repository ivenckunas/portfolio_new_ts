import type {Project} from './Projects';

function SingleProject({currentProject}: {currentProject: Project}) {
	return (
		<div className='lg:flex gap-5 py-3 lg:py-5'>
			<img
				className='mb-3 min-h-[40dvh] object-cover border border-black lg:mb-0 lg:w-[40dvw] lg:h-[70dvh]'
				src={currentProject.photo}
				alt=''
			/>

			<div className='flex flex-grow flex-col justify-end'>
				<h2 className='text-xl'>{currentProject.name}</h2>
				<p className='text-l font-bold'>{currentProject.stack}</p>
				<p className='text-xs lg:text-sm'>{currentProject.desc}</p>
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
