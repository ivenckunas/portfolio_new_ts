import './App.css';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Projects from './Components/Projects/Projects';

function App() {
	return (
		<div className='min-h-screen flex bg-[#FFA703] px-5 pt-8 flex-col '>
			<div className='flex py-5 flex-grow '>
				<div className='w-[30%]'>
					<About />
				</div>
				<div className='w-[70%]'>
					<Projects />
				</div>
			</div>
			<div className='pb-5'>
				<Contacts />
			</div>
		</div>
	);
}

export default App;
