import Section from "./Elements/Section";
import SectionHeader from "./Headers/SectionHeader";
import { IndiRanks } from "./IndiRanks";
import { universities } from "../DummyData";
import { StackedImages } from "./Aesthetics/StackedImages";
// import { OutlineButton } from "./Elements/Buttons/OutlineButton";
import { Button } from "./Elements/Buttons/Button";

const UniversityRanking = () => {
	const data = universities;

	return (
		<Section className="p-5">
			<SectionHeader
				title="Top Universities"
				subtitle="Welcome to our TOP UNIVERSITY section, where we showcase
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
					<Button   className="ml-8" >
						View All
					</Button>
					
				</div>

				<StackedImages
					imgOne="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80"
					imgTwo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/University_Library_complex.JPG/1280px-University_Library_complex.JPG"
					imgThree="https://images.unsplash.com/photo-1609864031983-4c77af00b8d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
				/>
			</div>
		</Section>
	);
};

export default UniversityRanking;
