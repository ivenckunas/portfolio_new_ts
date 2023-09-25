import photo1 from '../../assets/pazinkdarza.webp';
import photo2 from '../../assets/zoomarket.webp';
import photo3 from '../../assets/projectmini.webp';
import photo4 from '../../assets/rm.webp';
import photo5 from '../../assets/webprojects.webp';

export const projectsArr: {id: number; name: string; desc: string; stack: string; link: string; photo: string}[] = [
	{
		id: 0,
		name: 'PAZINKDARZA',
		desc: 'Personal project. Gardening companion, packed with everything you need to sow, grow, and harvest the most common vegetables',
		stack: 'VITE + REACT + TS + SCSS',
		link: 'https://www.pazinkdarza.lt',
		photo: photo1,
	},
	{
		id: 1,
		name: 'ZOOMARKET',
		desc: 'Representative and catalog page for small family business',
		stack: 'REACT + REDUX + Material UI ',
		link: 'https://www.zoomarket.lt',
		photo: photo2,
	},
	{
		id: 2,
		name: 'PROJECTMINI',
		desc: 'Web page for company that builds modular houses',
		link: 'https://www.projectmini.lt',
		stack: 'REACT + REDUX + Tailwind CSS',
		photo: photo3,
	},
	{
		id: 3,
		name: 'REMODAL',
		desc: 'First live webpage our group of four(from CodeAcademy course) did.',
		stack: 'REACT + REDUX + CSS',
		link: 'https://www.remodal.lt',
		photo: photo4,
	},
	{
		id: 4,
		name: 'WEBPROJECTS',
		desc: 'Ok, so here is the second attempt to make our group portfolio page. Went for a clean design, added a couple complex animations',
		stack: 'REACT + SCSS',
		link: 'https://www.webprojects.lt',
		photo: photo5,
	},
];
