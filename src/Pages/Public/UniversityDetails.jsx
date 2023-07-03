import {
	faBarChart,
	faBook,
	faExclamationCircle,
	faGlobe,
	faGraduationCap,
	faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FetchError } from "../../components/Errors/Errors";
import Section from "../../components/Elements/Section";
import { SummaryCard } from "../../components/Cards/SummaryCard";
import SectionHeader from "../../components/Headers/SectionHeader";
import { UniversityScholars } from "../../components/Lists/UniversityScholars";

export const UniversityDetails = () => {
	const { id } = useParams();
	const [error, setError] = useState(null);
	const [errorMsg, setErrorMsg] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [metadata, setMetadata] = useState([]);

	useEffect(() => {
		async function getUniversity() {
			setIsLoading(true);
			const url = `https://rateyoureducation-backend.up.railway.app/universities/${id}`;
			try {
				const response = await fetch(url);

				if (response.status == 400) {
					setError(true);
					setErrorMsg("University not found");
					setIsLoading(false);
					return;
				}

				if (!response.ok) {
					setError(true);
					setIsLoading(false);
					return;
				}

				const university = await response.json();
				setData(university);
				setMetadata(university.metadata[0]);
				setError(false);
			} catch (err) {
				setError(true);
			}
			setIsLoading(false);
		}
		getUniversity();
	}, [id]);

	if (error) return <FetchError message={errorMsg != "" && errorMsg} />;

	return (
		<>
			<section className="flex items-end justify-center  bg-light-500 w-full bg-uniImage bg-no-repeat bg-cover bg-center relative isolate p-7 py-10">
				<div className="bg-black/90 w-full h-full absolute top-0 left-0 -z-10"></div>
				<div className="flex flex-col mobile:flex-row items-center justify-center px-5 gap-5">
					{isLoading ? (
						<div className="animate-pulse w-40 mobile:w-48 h-40 mobile:h-48 bg-light-100 rounded-full"></div>
					) : (
						<div className="w-40 mobile:w-48 h-40 mobile:h-48 bg-light-100 rounded-full"></div>
					)}
					<div className="text-white">
						<AnimatePresence>
							{isLoading ? (
								<>
									<motion.div
										initial={{
											opacity: 0,
											translateY: -20,
										}}
										animate={{ opacity: 1, translateY: 0 }}
										exit={{ opacity: 0, translateY: -20 }}
										className="bg-light-300 h-9 w-full max-w-96 rounded-xl animate-pulse mb-3"></motion.div>
									<motion.div
										initial={{
											opacity: 0,
											translateY: -20,
										}}
										animate={{ opacity: 1, translateY: 0 }}
										exit={{ opacity: 0, translateY: -20 }}
										className="bg-light-300 h-9 w-3/5 max-w-96 rounded-xl animate-pulse mb-3"></motion.div>
								</>
							) : (
								<motion.h1
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									className="font-bold text-center mobile:text-left text-4xl mobile:text-5xl  max-w-3xl">
									{data.metadata[0].org}
								</motion.h1>
							)}
						</AnimatePresence>

						{isLoading ? (
							<motion.div
								initial={{ opacity: 0, translateY: -20 }}
								animate={{ opacity: 1, translateY: 0 }}
								exit={{ opacity: 0, translateY: -20 }}
								className="bg-light-300 h-5 w-48 rounded-xl animate-pulse mb-2"></motion.div>
						) : (
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="text-2xl mb-3 mt-2 text-center mobile:text-left transition-all ease-in">
								<FontAwesomeIcon
									icon={faGlobe}
									className="mr-2"
								/>
								{data.metadata[0].country},{" "}
								{data.metadata[0].continent}
							</motion.h2>
						)}
						<div className="flex flex-col mobile:flex-row justify-center mobile:justify-start items-center gap-3">
							{isLoading ? (
								<>
									<div className="w-36 h-10 bg-light-600 rounded-md animate-pulse"></div>
									<div className="w-36 h-10 bg-light-600 rounded-md animate-pulse"></div>
								</>
							) : (
								<>
									<Link className="light-btn rounded-md px-6 py-3">
										<FontAwesomeIcon
											icon={faExclamationCircle}
											className="mr-2"
										/>
										More Details
									</Link>
									<Link className="light-btn rounded-md px-6 py-3">
										<FontAwesomeIcon
											icon={faExclamationCircle}
											className="mr-2"
										/>
										Compare schools
									</Link>
								</>
							)}
						</div>
					</div>
				</div>
			</section>

			<div className="w-full bg-light-500 px-5 py-10 mb-20">
				<Section
					animate={false}
					className={
						"flex flex-col mobile:flex-row flex-wrap gap-10 items-stretch justify-evenly"
					}>
					<SummaryCard isLoading={isLoading}>
						<FontAwesomeIcon
							icon={faRankingStar}
							className="text-5xl"
						/>
						<div className="flex flex-col">
							<motion.span
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="font-medium text-3xl">
								#4
							</motion.span>
							<span>World Rankings</span>
						</div>
					</SummaryCard>

					<SummaryCard isLoading={isLoading}>
						<FontAwesomeIcon
							icon={faGraduationCap}
							className="text-5xl"
						/>
						<div className="flex flex-col">
							<motion.span
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="font-medium text-3xl">
								{data.number_of_scholars}
							</motion.span>
							<span>Scholars</span>
						</div>
					</SummaryCard>

					<SummaryCard isLoading={isLoading}>
						<FontAwesomeIcon
							icon={faBook}
							className="text-5xl"
						/>
						<div className="flex flex-col">
							<motion.span
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="font-medium text-3xl">
								{data.total_publications}
							</motion.span>
							<span>Publications</span>
						</div>
					</SummaryCard>

					<SummaryCard isLoading={isLoading}>
						<FontAwesomeIcon
							icon={faBarChart}
							className="text-5xl"
						/>
						<div className="flex flex-col">
							<motion.span
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="font-medium text-3xl">
								{data.total_h_index}
							</motion.span>
							<span>Total h-index</span>
						</div>
					</SummaryCard>
				</Section>
			</div>
			{isLoading ? (
				<>
					<div className="w-full max-w-3xl ms-auto me-auto mb-2 bg-light-600 h-16 rounded-md animate-pulse"></div>
					<div className="w-full max-w-7xl ms-auto me-auto bg-light-600 h-60 rounded-md animate-pulse"></div>
				</>
			) : (
				<Section animate={false}>
					<SectionHeader title={`About ${metadata.org} `} />
					<p className="px-5">
						{metadata.org} ({metadata.alias}) is a{" "}
						{metadata.org_type} in {""}
						{metadata.country}, {metadata.continent}. It currently
						has {""}
						{data.number_of_scholars} number of scholars who
						collectively have {""}
						{data.total_publications} publications. There have been{" "}
						{data.total_citations} {""}
						citations from {metadata.alias} in total. Currently,
						based on our methodology, {""}
						{metadata.alias} is ranked 4th in the global university
						rankings. To know more about {metadata.alias}, click{" "}
						<a
							href={metadata.url}
							className="text-primary-700 italic hover:underline"
							target="_blank"
							rel="noreferrer">
							here
						</a>
					</p>
				</Section>
			)}

			<Section animate={false} className={'mt-20'} >
				<SectionHeader title={`Scholars in ${metadata.org}`} />
				<UniversityScholars id={id} />
			</Section>
		</>
	);
};
