<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
</script>

<main class="bg-slate-200 text-indigo-900 dark:bg-indigo-900 dark:text-slate-200">
	<Header />
	<div class="px-16 py-4">
		<slot />
	</div>
</main>
