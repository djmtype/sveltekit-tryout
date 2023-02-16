<script lang="ts">
	export let title: any | string = 'Spinline';
	export let description: any | string = 'Default description';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>
