import React from 'react';
import {TbMedicalCross} from 'react-icons/tb';

function Contacts() {
	return (
		<div>
			<ul className='p-5 flex justify-around items-center font-[roboto] border text-lg'>
				<li>GITHUB</li>
				<li>LINKEDIN</li>
				<li>EMAIL</li>
				<li>
					<TbMedicalCross />
				</li>
			</ul>
		</div>
	);
}

export default Contacts;
