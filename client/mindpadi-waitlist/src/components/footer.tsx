import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-[#001358] py-10">
			<div className="flex flex-col items-start justify-between gap-4 max-w-screen-2xl px-4 mx-auto space-y-4">
				<div>
					<Image
						className="mb-4"
						src="/assets/mindpadi_white.svg"
						width={88}
						height={25}
						alt="MindPadi logo"
						draggable={false}
						priority
					/>
					<p className="text-xs text-white">
						&copy; {new Date().getFullYear()} Mindpadi AI, Inc. All Rights
						Reserved.
					</p>
				</div>
				<div className="flex flex-row items-center gap-x-6">
					<Link
						href="https://x.com/mindpadi"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/assets/x.svg"
							width={24}
							height={24}
							alt="X icon"
							draggable={false}
							priority
						/>
					</Link>
					<Link
						href="http://linkedin.com/company/mindpadi-chatbot"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/assets/linkedin.svg"
							width={24}
							height={24}
							alt="LinkedIn icon"
							draggable={false}
							priority
						/>
					</Link>
					<Link
						href="https://www.instagram.com/mindpadi"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/assets/instagram.svg"
							width={24}
							height={24}
							alt="Instagram icon"
							draggable={false}
							priority
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
}
