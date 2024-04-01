import React from "react";

export default function Hero() {
	return (
		<section
			className="relative flex flex-col items-center justify-center max-w-[1240px] mx-auto my-8 p-6 bg-[#cfa88e] border border-gray-200 rounded-xl shadow text-[#1c1c1c] h-[70vh]"
			style={{ zIndex: -1 }}
		>
			<video
				autoPlay
				loop
				muted
				className="absolute inset-0 w-full h-full object-cover"
			>
				<source src="your-video-file.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="text-[#4a1c4c] w-fit rounded-lg bg-gradient-to-r from-[#D7B49E] to-[#f4bb97] p-4 hover:scale-110 transition ease-in-out duration-200 cursor-pointer hover:ring-2">
				Next generation of AI Video generation
			</div>
			<h1 className="text-[8rem] font-bold text-[#330036]">Turn your ideas</h1>
			<h1 className="text-[8rem] font-bold">
				<span className="text-[#330036]">into</span>{" "}
				<span className="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
					AI Videos
				</span>
			</h1>
			<div className="text-[#4a1c4c] text-center font-medium text-2xl max-w-4xl mx-auto">
				Transform your ideas into stunning videos with our AI video generator.
				EZ to use with multiple features like dynamic generation, AI Video
				Assistant and a wide range of AI-powered features.
			</div>
		</section>
	);
}
