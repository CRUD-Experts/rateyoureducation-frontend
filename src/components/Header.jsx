import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

import "../customStyles/keyframes.css"
import "../customStyles/customAnimations.css"


export const Header = () => {
	const navCtrl = useRef();

	const openNav = () => {
		const nav = navCtrl.current;
		nav.classList.remove("hidden");
		nav.classList.add("flex");
	}

	const closeNav = () => {
		const nav = navCtrl.current;
		nav.classList.remove("flex");
		nav.classList.add("hidden");
	}

	const activeClass = "font-bold";
	const inactiveClass = "hover:underline";
	return (
		<header>
			<div className="flex flex-row items-center justify-between px-2 mobile:px-20 py-2 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
				<h1 className="font-black text-2xl">RYE</h1>
				<nav className="flex items-center gap-4">
					<a
						href="#"
						className="mobile:text-xl">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a
						href="#"
						className="mobile:text-xl">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a
						href="#"
						className="mobile:text-xl">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a
						href="#"
						className="px-3 mobile:px-7 py-1 bg-light-100 hover:bg-primary-200 text-primary-800 rounded-full">
						Sign Up
					</a>
				</nav>
			</div>
			<div className="flex justify-start mobile:justify-center py-3 px-2 mobile:px-10 bg-white">
				<button onClick={openNav} className="mobile:hidden text-xl sticky" >
					<FontAwesomeIcon icon={faBars} />
					<span className="ml-2">Menu</span>
				</button>
				<nav ref={navCtrl} className="mobile-slide-in-top fixed mobile:relative hidden mobile:flex mobile:flex-row flex-col justify-center mobile:justify-stretch items-center mobile:items-start gap-16 mobile:gap-7 z-50 bg-light-100 h-full w-full mobile:w-fit top-0 left-0 overflow-hidden transition-all duration-150 ease-in-out">
					<button onClick={closeNav} className="mobile:hidden text-3xl font-light absolute top-6 right-5" >
						<FontAwesomeIcon icon={faTimes} />
					</button>
					<NavLink
						to="."
						end
						onClick={closeNav}
						className={({ isActive }) =>
							isActive ? `${activeClass} delay-100` : `${inactiveClass} delay-100`
						}>
						Home
					</NavLink>
					<NavLink
						to="rankings"
						onClick={closeNav}
						className={({ isActive }) =>
							isActive ? `${activeClass} delay-150` : `${inactiveClass} delay-150`
						}>
						Rankings
					</NavLink>
					<NavLink
						to="comparison"
						onClick={closeNav}
						className={({ isActive }) =>
							isActive ? `${activeClass} delay-200` : `${inactiveClass} delay-200`
						}>
						Comparison
					</NavLink>
					<NavLink
						to="methodology"
						onClick={closeNav}
						className={({ isActive }) =>
							isActive ? `${activeClass} delay-300` : `${inactiveClass} delay-300`
						}>
						Methodology
					</NavLink>
				</nav>
			</div>
		</header>
	);
};
