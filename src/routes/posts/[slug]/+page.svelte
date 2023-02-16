<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import type { PageData } from './$types'
	import Meta from '$lib/components/Meta.svelte';
	import {longDate} from '$lib/utils/helpers'
	export let data: PageData;
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

{#if data.tags.length}
  <aside>
    <h2>Posted in:</h2>
    <ul>
      {#each data.tags as tag}
        <li>
          <a href="/posts/tag/{tag}">
            {tag}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}
