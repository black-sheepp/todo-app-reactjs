import "./App.css";
import InputForm from "./Components/InputForm";
import Logo from "./Components/Logo";
import MessageHeader from "./Components/MessageHeader";
import ResetBtn from "./Components/ResetBtn";
import TodoComleted from "./Components/TodoComleted";
import TodoList from "./Components/TodoList";

function App() {
	return (
		<>
			<div className='h-screen bg-[#020631]'>
				{/* Navbar Section */}
				<nav>
					<div className='flex justify-center pt-5'>
						<Logo />
					</div>
					<h1 className='text-white text-center pt-5 text-3xl'>ToDo App</h1>
				</nav>

				{/* Header Message */}
				<MessageHeader />

				{/* Input Form Container Section */}
				<div className='flex justify-center'>
					<InputForm />
				</div>

				<ResetBtn />

				{/* ToDo List Section */}
				<div className='flex flex-col'>
					<div className='flex justify-center'>
						<aside className='bg-black text-white p-6 m-4 rounded-lg w-full max-w-lg font-mono'>
							<div className='flex justify-between items-center'>
								<p className='text-sm text-green-400'>todo list</p>
							</div>
							<div className='mt-4'>
								<TodoList />
							</div>
						</aside>
					</div>
				</div>

				{/* Completed Todo Section */}
				<div className='flex flex-col'>
					<div className='flex justify-center'>
						<aside className='bg-black text-white p-6 m-4 rounded-lg w-full max-w-lg font-mono'>
							<div className='flex justify-between items-center'>
								<p className='text-sm text-red-400'>task done</p>
							</div>
							<div className='mt-4'>
								<TodoComleted />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
