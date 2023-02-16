import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	css: {
		devSourcemap: true,
	}
};

export default config;
