<script>
	import { page } from '$app/stores';

const nav = [
	{ path: '/', title: 'Home' },
	{ path: '/shop', title: 'Shop' },
	{ path: '/blog', title: 'Blog' },
	{ path: '/posts', title: 'Posts' },
	{ path: '/uses', title: 'Uses' },

];
</script>

<nav id="nav">
<ul>
	{#each nav as navItem}
		{@const active = true ? navItem.path == $page.url.pathname : false}
		<li>
			<a href={navItem.path} class:active aria-current={active ? 'page' : null}
				>{navItem.title}</a
			>
		</li>
	{/each}
</ul>
</nav>

<style>
nav ul {
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
}

nav li {
	margin: 0;
	padding: 0;
}

nav ul a {
	padding: 0.5rem;
}

nav a[aria-current='page'] {
	font-weight: bold;
}
</style>