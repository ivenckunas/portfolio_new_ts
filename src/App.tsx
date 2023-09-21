import './App.css';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import RunningLine from './Components/Contacts/RunningLine';
import Projects from './Components/Projects/Projects';

function App() {
	return (
		<div className='min-h-screen flex bg-[#FFA703] px-5 py-8 flex-col '>
			<div className='flex flex-grow'>
				<div className='w-[30%]'>
					<About />
				</div>
				<div className='w-[70%]'>
					<Projects />
				</div>
			</div>
			<RunningLine />
			<Contacts />
		</div>
	);
}

export default App;
