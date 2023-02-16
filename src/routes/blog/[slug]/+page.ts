// import { error } from "@sveltejs/kit";
// import type { PageLoad } from "./$types";

// export const load: PageLoad = async () => {
//   throw error(404, {message: 'Yikes'})
// };

let URL = import.meta.env.VITE_WP_URL;

const query = `
  query getPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      slug
      excerpt
    }
  }
  `




	export async function load({ params, fetch }: {
    params: any; fetch: any 
  }) {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          slug: params.slug,
        },
      }),
    })

    if (res.ok) {
      const resObj = await res.json()
      const post = resObj.data
      return post
      
    }
    
  }