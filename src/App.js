import { useState } from "react";
import "./App.css";
import InputForm from "./Components/InputForm";
import Logo from "./Components/Logo";
import MessageHeader from "./Components/MessageHeader";
import ResetBtn from "./Components/ResetBtn";
import TodoComleted from "./Components/TodoComleted";
import TodoList from "./Components/TodoList";
import { useEffect } from "react";

function App() {
	const [todos, setTodos] = useState([]);
	const [todosDone, setTodosDone] = useState([]);

	const addTodo = (text) => {
		setTodos([...todos, text]);
	};

	const removeTodo = (key) => {
		let uncompletedTodos = [...todos];
		setTodosDone([...todosDone, uncompletedTodos.splice(key, 1)]);
		setTodos([...uncompletedTodos]);
	};

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
		console.log(todos);
	}, [todos]);

	useEffect(() => {
		localStorage.setItem("todosDone", JSON.stringify(todosDone));
		console.log(todosDone);
	}, [todosDone]);


	return (
		<>
			<div className='h-screen bg-[#020631]'>
				{/* Navbar Section */}
				<nav>
					<div className='flex justify-center pt-5'>
						<Logo />
					</div>
					<h1 className='text-white text-center pt-3 text-3xl'>ToDo App</h1>
				</nav>

				{/* Header Message */}
				<MessageHeader />

				{/* Input Form Container Section */}
				<div className='flex justify-center'>
					<InputForm addTodo={addTodo} />
				</div>

				<div className='flex justify-center w-full flex-col mt-3 md:flex-row'>
					{/* ToDo List Section */}
					<div className='flex flex-col w-full'>
						<div className='flex justify-center md:justify-end'>
							<aside className='bg-black text-white p-6 m-2 rounded-lg w-full max-w-lg font-mono'>
								<div className='flex justify-between items-center'>
									<p className='text-sm text-green-400'>todo list</p>
								</div>
								<div className='mt-4 divide-y divide-green-300'>
									{todos
										.map((todo, ind) => (
											<TodoList
												key={ind}
												index={ind}
												todo={todo}
												removeTodo={removeTodo}
											/>
										))
										.reverse()}
								</div>
							</aside>
						</div>
					</div>

					{/* Completed Todo Section */}
					<div className='flex flex-col w-full'>
						<div className='flex justify-center md:justify-start'>
							<aside className='bg-black text-white p-6 m-2 rounded-lg w-full max-w-lg font-mono'>
								<div className='flex justify-between items-center'>
									<p className='text-sm text-red-400'>task done</p>
								</div>
								<div className='mt-4 divide-y divide-red-300'>
									{todosDone.map((todo, ind) => {
										return <TodoComleted key={ind} todo={todo} />
									}).reverse()}
								</div>
							</aside>
						</div>
					</div>
				</div>
				<ResetBtn />
			</div>
		</>
	);
}

export default App;
