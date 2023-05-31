/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { DotSeperator } from "./Aesthetics/DotSeperator";

export const IndiRanks = ({
	rank,
	logo,
	name,
	location,
	scholars,
	publications,
	hIndex,
}) => {
	return (
		<motion.div
			whileHover={{
				scale: 1.02,
			}}
			className="group flex items-center justify-between gap-5 bg-light-100 px-10 py-3 w-full border border-primary-200 rounded-xl mb-3 cursor-pointer hover:drop-shadow-xl hover:shadow-light-600">
			<div className="flex gap-3 flex-col mobile:flex-row mobile:items-center items-start">
				<p>#{rank}</p>
				<div className="w-11 h-11 bg-primary-100 rounded-lg">
					<img
						src={logo}
						alt={`Logo of ${name}`}
						className="w-full h-full object-contain"
					/>
				</div>
				<div>
					<p className="font-semibold m-0">{name}</p>
					<small className="m-0">{location}</small>
					<div className="hidden items-center gap-2 mobile:flex text-sm text-primary-700">
						<small>{scholars} scholars</small>
						<DotSeperator color="bg-primary-700" />
						<small>{publications} publications</small>
						<DotSeperator color="bg-primary-700" />
						<small>{hIndex} h-index</small>
					</div>
				</div>
			</div>
			<a
				className="mobile:opacity-0 mobile:group-hover:opacity-100 justify-self-end px-3 py-2 text-primary-700 rounded-md transition-all duration-150 ease-in-out mobile:bg-transparent bg-primary-100 hover:bg-primary-100"
				href="#">
				View
			</a>
		</motion.div>
	);
};
