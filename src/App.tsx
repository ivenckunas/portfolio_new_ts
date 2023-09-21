import './App.css';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import RunningLine from './Components/Contacts/RunningLine';
import Projects from './Components/Projects/Projects';

function App() {
	return (
		<div className='min-h-screen flex bg-[#FFA703] px-2 py-4 md:px-5 md:py-8 flex-col '>
			<div className='md:flex flex-grow'>
				<div className='mb-4 md:w-[30%]'>
					<About />
				</div>
				<div className='mb-4 md:w-[70%]'>
					<Projects />
				</div>
			</div>
			<RunningLine />
			<Contacts />
		</div>
	);
}

export default App;
