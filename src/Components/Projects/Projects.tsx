import {useState} from 'react';
import {MdOutlineSubdirectoryArrowRight} from 'react-icons/md';
import SingleProject from './SingleProject';
import {projectsArr} from './data';

export type Project = {
	id: number;
	name: string;
	desc: string;
	stack: string;
	link: string;
	photo: string;
};

function Projects() {
	const [currentProject, setCurrentProject] = useState<Project>(projectsArr[0]);

	const handleMouseEnter = (id: number) => {
		const projectInArr = projectsArr[id];
		setCurrentProject(projectInArr);
	};

	return (
		<div>
			<h2>projects</h2>
			<ul className='lg:grid lg:grid-cols-5 border-b-[1px] border-black [&>li]:flex'>
				{projectsArr.map((project, id) => (
					<li className={id === 4 ? 'border-t-[1px] border-black ' : 'border-t-[1px] lg:mr-5 border-black'}>
						<span
							onMouseEnter={() => handleMouseEnter(project.id)}
							className='hover:text-[#FF0000] cursor-pointer inline-flex items-center py-3'
						>
							<MdOutlineSubdirectoryArrowRight /> {project.name}
						</span>
					</li>
				))}
			</ul>
			<SingleProject currentProject={currentProject} />
		</div>
	);
}

export default Projects;
