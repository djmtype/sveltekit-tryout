<script type="ts">
	import Meta from '$lib/components/Meta.svelte';
	import { page } from '$app/stores';
	export let data;

	const { products } = data;

	// const { products, users } = data;
	// const products = data.products

	let title = 'Shop';
	let description = 'Shop page';
</script>

<Meta {title} {description} />

<h1>{title}</h1>
<section>
	<h2>Products</h2>
	<ul>
		{#each products as product}
			<li>
				<h3>{product?.title}</h3>
				<p>{product?.description}</p>
			</li>
		{/each}
	</ul>
</section>

<!-- <section>
    <h2>Users</h2>
    <ul>
        {#each users as user}
        <li>
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.email}</p>
        </li>
    
        {/each}
       </ul>
</section> -->
