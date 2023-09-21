import {useState} from 'react';
import {MdOutlineSubdirectoryArrowRight} from 'react-icons/md';
import SingleProject from './SingleProject';
import {projectsArr} from './data';

function Projects() {
	const [currentProject, setCurrentProject] = useState(projectsArr[0]);

	const handleMouseEnter = (id: number) => {
		const projectInArr = projectsArr[id];
		setCurrentProject(projectInArr);
	};

	return (
		<div>
			<h2>projects</h2>
			<div className='grid grid-cols-4 border-b-[1px] border-black [&>a]:flex'>
				{projectsArr.map((project, id) => (
					<a
						key={id}
						href={project.link}
						onMouseEnter={() => handleMouseEnter(project.id)}
						target='_blank'
						className={id === 3 ? 'border-t-[1px] border-black ' : 'border-t-[1px] mr-5 border-black'}
					>
						<span className='hover:text-[#FF0000] cursor-pointer inline-flex items-center py-3'>
							<MdOutlineSubdirectoryArrowRight /> {project.name}
						</span>
					</a>
				))}
			</div>
			<SingleProject currentProject={currentProject} />
		</div>
	);
}

export default Projects;
