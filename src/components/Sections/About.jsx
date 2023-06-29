import havImg from "../../assets/images/hav-uni.jpg";
import profImg from "../../assets/images/prof.jpg";
import { Button } from "../Elements/Buttons/Button";

export const About = () => {
	return (
		<div className="w-full h-fit md:h-md flex flex-col md:flex-row justify-center gap-2 px-10 mt-10">
			<div className="md:block hidden w-1/3 py-10">
				<div className="bg-black h-64 md:h-1/2 w-full mb-2">
					<img
						src={havImg}
						alt="harvard"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="bg-black h-64 md:h-1/2 w-full">
					<img
						src={profImg}
						alt="harvard"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
			<div className="bg-slate-800 w-full md:w-1/2 h-full bg-aboutUs bg-no-repeat bg-cover bg-center bg-blend-soft-light ">
				<div className="p-5 text-light-100 h-full bg-black bg-opacity-60">
					<h3 className="text-center text-xl font-bold mb-3">
						About Us
					</h3>
					<p>
						We are a team of experts who are passionate about
						education and committed to providing reliable and
						comprehensive rankings of universities and lecturers
						around the world. We are committed to providing you with
						the most accurate and up-to-date information on
						university and lecturer rankings. To achieve this, we
						have developed a unique ranking system that takes into
						account a wide range of factors, including the quality
						of teaching, research, and student satisfaction. 
					</p>
                    <Button className="mt-4">Learn More</Button>
				</div>
			</div>
			<div className="hidden md:block w-1/3 h-full pt-10 ">
				<div className="bg-black h-64 md:h-3/4 w-full mb-2 bg-uniImage bg-no-repeat bg-cover bg-center relative">
					<div className="absolute top-0 left-0 w-full h-full bg-primary-700 bg-opacity-50"></div>
				</div>
				<div className="h-64  w-full font-bold text-xl">
					Discover the Top-Ranked Universities and Lecturers with Us
				</div>
			</div>
		</div>
	);
};
