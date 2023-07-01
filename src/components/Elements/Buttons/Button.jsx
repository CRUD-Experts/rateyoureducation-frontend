/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const Button = ({ children, className, to }) => {
	return (
		<Link
			to={to}
			className={`primary-btn btn text-sm ${className}`}>
			{children}
		</Link>
	);
};
