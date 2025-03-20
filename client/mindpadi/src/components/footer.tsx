
// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
// 	return (
// 		<footer className="bg-[#001358] py-10">
// 			<div className="flex flex-col items-start justify-between gap-4 max-w-screen-2xl px-4 mx-auto space-y-4">
// 				<div>
// 					<Image
// 						className="mb-4"
// 						src="/assets/mindpadi_white.svg"
// 						width={88}
// 						height={25}
// 						alt="MindPadi logo"
// 						draggable={false}
// 						priority
// 					/>
// 					<p className="text-xs text-white">
// 						&copy; {new Date().getFullYear()} Mindpadi AI, Inc. All Rights
// 						Reserved.
// 					</p>
// 				</div>
// 				<div className="flex flex-row items-center gap-x-6">
// 					<Link
// 						href="https://x.com/mindpadi"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 					>
// 						<Image
// 							src="/assets/x.svg"
// 							width={24}
// 							height={24}
// 							alt="X icon"
// 							draggable={false}
// 							priority
// 						/>
// 					</Link>
// 					<Link
// 						href="http://linkedin.com/company/mindpadi-chatbot"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 					>
// 						<Image
// 							src="/assets/linkedin.svg"
// 							width={24}
// 							height={24}
// 							alt="LinkedIn icon"
// 							draggable={false}
// 							priority
// 						/>
// 					</Link>
// 					<Link
// 						href="https://www.instagram.com/mindpadi"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 					>
// 						<Image
// 							src="/assets/instagram.svg"
// 							width={24}
// 							height={24}
// 							alt="Instagram icon"
// 							draggable={false}
// 							priority
// 						/>
// 					</Link>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }


import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="bg-gray-100 py-6 text-center">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
				<div className="flex items-center space-x-2">
					<Image src="/mnt/data/image.png" alt="MindPadi Logo" width={40} height={40} />
					<span className="text-lg font-semibold text-gray-900">MindPadi</span>
				</div>
				<div className="text-gray-700 text-sm mt-4 md:mt-0">
					<p className="font-semibold">Find Us On Social Media:</p>
					<div className="flex space-x-4 justify-center mt-2">
						<a href="#" className="text-gray-600 hover:text-blue-600 text-lg"><FaFacebook /></a>
						<a href="#" className="text-gray-600 hover:text-blue-400 text-lg"><FaTwitter /></a>
						<a href="#" className="text-gray-600 hover:text-pink-600 text-lg"><FaInstagram /></a>
					</div>
				</div>
				<div className="text-gray-700 text-sm mt-4 md:mt-0">
					<p className="font-semibold">We're Always Happy To Help</p>
					<p className="text-blue-500">support@mindpadi.com</p>
				</div>
			</div>
			<hr className="my-4 border-gray-300" />
			<p className="text-gray-500 text-sm">Copyright © 2022 MindPadi</p>
		</footer>
	);
}
