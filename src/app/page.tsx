import Speech from "react-speech";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
	return (
		<div className="grid grid-cols-1 grid-rows-[auto_minmax(30px,_1fr)_auto] gap-4 min-h-screen px-4">
			<header className="py-4 border-b-1 border-gray-300">
				<h1 className="uppercase text-3xl font-semibold text-center">
					abc game - לימוד אותיות אב
				</h1>
			</header>

			<main className="grid place-content-center py-4">
				<div className="text-9xl">א</div>
				{/* <Speech text="Welcome to react speech" /> */}
			</main>

			<footer className="border-t-1 border-gray-300 text-center py-4 flex justify-between text-sm text-gray-500">
				<a href="www.danieltsionit.com" className="underline">
					www.danieltsionit.com
				</a>
				<div className="flex gap-2">
					<span>כל הזכויות שמורות</span>
					<FontAwesomeIcon icon={faCopyright} className="w-4" />
				</div>
			</footer>
		</div>
	);
}
