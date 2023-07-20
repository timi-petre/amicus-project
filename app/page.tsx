import style from './styles/components/Home.module.css';

export default function Home() {
	let shortDescription = `I Am Passionate Developer`;
	let longDescription =
		'The namics of how users interact with interactive elements within a user interface flow chart based on container proportion.';
	let intro = 'Hello there...';
	let fullName = 'Timotei Petre';

	return (
		<>
			<div className="flex justify-around">
				<div className="flex flex-col justify-center">
					<p>{intro}</p>
					<h1>{fullName}</h1>
					<p>{shortDescription}</p>
					<p>{longDescription}</p>
					<br />
					<div className="flex">
						<button
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ease-in duration-300"
						>
							My Work
						</button>
						<button
							type="button"
							className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-black dark:hover:bg-gray-100 dark:focus:ring-gray-800 ease-in duration-300"
						>
							Hire Me
						</button>
					</div>
				</div>

				<div className={`${style.blob} sm:max-lg:hidden`}></div>
			</div>

			<div className={`animate-bounce w-6 h-6 ${style.test}`}>
				<i className={`${style.circle_parent} fa-regular fa-circle`}>
					<i className={`fa-solid fa-chevron-down ${style.arrow_child}`}></i>
				</i>
			</div>
		</>
	);
}
