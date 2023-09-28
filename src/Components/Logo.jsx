import React from "react";
import Style from "./Logo.module.css";
import "animate.css";

const Logo = () => {
	return (
		<div className="animate__animated animate__wobble">
			<div className={Style.switch}>
				<div type={Style.checkbox}></div>
				<div>
					<span className={Style.line1} />
					<span className={Style.line2} />
					<span className={Style.line3} />
				</div>
			</div>
		</div>
	);
};

export default Logo;
