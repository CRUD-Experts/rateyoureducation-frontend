/* eslint-disable react/prop-types */
import Section from "./Elements/Section";
import SectionHeader from "./Headers/SectionHeader";
import { IndiRanks } from "./IndiRanks";
import { StackedImages } from "./Aesthetics/StackedImages";
import { Button } from "./Elements/Buttons/Button";
import { useEffect, useState } from "react";
import { IndiRankLoader } from "./loaders/IndiRankLoader";

const UniversityRanking = ({
	limit = 5,
	hasButton = true,
	hasImages = true,
	animate = true,
}) => {
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		const url =
			"https://rateyoureducation-backend.up.railway.app/universities";
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					setError(true);
					// throw new Error("Something went wrong!");
					console.log(res.status);
					return res.status;
				}
				return res.json();
			})
			.then((data) => {
				if(data > 400) {
					setErrorMsg("Something went wrong!");
					// throw new Error("Something went wrong!");
					return
				}
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
		return (
			<IndiRankLoader />
		);
	}
	return (
		<Section animate={animate} >
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
					{error ? (
						<div className="text-center p-5 bg-red-600/60 text-white rounded-md w-full max-w-lg">
							<p>{errorMsg}</p>
							<button className="px-4 py-2 bg-primary-700 hover:bg-primary-800 text-light-100 rounded-sm mt-3">
								Try Again
							</button>
						</div>
					) : (
						data.map((rank, index) => {
							if (index + 1 > limit) return;
							return (
								<IndiRanks
									rank={index + 1}
									key={index}
									name={rank.vfn_id}
									logo={rank.logo}
									scholars={rank.number_of_authors}
									publications={rank.total_citations}
									hIndex={rank.total_h_index}
									loaded={isLoaded}
								/>
							);
						})
					)}

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
