/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";

const Section = ({ children, className, animate = true }) => {
	return (
		<AnimatePresence>
			<motion.section
				initial={animate && { translateY: 200, opacity: 0 }}
				whileInView={animate && { translateY: 0, opacity: 1 }}
				transition={animate && { duration: 0.2 }}
				className={`container ${className}`}>
				{children}
			</motion.section>
		</AnimatePresence>
	);
};

export default Section;
