import React from 'react';

import {MdOutlineSubdirectoryArrowRight} from 'react-icons/md';
import SingleProject from './SingleProject';

function Projects() {
	return (
		<div>
			<ul className='grid grid-cols-3 border-b-[1px] border-black [&>li]:h-[50px] [&>li]:flex '>
				<li className='border-t-[1px] mr-5 border-black'>
					<span className='hover:text-[#FF0000] cursor-pointer inline-flex items-center'>
						<MdOutlineSubdirectoryArrowRight /> REMODAL
					</span>
				</li>
				<li className='border-t-[1px] mr-5 border-black'>
					<span className='hover:text-[#FF0000] cursor-pointer inline-flex items-center'>
						<MdOutlineSubdirectoryArrowRight />
						ZOOMARKET
					</span>
				</li>
				<li className='border-t-[1px] border-black'>
					<span className='hover:text-[#FF0000] cursor-pointer inline-flex items-center'>
						<MdOutlineSubdirectoryArrowRight />
						PROJECTMINI
					</span>
				</li>
			</ul>
			<SingleProject />
		</div>
	);
}

export default Projects;
