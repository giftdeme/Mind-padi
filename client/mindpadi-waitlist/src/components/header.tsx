import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="py-4 w-full px-6 flex flex-col items-start max-w-screen-2xl mx-auto">
			<Link href="/">
				<Image
					width={129}
					height={36}
					src="/assets/mindpadi_blue.svg"
					draggable={false}
					alt="MindPadi logo"
					priority
				/>
			</Link>
		</header>
	);
}
