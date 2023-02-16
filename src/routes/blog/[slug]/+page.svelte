<script lang="ts">
	import {removeTags} from '$lib/utils/helpers'
	import { page } from '$app/stores';
	import Meta from '$lib/components/Meta.svelte';

	export let data;

	const { post } = data;




</script>

<Meta title={post?.title} description={removeTags(post?.excerpt)} />

<article>
	<h1>{post?.title}</h1>
	<pre>{post?.slug}</pre>
	
	{@html post?.content}
</article>

