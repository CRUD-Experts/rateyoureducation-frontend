/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const SliderContent = ({ imgSrc, title, subTitle, actionText, actionRef }) => {
	return (
		<>
			<img
				src={imgSrc}
				alt="image"
				className="w-full h-full object-cover opacity-60"
			/>
			<div className="text-container">
				<h1 className="text-2xl mobile:text-5xl font-bold mb-3">
					{title}
				</h1>
				<p className="mobile:text-xl font-light mb-3">
                    {subTitle}
				</p>
				<Link to={actionRef}>{actionText}</Link>
			</div>
		</>
	);
};
