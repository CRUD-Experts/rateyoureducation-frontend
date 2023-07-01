import { Link } from "react-router-dom";

export const UniversityDetails = () => {
	return (
		<>
			<section className="bg-light-500 w-full h-80 bg-rankHeader bg-no-repeat bg-cover bg-center relative isolate p-5">
				<div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 -z-10"></div>
        <div>
          <div></div>
          <div className="text-white" >
            <h1 className="font-bold text-3xl" >University Name</h1>
            <h2>Country</h2>
            <div className="flex items-center gap-3" >
              <Link className="light-btn rounded-md" >Compare</Link>
              <button className="light-btn rounded-md" >View</button>
            </div>
          </div>
        </div>
			</section>
		</>
	);
};
