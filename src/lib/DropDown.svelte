<script lang="ts">
	import { slide } from 'svelte/transition';
	import ListIcon from './icons/listicon.svelte';
	import ExpandedIcon from './icons/expanded.svelte';
	import { base } from '$app/paths';
	let expanded = false;
	let className = '';
	let routes: { text: string; url: string }[] = [];
	export { className as class, routes };
</script>

<nav class={className + ' text-indigo-900 dark:text-slate-200'}>
	<button
		class="w-full active:text-slate-500 active:dark:text-slate-400 hover:scale-110 transition-transform ease-out duration-100"
		on:click={() => {
			expanded = !expanded;
		}}
	>
		{#if expanded}
			<ExpandedIcon />
		{:else}
			<ListIcon />
		{/if}
	</button>
	{#if expanded}
		<ol
			transition:slide
			class="w-min absolute px-1 py-2 dark:bg-indigo-900 bg-slate-200 border-2 border-t-0 border-slate-500 dark:border-slate-400"
			on:mouseleave={() => {
				expanded = false;
			}}
		>
			{#each routes as route}
				<li><a href={route.url} class="hover:italic">{route.text}</a></li>
			{/each}
		</ol>
	{/if}
	<noscript>
		<div
			transition:slide
			class="w-[80vw] px-1 py-2 dark:bg-indigo-900 bg-slate-200 flex flex-wrap gap-1"
		>
			{#each [
		{ text: 'Home', url: 'https://CIOSAI.github.io' },
		{ text: 'Demoscene', url: `/demoscene` },
		{ text: 'Shorthair', url: `/shorthair` },
		{ text: 'Illustrations', url: `/illustration` },
		{ text: 'FontsOnWiki', url: `https://CIOSAI.github.io/fonts-on-wiki` },
		{ text: 'Typography', url: `/font` }
	] as route}
				<a href={route.url} class="hover:italic w-max text-pink-700 dark:text-orange-400">./{route.text}</a>
			{/each}
		</div>
	</noscript>
</nav>
