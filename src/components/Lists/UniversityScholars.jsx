import { BACKEND_API_URL } from "../../utilities/constants";
import { FetchError } from "../Errors/Errors";
import { IndiLectureRank } from "../IndiLectureRank";
import { IndiRankLoader } from "../loaders/IndiRankLoader";
import { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';

export const UniversityScholars = ({ id }) => {
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [tryCount, setTryCount] = useState(0);

	const getScholars = useCallback(async () => {
		setIsLoading(true);
		const url =
			`${BACKEND_API_URL}/scholars?university_id=${id}`;
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
	}, [id]
)
	useEffect(() => {
		if (tryCount >= 10) return;

		getScholars();
	}, [getScholars, tryCount]);

	if (isLoading) {
		return <IndiRankLoader />;
	}
	return (
		<>
			<div className="flex tablet:flex-row flex-col-reverse gap-10 mt-14 items-center">
				<div className="w-full">
					{error ? (
						<FetchError
							tryFunction={() => setTryCount(tryCount + 1)}
						/>
					) : (
						data.map((rank, index) => {
							return (
								<IndiLectureRank
									rank={index + 1}
									key={index}
									name={rank.name}
									imageUrl={rank.image}
									citations={rank.indexes.Citations}
									hIndex={rank.indexes.Citations}
								/>
							);
						})
					)}
				</div>
			</div>
		</>
	);
};

UniversityScholars.propTypes = {
	id: PropTypes.string.isRequired
}
