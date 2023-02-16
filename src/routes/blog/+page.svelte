<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import Meta from '$lib/components/Meta.svelte';
	export let data: PageData;

	const { posts } = data;

  let title = "Phat Blog"
  let description = "Wordpress posts from somewhere"
</script>

<Meta title={title} description={description} />

<h1>{title}</h1>

{#each posts as post}
	<a href={`/blog/${post.slug}`}>
		<h2>{post?.title}</h2>
	</a>
	{@html post?.excerpt}
{/each}


