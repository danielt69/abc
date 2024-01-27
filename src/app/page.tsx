import Image from "next/image";

export default function Home() {
	return (
		<div className="grid grid-cols-1 grid-rows-[auto_minmax(30px,_1fr)_auto] gap-4 min-h-screen px-4">
			<header className="py-4 border-b-1 border-gray-300">
				<h1 className="uppercase text-3xl font-semibold text-center">
					abc game
				</h1>
			</header>

			<main className="grid place-content-center py-4">
				<div className="text-9xl">א</div>
			</main>

			<footer className="border-t-1 border-gray-300 text-center py-4">
				footer
			</footer>
		</div>
	);
}
