/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    nextConfig,
    rules: {
		'testing-library/no-await-sync-events': [
			'error',
			{ eventModules: ['fire-event', 'user-event'] },
		],
	},
}
