/* eslint-disable react/prop-types */
import Section from "./Elements/Section";
import SectionHeader from "./Headers/SectionHeader";
import { IndiRanks } from "./IndiRanks";
import { StackedImages } from "./Aesthetics/StackedImages";
import { Button } from "./Elements/Buttons/Button";
import { useEffect, useState } from "react";
import { IndiRankLoader } from "./loaders/IndiRankLoader";
import { FetchError } from "./Errors/Errors";
import { AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

const UniversityRanking = ({
	limit = 5,
	hasButton = true,
	hasImages = true,
	animate = true,
}) => {
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	async function getUniversities() {
		setIsLoading(true);
		const url =
			"https://rateyoureducation-backend.up.railway.app/universities";

		try {
			const response = await fetch(url, {
				accept: "application/json",
			});

			setIsLoading(false);
			if (!response.ok) {
				setError(true);
			} else {
				const universities = await response.json();
				setData(universities);
			}
			setIsLoading(false);
		} catch (err) {
			setError(true);
			setIsLoading(false);
		}
	}
	useEffect(() => {
		getUniversities();
	}, []);

	if (isLoading) {
		return <IndiRankLoader />;
	}
	return (
		<Section
			animate={animate}
			className={"px-5"}>
			<SectionHeader
				title="Top Universities"
				subtitle="Welcome to our TOP UNIVERSITY section, where we showcase
						the very best universities in the world! Our rankings are based
						on a variety of factors, including academic performance, research
						output, student satisfaction, and more."
			/>
			<div className="flex tablet:flex-row flex-col-reverse gap-10 mt-14 items-center">
				<div className="w-full">
					<h3 className="mb-2 font-semibold">
						Top {limit} Universities
					</h3>
					<AnimatePresence>
						{error ? (
							<FetchError tryFunction={getUniversities} />
						) : (
							data.map((rank, index) => {
								if (index + 1 > limit) return;
								return (
									<IndiRanks
										id={rank._id}
										rank={index + 1}
										key={index}
										name={rank.metadata[0].org}
										location={`${rank.metadata[0].country}, ${rank.metadata[0].continent}`}
										logo={rank.logo}
										scholars={rank.number_of_scholars}
										publications={rank.total_citations}
										hIndex={rank.total_h_index}
									/>
								);
							})
						)}
					</AnimatePresence>

					{hasButton && (
						<Button
							to="rankings/universities"
							className="ml-8">
							View All
						</Button>
					)}
				</div>
				{hasImages && (
					<StackedImages
						imgOne="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80"
						imgTwo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/University_Library_complex.JPG/1280px-University_Library_complex.JPG"
						imgThree="https://images.unsplash.com/photo-1609864031983-4c77af00b8d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
					/>
				)}
			</div>
		</Section>
	);
};

export default UniversityRanking;
