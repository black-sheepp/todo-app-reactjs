import { useState } from "react";
import "./App.css";
import InputForm from "./Components/InputForm";
import Logo from "./Components/Logo";
import MessageHeader from "./Components/MessageHeader";
import ResetBtn from "./Components/ResetBtn";
import TodoComleted from "./Components/TodoComleted";
import TodoList from "./Components/TodoList";
import { useEffect } from "react";
import "animate.css";

// get the localStorage data from browser
const getTodoLocalStorage = () => {
	let todoList = localStorage.getItem("todos");

	if (todoList) {
		return JSON.parse(localStorage.getItem("todos"));
	} else {
		return [];
	}
};

const getTodoDoneLocalStorage = () => {
	let todoDone = localStorage.getItem("todosDone");

	if (todoDone) {
		return JSON.parse(localStorage.getItem("todosDone"));
	} else {
		return [];
	}
};

function App() {
	const [todos, setTodos] = useState(getTodoLocalStorage());
	const [todosDone, setTodosDone] = useState(getTodoDoneLocalStorage());

	const addTodo = (text) => {
		setTodos([...todos, text]);
	};

	// remove todo and send to todo checked out
	const removeTodo = (key) => {
		let uncompletedTodos = [...todos];
		let temp = uncompletedTodos.splice(key, 1);
		let val = temp[0];
		setTodosDone([...todosDone, val]);
		setTodos([...uncompletedTodos]);
	};

	// send todos to local storage
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
		// console.log(todos);
	}, [todos]);

	// send checked todos to localStorage
	useEffect(() => {
		localStorage.setItem("todosDone", JSON.stringify(todosDone));
		// console.log(todosDone);
	}, [todosDone]);

	// reset all localStorage data and clean arrays of todo and checked todo
	const resetAllData = () => {
		setTodos([], []);
		setTodosDone([], []);
	};

	return (
		<>
			<div className='h-screen bg-[#020631]'>
				{/* Navbar Section */}
				<nav>
					<div className='flex justify-center pt-5'>
						<Logo />
					</div>
					<h1 className='text-white text-center pt-3 text-3xl animate__animated animate__flash'>ToDo App</h1>
				</nav>

				{/* Header Message */}
				<MessageHeader />

				{/* Input Form Container Section */}
				<div className='flex justify-center'>
					<InputForm addTodo={addTodo} />
				</div>

				{todos.length === 0 && todosDone.length === 0 ? (
					<p className='text-[#00f59b] text-2xl text-center mt-20 ml-24 mr-24 animate__animated animate__backInUp'>
						Welcome to the Todo App! Let's get organized together. Create your first todo and
						kickstart your productive journey!
					</p>
				) : (
					<div className='flex justify-center w-full flex-col mt-3 md:flex-row animate__animated animate__pulse'>
						{/* ToDo List Section */}
						<div className='flex flex-col w-full'>
							<div className='flex justify-center md:justify-end'>
								<aside className='bg-black text-white p-6 m-2 rounded-lg w-full max-w-lg font-mono'>
									<div className='flex justify-between items-center'>
										<p className='text-lg text-green-400'>todo list</p>
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
										<p className='text-lg text-red-400'>todo checked</p>
									</div>
									<div className='mt-4 divide-y divide-red-200'>
										{todosDone
											.map((todo, ind) => {
												return <TodoComleted key={ind} todo={todo} />;
											})
											.reverse()}
									</div>
								</aside>
							</div>
						</div>
					</div>
				)}
				{
					todos.length === 0 && todosDone.length === 0 ? "" : (<ResetBtn resetAllData={resetAllData} />)
				}
				
			</div>
		</>
	);
}

export default App;
