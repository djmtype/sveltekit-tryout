<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import {longDate} from '$lib/utils/helpers'
	export let data;
	const { title, date, tags, description, Content } = data;
</script>

<Meta {title} {description} />

<article>
	<h1>{title}</h1>
	<p>Published: {longDate(date)}</p>
	<ul>
		{#each tags as tag}
			<li>
				{tag}
			</li>
		{/each}
	</ul>

	<Content />
</article>
