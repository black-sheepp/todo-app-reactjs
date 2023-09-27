import React from "react";

const TodoList = (props) => {

	return (
		<div>
			<p 
            onClick={e => {
                props.removeTodo(props.index)
            }}
            className='text-white mt-3 mb-3 hover:text-yellow-300 cursor-pointer'>
				<small>👉</small> {props.todo}
			</p>
		</div>
	);
};

export default TodoList;
