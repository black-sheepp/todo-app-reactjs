import React from "react";
import "animate.css";

const TodoList = (props) => {
	return (
		<div>
			<p
				onClick={(e) => {
					props.removeTodo(props.index);
				}}
				className='text-white mt-3 mb-3 hover:text-yellow-200 cursor-pointer animate__animated animate__bounceInLeft'>
				<small>👉</small> {props.todo}
			</p>
		</div>
	);
};

export default TodoList;
