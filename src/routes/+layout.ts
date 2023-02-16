// import type { LayoutLoad } from "./$types";

// export const load: LayoutLoad = async ({ url: { pathname } }): Promise<{ pathname: string }> => {
// 	return { pathname };
// };

import type { LayoutLoad } from './$types'

export const load: LayoutLoad = ({ url }) => {
  return { url: url.pathname }
}

export const prerender = true
export const csr = true