import { Outlet, useLocation } from "react-router-dom";
import Section from "../../components/Elements/Section";
// import UniversityRanking from "../../components/UniversityRanking";

export const RankingsLayout = () => {
	const { pathname } = useLocation();
	const currentPage = pathname.split("/")[2];
    
	return (
		<>
			<section className="bg-light-500 w-full h-80 bg-rankHeader flex items-center justify-center bg-no-repeat bg-cover bg-center relative isolate">
				<div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 -z-10"></div>
				<h1 className="text-center text-4xl text-light-100 font-extrabold">
					{currentPage === "universities" ? "University" : "Scholar"} Rankings
				</h1>
			</section>
			<Section className="mb-10" animate={false} >
				<div className="p-5 m-5 border border-light-600 rounded-md">
					<form className="flex flex-col items-center" >
						<input
							type="text"
							placeholder="Search for a university"
							className="w-full max-w-xl h-12 border-2 border-primary-900 rounded-md px-4 py-2"
						/>

						<div className="flex justify-between max-w-xl w-full gap-4 mt-4">
							<div className="flex-1">
								<label
									htmlFor="country"
									className="text-primary-900 font-bold text-lg">
									Country
								</label>
								<select
									name="country"
									id="country"
									className="w-full h-12 border-2 border-primary-900 rounded-md px-4 py-2">
									<option value="all">All</option>
									<option value="usa">USA</option>
									<option value="uk">UK</option>
									<option value="canada">Canada</option>
									<option value="australia">Ghana</option>
								</select>
							</div>
							<div className="flex-1">
								<label
									htmlFor="region"
									className="text-primary-900 font-bold text-lg">
									Region
								</label>
								<select
									name="region"
									id="region"
									className="w-full h-12 border-2 border-primary-900 rounded-md px-4 py-2">
									<option value="all">All</option>
									<option value="usa">USA</option>
									<option value="uk">UK</option>
									<option value="canada">Canada</option>
									<option value="australia">Ghana</option>
								</select>
							</div>
						</div>

						<button className="px-6 py-2 mt-3 bg-primary-900 hover:bg-primary-800 text-light-100 rounded-md transition ">
							Search
						</button>
					</form>
				</div>
			</Section>

      <Section className={'p-10'} animate={false}>

        <Outlet />
      </Section>
		</>
	);
};
