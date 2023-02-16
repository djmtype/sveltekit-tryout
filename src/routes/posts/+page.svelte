<script lang="ts">
	import type { PageData } from './$types';

	import Meta from '$lib/components/Meta.svelte';
	import {longDate} from '$lib/utils/helpers'
	
	export let data: PageData;

	let title = 'Posts';
	let description = 'Posts page';
</script>

<Meta {title} {description} />

<h1>{title}</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {longDate(post.meta.date)}
		</li>
	{/each}
</ul>
