import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Blink Of AI</title>
				<meta
					key="viewport"
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta name="description" content="AI Video Generator and Editor" />
				<meta property="og:title" content="Blink Of AI" />
				<meta
					property="og:description"
					content="AI Video Generator and Editor"
				/>

				<meta
					property="og:image"
					content="https://repository-images.githubusercontent.com/201392697/5d392300-eef3-11e9-8e20-53310193fbfd"
				/>
			</Head>
			<main>{children}</main>
		</>
	);
};

export default Layout;
