function SingleProject({currentProject}) {
	console.log(currentProject.photo);

	return (
		<div className='flex gap-5 pt-5'>
			<img
				className='w-[40dvw] h-[70dvh] object-cover grayscale border border-black'
				src={currentProject.photo}
				alt=''
			/>

			<div className='flex flex-grow flex-col justify-end'>
				<h3 className='text-xl'>{currentProject.name}</h3>
				<p className='text-sm'>{currentProject.desc}</p>
				<a
					href={currentProject.link}
					target='_blank'
					className='underline underline-offset-4'
				>
					link to site
				</a>
			</div>
		</div>
	);
}

export default SingleProject;
