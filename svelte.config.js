import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
// import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {

	kit: {
		adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    })
	},
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx']
		}),
		preprocess({ postcss: true })
		]
};

export default config;