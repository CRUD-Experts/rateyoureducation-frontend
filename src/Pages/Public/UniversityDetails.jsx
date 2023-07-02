import {
	faBarChart,
	faBook,
	faExclamationCircle,
	faGraduationCap,
	faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import Section from "../../components/Elements/Section";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FetchError } from "../../components/Errors/Errors";

export const UniversityDetails = () => {
	const { id } = useParams();
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
    async function getUniversity() {
      setIsLoading(true)
      const url = `https://rateyoureducation-backend.up.railway.app/universities/${id}`;
      try {
        const response = await fetch(url);
  
        if (!response.ok) {
          setError(true);
          setIsLoading(false);
        }
  
        const university = await response.json();
        if(university)
        setData(university);
        setError(false);
        
      } catch (err) {
        setError(true);
      }
      setIsLoading(false)
    }
		getUniversity();
	}, [id]);

  if(error) return (
    <FetchError />
  )
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
								<motion.div
									initial={{ opacity: 0, translateY: -20 }}
									animate={{ opacity: 1, translateY: 0 }}
									exit={{ opacity: 0, translateY: -20 }}
									className="bg-light-300 h-9 w-full max-w-96 rounded-xl animate-pulse mb-3"></motion.div>
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
							<div className="bg-light-300 h-7 w-48 rounded-xl animate-pulse mb-2"></div>
						) : (
							<h2 className="text-2xl mb-3 text-center mobile:text-left transition-all ease-in">
								{data.metadata[0].country}
							</h2>
						)}
						<div className="flex flex-col mobile:flex-row justify-center mobile:justify-start items-center gap-3">
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
					<div className="flex items-center gap-5 mobile:w-80 bg-light-600/20 p-5 rounded-md text-primary-900/50">
						<FontAwesomeIcon
							icon={faRankingStar}
							className="text-5xl"
						/>
						<div className="flex flex-col">
							<span className="font-medium text-3xl">#4</span>
							<span>World Rankings</span>
						</div>
					</div>

					<div className="flex items-center gap-5 mobile:w-80 bg-light-600/20 p-5 rounded-md text-primary-900/50">
						<FontAwesomeIcon
							icon={faGraduationCap}
							className="text-5xl"
						/>
						<div className="flex flex-col">
							<span className="font-medium text-3xl">345</span>
							<span>Scholars</span>
						</div>
					</div>

					<div className="flex items-center gap-5 mobile:w-80 bg-light-600/20 p-5 rounded-md text-primary-900/50">
						<FontAwesomeIcon
							icon={faBook}
							className="text-5xl"
						/>
						<div className="flex flex-col">
							<span className="font-medium text-3xl">345</span>
							<span>Publications</span>
						</div>
					</div>

					<div className="flex items-center gap-5 mobile:w-80 bg-light-600/20 p-5 rounded-md text-primary-900/50">
						<FontAwesomeIcon
							icon={faBarChart}
							className="text-5xl"
						/>
						<div className="flex flex-col">
							<span className="font-medium text-3xl">345</span>
							<span>Total h-index</span>
						</div>
					</div>
				</Section>
			</div>
		</>
	);
};
