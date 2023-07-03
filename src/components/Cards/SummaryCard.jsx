/* eslint-disable react/prop-types */
export const SummaryCard = ({ isLoading, children }) => {
	if (isLoading)
		return (
			<div className="flex items-center gap-5 w-80 h-24 bg-light-600 p-5 rounded-md text-primary-900/50 animate-pulse"></div>
		);
	return (
		<div className="flex items-center gap-5 mobile:w-80 bg-light-600/20 p-5 rounded-md text-primary-900/50">
			{children}
		</div>
	);
};
