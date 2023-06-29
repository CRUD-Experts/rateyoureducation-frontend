/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const Button = ({ children, className }) => {
	return (
		<Link
			to="/"
			className={`primary-btn btn text-sm ${className}`}>
			{children}
		</Link>
	);
};
