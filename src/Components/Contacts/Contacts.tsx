import React from 'react';
import {TbMedicalCross} from 'react-icons/tb';
import {AiOutlineMail} from 'react-icons/ai';
import {PiLinkedinLogo, PiGithubLogo} from 'react-icons/pi';

function Contacts() {
	return (
		<div>
			<ul className='p-2 border-y-[1px] border-black flex justify-between items-center font-[400] text-l tracking-wide uppercase [&>li]:flex [&>li]:gap-2 [&>li]:items-center [&>li]:cursor-pointer'>
				<li className='hover:text-[#FF0000] '>
					<PiGithubLogo />
					Github
				</li>
				<li className='hover:text-[#FF0000]'>
					<PiLinkedinLogo />
					Linkedin
				</li>
				<li className='hover:text-[#FF0000]'>
					<AiOutlineMail />
					Email
				</li>
				<li className='hover:text-[#FF0000]'>
					<TbMedicalCross />
				</li>
			</ul>
		</div>
	);
}

export default Contacts;
