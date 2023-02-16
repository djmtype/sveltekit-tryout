interface LoadParams {
  fetch: (url: string) => Promise<Response>;
  params: { tag: string };
}

interface Post {
  meta: { tags: string[], title: string };
  path: any;
}

interface LoadResult {
  tag: string;
  posts: Post[];
}

export const load = async ({ fetch, params }: LoadParams): Promise<LoadResult> => {
  const { tag } = params;
  const response = await fetch(`/api/posts`);
  const allPosts: Post[] = await response.json();

  const posts = allPosts.filter((post) => post.meta.tags.includes(tag));

  return {
    tag,
    posts,
  };
};
