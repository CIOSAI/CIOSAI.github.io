<script lang="ts">
	import Card from '$lib/Card.svelte';
	import { base } from '$app/paths';

  const highlights = [
   	{
			url: 'https://play-lh.googleusercontent.com/d3gJSs8fMA6GE07clXW8aA5a7M_J5vAoPyqp-mCyW-oB2dd9tFpIecCAMlLGHOPZPg=w5120-h2880',
			href: 'https://ciosaitw.substack.com/p/the-inktrepid-post-mortem',
			caption: 'Action platformer on Google Play'
		},
        {
			url: `${base}/img/thumbnails/TypefestSurakarta2024.jpg`,
			href: 'https://www.instagram.com/p/C_3KRDWTt3N/?img_index=11',
			caption: 'Featured (top left) at Typefest 2024 (Institut Seni Indonesia Surakarta)'
		},
		// {
		// 	url: 'https://img.itch.zone/aW1hZ2UvMTgzODc4MS8xMDc5Mzk3My5wbmc=/original/ZEdykf.png',
		// 	href: 'https://ciosai.itch.io/scrimblo-mode',
		// 	caption: 'Scrimblo Mode : An arcade platformer with just 2 buttons'
		// },
		{
		    url: `${base}/img/thumbnails/opdigifest.png`,
			href: 'https://ciosai.github.io/operator-digitalfest/en/',
			caption: 'Shorthair community and Operator Digitalfest'
		},
		{
		    url: `${base}/img/thumbnails/youtube.jpg`,
			href: 'https://www.youtube.com/watch?v=VS4FzPN5rwg',
			caption: 'Godot tutorials on Youtube'
		},
		{
			url: `${base}/img/thumbnails/sss.jpg`,
			href: 'https://github.com/CIOSAI/SequentialSetInstruction',
			caption: 'SSS : Set-based esoteric language'
		},
		{
			url: 'https://img.itch.zone/aW1nLzEwNTMzNzk1LnBuZw==/original/lTUl9p.png',
			href: 'https://ciosai.itch.io/caivunfont',
			caption: 'Caivun : A retro display font'
		},
		{
			url: `${base}/img/thumbnails/metaball.png`,
			href: 'https://www.shadertoy.com/view/7dd3Rj',
			caption: 'Projects on Shadertoy'
		},
		// {
		// 	url: `${base}/img/thumbnails/walkintherain.jpg`,
		// 	href: 'https://imgur.com/ZDmkLT6',
		// 	caption: 'Procedural animation made with OPENRNDR'
		// },
		{
			url: `${base}/img/thumbnails/Sokkasuann.jpg`,
			href: 'https://github.com/CIOSAI/SokkasuannSkeumorphicUI',
			caption: 'Sokkasuann : Experimenting with neumorphic UI'
		},
		// {
		// 	url: 'https://user-images.githubusercontent.com/89374056/199880784-d0cd764a-ca37-47c1-af6d-5b1b7b5c4a89.png',
		// 	href: 'https://indeciso-font.vercel.app/',
		// 	caption: 'Indeciso : A monospaced font'
		// },
		{
			url: 'https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail1075194@2x.jpg?hash=20210125134041',
			href: 'https://openprocessing.org/sketch/1075194',
			caption: 'Projects on Openprocessing with p5js'
		},
	];
</script>

<h1 class="text-indigo-950 dark:text-slate-200 text-lg mx-8 italic">Hewwo!</h1>
<p class="text-indigo-950 dark:text-slate-200 text-base">
	This is JY or CIOSAI(石獅) :33 I'm a programmer from Taiwan, I also make videogames, music, conlangs, fonts, and illustrations ^w^
</p>
<p class="text-indigo-950 dark:text-slate-200 text-base">
	My favorite animal is the shoebill, they look scary and dumb -u-
</p>

<div class="h-8" />

<div id="stargaze-webring"> </div>

<h4 class="text-indigo-950 dark:text-slate-200 text-base">I can speak:</h4>
<p class="text-indigo-950 dark:text-slate-200 text-base mx-8">
	Mandarin and Taigi(Taiwanese Hokkien) natively, English and German fluently, plus Indonesian and
	Spanish
</p>
<a title="do you not trust me? 🥺" class="hover:italic text-pink-700 dark:text-orange-400 text-sm" href="https://github.com/CIOSAI/CIOSAI.github.io/releases/tag/documents" target="_blank">See my language certification documents here</a>

<h4 class="text-indigo-950 dark:text-slate-200 text-base">I've coded in:</h4>
<p class="text-indigo-950 dark:text-slate-200 text-base mx-8">
	Javascript/Typescript, Java, Rust, GLSL, C++, SQL, Kotlin, Nim, Elixir, C#, Python
</p>

<h4 class="text-indigo-950 dark:text-slate-200 text-base">I've worked at: (overlapping)</h4>
<p class="text-indigo-950 dark:text-slate-200 text-base mx-8">
    <a class="hover:italic text-pink-700 dark:text-orange-400" href="https://www.ragic.com" target="_blank">Ragic</a> as a Software Engineer, I maintained BBCode and the text editor<br>
    <a class="hover:italic text-pink-700 dark:text-orange-400" href="https://ciosai.github.io/operator-digitalfest/en/" target="_blank">Operator Digitalfest(Shorthair)</a> as the leader, to foster a demoscene community in Taiwan<br>
    <a class="hover:italic text-pink-700 dark:text-orange-400" href="https://ocf.tw/" target="_blank">OCF</a>'s booth as a volunteer, I introduced people in the music industry to Creative Commons and OCF<br>
</p>

<div class="h-8" />

<h4 class="text-indigo-950 dark:text-slate-200 text-base sm:text-lg">Highlights:</h4>
<h2
	class="text-indigo-950 dark:text-slate-200 text-lg mx-4 lg:mx-16 my-8 overflow-x-scroll snap-x flex items-center flex-col md:flex-row gap-4 flex-nowrap"
>
	{#each highlights as card}
		<Card
			imgSrc={card.url}
			caption={card.caption}
			href={card.href}
			class="snap-center w-48 h-36 sm:w-96 sm:h-64 flex-none"
		/>
	{/each}
</h2>

<div class="h-16" />

<h4 class="text-indigo-950 dark:text-slate-200 text-base">
	This page is made with Svelte + Tailwind
</h4>
