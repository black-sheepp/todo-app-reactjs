import React from "react";

const TodoComleted = (props) => {
	return (
		<div>
			<p className='text-white-400 mt-3 mb-3 hover:text-red-500 cursor-pointer'>
				{" "}
				<small>🚩</small> {props.todo}
			</p>
		</div>
	);
};

export default TodoComleted;
