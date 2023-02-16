<script lang="ts">

	import '$lib/styles/global.css';

	import PageTransition from '$lib/components/Transition.svelte';

	 import type { PageData } from './$types'

	import Logo from '$lib/components/Logo.svelte';
	import Nav from '$lib/components/Nav.svelte';

	// import type { LayoutData } from './$types';
	import { page } from '$app/stores';

	// export let data: LayoutData;

	export let data: PageData
</script>

<div class="layout">
	<Logo className="brand" width="924" height="301" />

	<Nav />

<!-- <PageTransition pathname={data.pathname}> -->
	<PageTransition key={data.url} duration={400} inX={-10} outX={10}>
<slot />

<pre>
	{JSON.stringify($page, null, 2)}
</pre>

</PageTransition>


</div>

<style global>
	body {
		min-height: 100vh;
	}
	.brand {
		max-width: 300px;
		height: auto;
	}
</style>
