<script lang="ts">
	import '../app.css';
	import Theme from '$lib/Theme.svelte';
</script>

<main class="bg-slate-200 dark:bg-slate-800">
	<Theme />
	<slot />
</main>
