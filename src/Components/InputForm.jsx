import React from "react";
import Styles from "./InputForm.module.css";
import { useState } from "react";

const InputForm = ({ addTodo }) => {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent the default form submission behavior
		if (inputValue.trim() !== "") {
			addTodo(inputValue);
			setInputValue("");
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					className={Styles.formControl}
					placeholder='✍️ Add item...'
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
					value={inputValue}
				/>
			</form>
		</div>
	);
};

export default InputForm;
