/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export const OutlineButton = ({ children, btnType, className }) => {
	return (
		<Link
			to="/universities"
			className={`${btnType}-outline-btn btn text-sm ${className}`}>
			{children}
		</Link>
	);
};
