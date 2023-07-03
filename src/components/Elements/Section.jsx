/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Section = ({ children, className, animate = true }) => {
	return (
			<motion.section
				initial={animate && { translateY: 200, opacity: 0 }}
				whileInView={animate && { translateY: 0, opacity: 1 }}
				transition={animate && { duration: 0.2 }}
				exit={animate && { translateY: 200, opacity: 0 }}
				className={`container ${className}`}>
				{children}
			</motion.section>
	);
};

export default Section;
