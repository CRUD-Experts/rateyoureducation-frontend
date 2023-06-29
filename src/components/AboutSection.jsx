import Section from "./Elements/Section";
import { About } from "./Sections/About";
// import SectionHeader from "./Headers/SectionHeader";

export const AboutSection = () => {
	return (
		<Section className={'mt-16'} >
			{/* <SectionHeader
				title="Why choose us?"
				subtitle="we are committed to providing you with the most 
      			accurate and up-to-date information on university and lecturer 
				rankings."
			/> */}
			<About />
		</Section>
	);
};
