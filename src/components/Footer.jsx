import { Link } from "react-router-dom";
import Section from "./Elements/Section";

export const Footer = () => {
	return (
		<footer className="p-5 bg-light-600 bg-opacity-50 mt-10">
			<Section
				animate={false}>
				<div className="flex  flex-col md:flex-row md:justify-between md:items-center gap-5 py-2 border-b border-light-600">
          <div className="border-b pb-2 :pb-0 md:border-0 border-light-600" >
            <h2 className="text-3xl text-primary-900 font-black m-0" >RYE</h2>
            <small className="m-0" >Rate your Education</small>
          </div>
          <nav className="flex flex-col md:flex-row gap-10" >
            <Link to="." className="text-light-900 hover:text-primary-700">Home</Link>
            <Link to="/rate" className="text-light-900 hover:text-primary-700">Rate Now</Link>
            <Link to="/lectures" className="text-light-900 hover:text-primary-700">Lecturers</Link>
            <Link to="/about" className="text-light-900 hover:text-primary-700">About Us</Link>
            <Link to="/contact" className="text-light-900 hover:text-primary-700">Contact Us</Link>
            <Link to="/contact" className="text-light-900 hover:text-primary-700">FAQ</Link>
            <Link to="/contact" className="text-light-900 hover:text-primary-700">Privacy Policy</Link>

          </nav>
				</div>
        <div className="pt-8" >
          <p className="text-left md:text-center text-light-800 text-sm" >
            <span>Copyright &copy; | </span>
            <span>
              {new Date().getFullYear()}
            </span>
            <span> RateYourEducation.com </span>
            <span> | All Rights Reserved</span>

          </p>
        </div>
			</Section>
		</footer>
	);
};
