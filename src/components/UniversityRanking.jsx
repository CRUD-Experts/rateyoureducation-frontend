import { Link } from "react-router-dom";
import Section from "./Elements/Section";
import SectionHeader from "./Headers/SectionHeader";
import { IndiRanks } from "./IndiRanks";
import { universities } from "../DummyData";

const UniversityRanking = () => {
	const data = universities;

	return (
		<Section className="p-5">
			<SectionHeader
				title="Top Universities"
				subttile="Welcome to our TOP UNIVERSITY section, where we showcase
						the very best universities in the world! Our rankings are based
						on a variety of factors, including academic performance, research
						output, student satisfaction, and more."
			/>
			<div className="flex tablet:flex-row flex-col-reverse gap-10 mt-14 items-center">
				<div className="w-full">
					<h3 className="mb-2 font-semibold">Top 5 Universities</h3>
					{data.map((rank, index) => (
						<IndiRanks
							rank={index + 1}
							key={index}
							name={rank.name}
							logo={rank.logo}
							scholars={rank.scholars}
							publications={rank.publications}
							hIndex={rank.hIndex}
						/>
					))}
					<Link
						to="/universities"
						className="primary-outline-btn btn text-sm">
						View All
					</Link>
				</div>

				<div className="h-96 relative isolate w-full px-2 overflow-hidden">
					<div className="absolute top-0 right-0 w-1/2 h-full bg-black">
						<img
							src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80"
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="absolute top-1/2 -translate-y-1/2 right-36 w-1/2 h-4/5 bg-red-400 ring-8 ring-light-500">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/University_Library_complex.JPG/1280px-University_Library_complex.JPG"
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="absolute top-1/2 -translate-y-1/2 right-64 w-1/2 h-3/5 bg-green-400 ring-8 ring-light-500">
						<img
							src="https://images.unsplash.com/photo-1609864031983-4c77af00b8d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default UniversityRanking;
