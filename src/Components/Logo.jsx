import React from "react";
import Style from "./Logo.module.css";

const Logo = () => {
	return (
		<div>
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
