import "./App.css";
import InputForm from "./Components/InputForm";
import Logo from "./Components/Logo";
import MessageHeader from "./Components/MessageHeader";

function App() {
	return (
		<>
			<div className='h-screen bg-[#020631]'>
				<nav>
					<div className='flex justify-center pt-5'>
						<Logo />
					</div>
					<h1 className='text-white text-center pt-5 text-3xl'>ToDo App</h1>
				</nav>

				<MessageHeader />

				<div className='flex justify-center'>
					<InputForm />
				</div>

        <div className="flex justify-center mt-10">
          <p className="text-[#BC01F8] text-2xl">ToDo List</p>
        </div>
			</div>
		</>
	);
}

export default App;
