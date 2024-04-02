import React, { useState } from "react";

export default function Prompt() {
	const [values, setValues] = useState({
		field1: "",
		field2: "",
		field3: "",
		field4: "",
		field5: "",
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setValues({
			...values,
			[name]: value,
		});

		const input = event.target;
		input.style.width = (input.value.length + 1) * 10 + "px";
	};

	return (
		<section className="flex flex-col items-center justify-center max-w-[1240px] mx-auto my-8 p-6 bg-[#cdcbd0] border border-gray-500 rounded-xl shadow text-[#1c1c1c] h-[70vh]">
			<div className="text-[#4a1c4c] text-center font-medium text-2xl my-7 inline-block">
				I want to create a{" "}
				<input
					type="text"
					name="field1"
					className="bg-[#cdcbd0] border-b-2 border-gray-700 outline-none"
					value={values.field1}
					onChange={handleInputChange}
					required
				/>{" "}
				seconds long video for social media. I run a{" "}
				<input
					type="text"
					name="field2"
					className="bg-[#cdcbd0] border-b-2 border-gray-700 outline-none"
					value={values.field2}
					onChange={handleInputChange}
					required
				/>{" "}
				and specialize in{" "}
				<input
					type="text"
					name="field3"
					className="bg-[#cdcbd0] border-b-2 border-gray-700 outline-none"
					value={values.field3}
					onChange={handleInputChange}
					required
				/>{" "}
				cuisine. The video has to be{" "}
				<input
					type="text"
					name="field4"
					className="bg-[#cdcbd0] border-b-2 border-gray-700 outline-none"
					value={values.field4}
					onChange={handleInputChange}
					required
				/>{" "}
				paced and my target audiences are{" "}
				<input
					type="text"
					name="field5"
					className="bg-[#cdcbd0] border-b-2 border-gray-700 outline-none"
					value={values.field5}
					onChange={handleInputChange}
					required
				/>
			</div>
			<button className="bg-[#736CED] p-5 rounded-xl hover:scale-110 transition ease-in-out duration-300 hover:ring-2">
				Generate Script
			</button>
		</section>
	);
}
