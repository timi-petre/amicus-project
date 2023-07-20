import Link from 'next/link';
export default function Navbar() {
	return (
		<>
			<nav className="sm:flex sm:justify-between flex-wrap mx-5 my-5 space-x-4  w-full">
				<Link href="/">
					<h1 className="text-2xl leading-loose">Timi</h1>
				</Link>
				<div>
					{[
						['Home', '/'],
						['Blog', '/navigation/blog'],
						['About', '/navigation/about'],
						['Projects', '/projects'],
					].map(([title, url]) => (
						<Link
							href={url}
							key={title}
							className="rounded-lg my-5 mx-2 px-3 py-2 text-white-700 font-medium hover:bg-slate-100 hover:text-slate-900 ease-in duration-200"
						>
							{title}
						</Link>
					))}
				</div>
			</nav>
		</>
	);
}
