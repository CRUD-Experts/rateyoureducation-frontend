import { HomeCarousel } from "../../components/HomeCarousel";
import Features from "../../components/HomeFeatures/Features";
import { LecturerRanking } from "../../components/LecturerRanking";
import { AboutSection } from "../../components/AboutSection";
import { UniversityRanking } from "../../components/UniversityRanking";

export const Home = () => {
	return (
		<>
			<section className="w-full h-md mobile:h-lg desktop:h-xl bg-light-900 relative">
				<HomeCarousel />
			</section>
			<Features animate={false} />
			<UniversityRanking animate={false} />
			<LecturerRanking animate={false} />
			<AboutSection />
		</>
	);
};
