<script lang="ts">
	import type { PageData } from './$types';

	import Meta from '$lib/components/Meta.svelte';
	
	export let data: PageData;
	

	let description = 'Tags collection for ';
</script>

<Meta title={data.tag} description={description + data.tag} />

<h1>Tag: {data.tag}</h1>

{#if data.posts.length}
<ul>
	{#each data.posts as post}
		<li>
			<a href={post.path}>
				{post.meta.title}
			</a>
		</li>
	{/each}
</ul>
{:else}
<p>Sorry, no posts match this tag</p>
{/if}