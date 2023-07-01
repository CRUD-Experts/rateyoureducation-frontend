/* eslint-disable react/prop-types */

import errorImg from "../../assets/icons/error.svg";
export const FetchError = ({ message, tryFunction }) => {
	return (
		<>
			<div className="flex flex-col items-center p-5">
				<div className="w-72 h-72">
					<img
						src={errorImg}
						alt="Error illustration"
						className="w-full h-full object-cover"
					/>
				</div>
				<h1 className="text-3xl font-semibold text-center mt-5">
					{message || "Oops! Something went wrong."}
				</h1>
				<p className="text-center mt-2">
					We could not fetch the data. <br />
                    Please try again later
				</p>
				<div className="flex justify-center mt-5">
					<button
						onClick={tryFunction}
						className="px-4 py-2 bg-primary-700 hover:bg-primary-800 text-light-100 rounded-sm">
						Try Again
					</button>
				</div>
			</div>
		</>
	);
};
