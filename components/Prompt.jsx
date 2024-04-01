import React from "react";

export default function Prompt() {
	return (
		<section className="flex flex-col items-center justify-center max-w-[1240px] mx-auto my-8 p-6 bg-[#cdcbd0] border border-gray-500 rounded-xl shadow text-[#1c1c1c] h-[70vh]">
			<div className="text-[#4a1c4c] text-center font-medium text-2xl max-w-4xl mx-auto my-7">
				I want to create a <input type="text" className="" /> seconds long video
				for social media. I run a
			</div>
			<button className="bg-[#736CED] p-5 rounded-xl hover:scale-110 transition ease-in-out duration-300 hover:ring-2">
				Generate Script
			</button>
		</section>
	);
}
