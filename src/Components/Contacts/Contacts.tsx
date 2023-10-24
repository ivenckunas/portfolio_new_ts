import {BsSend} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {PiLinkedinLogo, PiGithubLogo} from 'react-icons/pi';

function Contacts() {
	return (
		<div>
			<ul className='grid grid-cols-2 p-2 border-y-[1px] border-black lg:flex justify-between items-center font-[400] text-l tracking-wide uppercase [&>li]:flex [&>li]:gap-2 [&>li]:items-center [&>li]:cursor-pointer'>
				<li className='hover:text-[#FF0000] '>
					<PiGithubLogo />
					<a
						href='https://github.com/ivenckunas'
						target='_blank'
					>
						Github
					</a>
				</li>
				<li className='hover:text-[#FF0000]'>
					<PiLinkedinLogo />
					<a
						href='https://www.linkedin.com/in/ignas-venckunas/'
						target='_blank'
					>
						Linkedin
					</a>
				</li>
				<li className='hover:text-[#FF0000]'>
					<AiOutlineMail />
					<a
						href='https://mail.google.com/mail/?view=cm&fs=1&to=ignas.venckunas@gmail.com'
						target='_blank'
					>
						Email
					</a>
				</li>
				<li className=' hover:text-[#FF0000]'>
					<BsSend />
					<a>Message</a>
				</li>
			</ul>
		</div>
	);
}

export default Contacts;
