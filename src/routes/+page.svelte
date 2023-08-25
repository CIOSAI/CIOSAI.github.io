<script lang="ts">
	import Card from '$lib/Card.svelte';

	const highlights = [
		{ url: 'http://placekitten.com/1200/1200', caption: 'Bruh Lmao' },
		{ url: 'http://placekitten.com/400/800', caption: 'Tall' },
		{ url: 'http://placekitten.com/300/200', caption: 'Meow :3' },
		{ url: 'http://placekitten.com/600/400', caption: 'Me when I the uhh when the amongus' },
		{ url: 'http://placekitten.com/600/400', caption: 'Me when I the uhh when the amongus' },
		{ url: 'http://placekitten.com/600/400', caption: 'Me when I the uhh when the amongus' },
		{ url: 'http://placekitten.com/600/400', caption: 'Me when I the uhh when the amongus' },
		{ url: 'http://placekitten.com/600/400', caption: 'Me when I the uhh when the amongus' },
		{ url: 'http://placekitten.com/600/400', caption: 'Me when I the uhh when the amongus' },
		{ url: 'http://placekitten.com/600/400', caption: 'Me when I the uhh when the amongus' }
	];
</script>

<h1 class="text-indigo-950 dark:text-slate-200 text-lg mx-8 italic">Hewwo!</h1>
<p class="text-indigo-950 dark:text-slate-200 text-base">
	This is JY from Taiwan :33 I make videogames, music, fonts, and illustrations ^w^
</p>
<p class="text-indigo-950 dark:text-slate-200 text-base">
	My favorite animal is the shoebill, they look scary and dumb
</p>

<div class="h-16" />

<h4 class="text-indigo-950 dark:text-slate-200 text-base">I can speak:</h4>
<p class="text-indigo-950 dark:text-slate-200 text-base mx-8">
	Mandarin and Taigi(Taiwanese Hokkien) natively, English fluently, plus Spanish, Indonesian and
	German
</p>

<h4 class="text-indigo-950 dark:text-slate-200 text-base">I've coded in:</h4>
<p class="text-indigo-950 dark:text-slate-200 text-base mx-8">
	Javascript/Typescript, Rust, Nim, GLSL, Java, Python
</p>

<div class="h-16" />

<h4 class="text-indigo-950 dark:text-slate-200 text-lg">Highlights:</h4>
<h2
	class="text-indigo-950 dark:text-slate-200 text-lg mx-16 my-8 overflow-x-scroll snap-x flex flex-row gap-4 flex-nowrap"
>
	{#each highlights as card}
		<Card imgSrc={card.url} caption={card.caption} class="snap-center w-96 h-64 flex-none" />
	{/each}
</h2>

<div class="h-16" />

<h4 class="text-indigo-950 dark:text-slate-200 text-base">
	This page is made with Svelte + Tailwind
</h4>
