import React from "react";
import 'animate.css';


const TodoComleted = (props) => {
	return (
		<div>
			<p className='text-red-200 mt-3 mb-3 hover:text-red-500 cursor-pointer animate__animated animate__fadeInLeft'>
				{" "}
				<small>🚩</small> {props.todo}
			</p>
		</div>
	);
};

export default TodoComleted;
