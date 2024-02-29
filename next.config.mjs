/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	env: {
		BASE_URL: process.env.BASE_URL,
		COOKIE_NAME: process.env.COOKIE_NAME,
		ENCRYPT_SECRET_KEY: process.env.ENCRYPT_SECRET_KEY,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*",
			},
		],
	},
};

export default nextConfig;
