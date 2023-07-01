/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { DotSeparator } from "./Aesthetics/DotSeparator";

export const IndiRanks = ({
	rank,
	logo,
	name,
	location,
	scholars,
	publications,
	hIndex,
	loaded = false
}) => {
	if (!loaded) {
		return (
			<div className="animate-pulse flex items-center justify-between gap-5 bg-light-100 px-10 py-3 w-full border border-primary-200 rounded-xl mb-3 cursor-pointer hover:shadow-light-600">
				<div className="flex gap-3 flex-col mobile:flex-row mobile:items-center items-start">
					<div className="w-11 h-11 bg-primary-300 rounded-lg"></div>
					<div>
						<div className="w-40 h-4 bg-primary-300 mb-2 rounded-lg"></div>
						<div className="w-20 h-3 bg-primary-300 rounded-lg"></div>
					</div>
				</div>
			</div>
		)}
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 50, scale: 0.9 }}
			whileHover={{
				scale: 0.91,
			}}
			whileInView={{ opacity: 1, translateY: 0 }}
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
						<DotSeparator color="bg-primary-700" />
						<small>{publications} publications</small>
						<DotSeparator color="bg-primary-700" />
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
