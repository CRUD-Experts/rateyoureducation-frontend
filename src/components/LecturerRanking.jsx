/* eslint-disable react/prop-types */
import { StackedImages } from "./Aesthetics/StackedImages";
import { Button } from "./Elements/Buttons/Button";
import Section from "./Elements/Section";
import { FetchError } from "./Errors/Errors";
import SectionHeader from "./Headers/SectionHeader";
import { IndiLectureRank } from "./IndiLectureRank";
import { IndiRankLoader } from "./loaders/IndiRankLoader";
import { useState, useEffect } from "react";

export const LecturerRanking = ({
	limit = 5,
	hasImage = true,
	hasButton = true,
	animate = true,
}) => {
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	async function getScholars() {
		setIsLoading(true)
		const url = "https://rate-your-education.onrender.com/scholars";
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
		getScholars();
	}, []);

	if (isLoading) {
		return <IndiRankLoader />;
	}
	return (
		<>
			<Section animate={animate} className={'px-5 mt-36 mobile:mt-20'} >
				<SectionHeader title="Best Lecturers" />
				<div className="flex tablet:flex-row flex-col-reverse gap-10 mt-14 items-center">
					<div className="w-full">
						<h3 className="mb-2 font-semibold">
							Top {limit} scholars
						</h3>
						{error ? (
							<FetchError tryFunction={getScholars} />
						) : (
							data.map((rank, index) => {
								if (index + 1 > limit) return;
								return (
									<IndiLectureRank
										rank={index + 1}
										key={index}
										university={rank.university}
										name={rank.name}
										imageUrl={rank.image}
										citations={rank.indexes.Citations}
										hIndex={rank.indexes.Citations}
									/>
								);
							})
						)}

						{hasButton && (
							<Button
								to="rankings/scholars"
								className="ml-8">
								View All
							</Button>
						)}
					</div>
					{hasImage && <StackedImages />}
				</div>
			</Section>
		</>
	);
};
