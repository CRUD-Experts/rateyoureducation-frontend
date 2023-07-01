/* eslint-disable react/prop-types */
import { StackedImages } from "./Aesthetics/StackedImages";
import { Button } from "./Elements/Buttons/Button";
import Section from "./Elements/Section";
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
	const [errorMsg, setErrorMsg] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		const url = "https://rateyoureducation-backend.up.railway.app/scholars";
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					setError(true);
					setErrorMsg("Something went wrong!");
					// throw new Error("Something went wrong!");
				}
				return res.json();
			})
			.then((data) => {
				setIsLoaded(true);
				setData(data);
				// console.log(data);
			})
			.catch((err) => {
				setIsLoaded(true);
				setError(true);
				setErrorMsg(err);
			});
	}, [setIsLoaded, setData, setError]);

	if (!isLoaded) {
		return <IndiRankLoader />;
	}
	return (
		<>
			<Section animate={animate}>
				<SectionHeader title="Best Lecturers" />
				<div className="flex tablet:flex-row flex-col-reverse gap-10 mt-14 items-center">
					<div className="w-full">
						<h3 className="mb-2 font-semibold">
							Top {limit} scholars
						</h3>
						{error ? (
							<div className="text-center p-5 bg-red-600/60 text-white rounded-md w-full max-w-lg">
								<p>{errorMsg}</p>
								<button className="px-4 py-2 bg-primary-700 hover:bg-primary-800 text-light-100 rounded-sm mt-3">
									Try Again
								</button>
							</div>
						) : (
							data.map((rank, index) => (
								<IndiLectureRank
									rank={index + 1}
									key={index}
									name={rank.name}
									imageUrl={rank.image}
									citations={rank.indexes.Citations}
									hIndex={rank.indexes.Citations}
								/>
							))
						)}

						{hasButton && (
							<Button className="ml-8">View All</Button>
						)}
					</div>
					{hasImage && <StackedImages />}
				</div>
			</Section>
		</>
	);
};
