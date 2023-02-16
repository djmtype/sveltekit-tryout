<script lang="ts">
	import type { PageData } from './$types';

	import Meta from '$lib/components/Meta.svelte';
	 import { page } from '$app/stores';
	import { PUBLIC_TEST } from '$env/static/public';

	let envVar = import.meta.env.VITE_TEST_VAR;

	export let data: PageData;

	let title = 'Home'
	let description = 'Home page'
</script>


<Meta title={title} description={description} />


<h1>{title}</h1>

<h2>Hello {data?.name}</h2>
<div class="foo">My foo</div>
<p>{envVar}</p>
<p>{PUBLIC_TEST}</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


