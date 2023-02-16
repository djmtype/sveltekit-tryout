let URL = import.meta.env.VITE_WP_URL;

const query = `
  query Posts {
    posts {
        nodes {
          databaseId
          slug
          uri
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
    }
  `;
  export async function load({ fetch }: { fetch: any}) {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    if (res.ok) {
      const resObj = await res.json()
      const posts = resObj.data.posts.nodes
      return {
          posts

      }
    }
  }