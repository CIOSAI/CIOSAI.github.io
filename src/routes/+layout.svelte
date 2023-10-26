<script lang="ts">
	import '../global.css';
	import '../app.css';
	import Header from '$lib/Header.svelte';
</script>

<main class="bg-slate-200 dark:bg-indigo-900">
	<Header />
	<div class="px-16 py-4">
		<slot />
	</div>
</main>
