import React from 'react';

import pic from '../../assets/example.jpg';
import gif from '../../assets/gif.gif';
import gif2 from '../../assets/gif2.gif';
import gif3 from '../../assets/gif3.gif';
function SingleProject() {
	return (
		<div className='flex gap-5 pt-5'>
			<img
				className='max-w-[50dvw]'
				src={pic}
				alt=''
			/>

			<div className='flex flex-grow flex-col'>
				<h3 className='text-xl'>Project Name</h3>
				<p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit voluptatum quod dolorem fuga impedit magni harum natus vel quae dolor unde ad ullam, amet quisquam doloribus rerum libero praesentium! Quo sint totam quis, vitae deserunt reiciendis cumque recusandae fugiat dolores reprehenderit vel repudiandae incidunt optio eligendi voluptatum beatae alias.</p>
				<a
					href=''
					className='underline underline-offset-4'
				>
					link to site
				</a>
				<img
					src={gif3}
					alt=''
				/>
			</div>
		</div>
	);
}

export default SingleProject;
