/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";

export const StackedImages = ({ imgOne, imgTwo, imgThree }) => {

	return (
		<AnimatePresence>
			<div className="hidden mobile:block h-96 relative isolate w-full px-2 overflow-hidden">
				<motion.div
					initial={{ translateX: 150, opacity: 0 }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    exit={{ translateX: 150, opacity: 0 }}
					className="absolute top-0 right-0 w-1/2 h-full bg-black">
					<img
						src={imgOne || "https://via.placeholder.com/150"}
						alt=""
						className="w-full h-full object-cover"
					/>
				</motion.div>
				<motion.div
                    initial={{ translateX: 150, translateY: "-50%", opacity: 0 }}
                    whileInView={{ translateX: 0,translateY: "-50%", opacity: 1  }}
                    transition={{ delay: 0.2 }}
                 className="absolute top-1/2 -translate-y-1/2 right-36 w-1/2 h-4/5 bg-red-400 ring-8 ring-light-500">
					<img
						src={imgTwo || "https://via.placeholder.com/150"}
						alt=""
						className="w-full h-full object-cover"
					/>
				</motion.div>
				<motion.div
                    initial={{ translateX: 150, translateY: "-50%", opacity: 0  }}
                    whileInView={{ translateX: 0,translateY: "-50%", opacity: 1  }}
                    transition={{ delay: 0.3 }}
                    
                 className="absolute top-1/2 -translate-y-1/2 right-64 w-1/2 h-3/5 bg-green-400 ring-8 ring-light-500">
					<img
						src={imgThree || "https://via.placeholder.com/150"}
						alt=""
						className="w-full h-full object-cover"
					/>
				</motion.div>
			</div>
		</AnimatePresence>
	);
};
