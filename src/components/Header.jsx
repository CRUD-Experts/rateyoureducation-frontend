import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "../customStyles/keyframes.css"
import "../customStyles/customAnimations.css"
import { TopNav } from "./Navs/TopNav";


export const Header = () => {

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
					<Link
						href="#"
						className="light-btn text-sm">
						Sign Up
					</Link>
				</nav>
			</div>
				<TopNav />
		</header>
	);
};
