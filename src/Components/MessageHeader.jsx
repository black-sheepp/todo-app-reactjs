import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import 'animate.css';


const MessageHeader = () => {
	const [day, setDay] = useState();
	const [time, setTime] = useState();
	const [wish, setWish] = useState();

	const setupTime = () => {
		let currentTime = new Date();
		console.log(currentTime);
		const currentTimeString = currentTime.toString();
		const today = currentTime.getDay();
		const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		setDay(daysOfWeek[today]);
		console.log(day);
		setTime(currentTimeString.slice(16, 18));
		console.log(time);
		if (time >= 5 && time < 12) {
			setWish("Morning");
		} else if (time >= 12 && time < 18) {
			setWish("Afternoon");
		} else {
			setWish("Evening");
		}
	};

	useEffect(() => {
		setupTime();
	}, [time]);

	return (
		<div>
			<p className='text-[#B600FE] text-center pt-6 text-2xl animate__animated animate__swing'>
				Hey!👋 Good {wish}, Today's {day} 🙂
				<br /> <small className='text-lg text-yellow-200'>Add, Check and update your todo list.</small>
			</p>
		</div>
	);
};

export default MessageHeader;
