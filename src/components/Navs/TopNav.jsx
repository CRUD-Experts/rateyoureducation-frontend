import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
	faAngleDown,
	faBars,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TopNav = () => {
	const navCtrl = useRef();
	const [isDroppedDown, setIsDroppedDown] = useState(false);

	const openNav = () => {
		const nav = navCtrl.current;
		nav.classList.remove("hidden");
		nav.classList.add("flex");
	};

	const closeNav = () => {
		const nav = navCtrl.current;
		nav.classList.remove("flex");
		nav.classList.add("hidden");
	};

	const activeClass = "font-bold";
	const inactiveClass = "hover:underline";

	return (
		<div className="flex justify-start mobile:justify-center py-3 px-2 mobile:px-10 bg-white">
			<button
				onClick={openNav}
				className="mobile:hidden text-xl sticky">
				<FontAwesomeIcon icon={faBars} />
				<span className="ml-2">Menu</span>
			</button>
			<nav
				ref={navCtrl}
				className="mobile-slide-in-top fixed mobile:relative hidden 
				mobile:flex mobile:flex-row flex-col justify-center 
				mobile:justify-stretch items-center mobile:items-start gap-16 
				mobile:gap-7 z-50 bg-light-100 h-full w-full mobile:w-fit 
				top-0 left-0 transition-all duration-150 
				ease-in-out">
				<button
					onClick={closeNav}
					className="mobile:hidden text-3xl font-light absolute top-6 right-5">
					<FontAwesomeIcon icon={faTimes} />
				</button>
				<NavLink
					to="."
					end
					onClick={closeNav}
					className={({ isActive }) =>
						isActive
							? `${activeClass} delay-100`
							: `${inactiveClass} delay-100`
					}>
					Home
				</NavLink>
				<div
					className="relative "
					onMouseOver={() => setIsDroppedDown(true)}
					onMouseLeave={() => setIsDroppedDown(false)}>
					<button>
						Rankings
						<FontAwesomeIcon
							icon={faAngleDown}
							className="ml-2"
						/>
					</button>
					<AnimatePresence>
					{isDroppedDown ? (
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								className=" flex flex-col gap-5 absolute -left-1/2  w-max bg-light-100 px-4 py-6 rounded-sm shadow-2xl">
								<Link
									to="rankings/universities"
									onClick={closeNav}
									className={inactiveClass}>
									University Rankings
								</Link>

								<Link
									to="rankings/scholars"
									onClick={closeNav}
									className={inactiveClass}>
									Scholar Rankings
								</Link>
							</motion.div>
					): null}
					</AnimatePresence>
				</div>

				<NavLink
					to="comparison"
					onClick={closeNav}
					className={({ isActive }) =>
						isActive
							? `${activeClass} delay-200`
							: `${inactiveClass} delay-200`
					}>
					Comparison
				</NavLink>
				<NavLink
					to="methodology"
					onClick={closeNav}
					className={({ isActive }) =>
						isActive
							? `${activeClass} delay-300`
							: `${inactiveClass} delay-300`
					}>
					Methodology
				</NavLink>
			</nav>
		</div>
	);
};
