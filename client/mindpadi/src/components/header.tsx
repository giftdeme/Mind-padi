import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

export default function Header() {
	return (
		<header className="py-4 w-full px-6 flex items-center justify-between max-w-screen-2xl mx-auto">
			{/* Logo Section */}
			<Link href="/" className="flex items-center gap-2">
				<Image
					width={50}
					height={20}
					src={logo}
					draggable={false}
					alt="MindPadi logo"
					priority
				/>
				<p className="text-lg font-semibold">MindPadi</p>
			</Link>

			{/* Navigation Links */}
			<nav>
				<ul className="flex gap-6">
					<li><Link href="#">Home</Link></li>
					<li><Link href="#">Features</Link></li>
					<li><Link href="#">About</Link></li>
					<li><Link href="#">Pricing</Link></li>
					<li><Link href="#">FAQs</Link></li>
				</ul>
			</nav>

			{/* Auth Buttons */}
			<div className="flex gap-4">
				<Link href="#">
					<button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full">Sign Up</button>
				</Link>
				<Link href="#">
					<button className="px-4 py-2 border  bg-blue-600 text-white  rounded-full">Sign In</button>
				</Link>
			</div>
		</header>
	);
}
