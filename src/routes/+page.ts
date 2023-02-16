import type { PageLoad } from './$types';

export const load = (() => {

	return {
		name: 'John Frak',
		title: 'The Home Page'
	}
	
}) satisfies PageLoad;