import Image from "next/image";
import menu from "@/public/hamburger.svg";

const Nav = () => {
	return (
		<div className="flex justify-between text-center items-center h-30 max-w-[1240px] mx-auto p-4 m-8 border-b-2 border-gray-700">
			<h1 className="flex-grow text-4xl font-bold text-[#860bb7]">Logo</h1>
			<div className="flex-grow text-center text-8xl font-bold text-[#860bb7]">
				Blink Of AI
			</div>
			<div className="flex-grow text-4xl font-bold text-[#860bb7]">
				<Image src={menu} alt="hamburger" width={50} height={50} />
			</div>
		</div>
	);
};

export default Nav;
