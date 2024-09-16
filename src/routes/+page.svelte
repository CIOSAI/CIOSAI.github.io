<script lang="ts">
	import Card from '$lib/Card.svelte';
	import { base } from '$app/paths';
	
  const highlights = [
    {
			url: 'https://scontent-atl3-2.cdninstagram.com/v/t39.30808-6/459614784_18455193004011434_999280582958207228_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDcyMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=102&_nc_ohc=9ZsdCocrux0Q7kNvgH4hULa&_nc_gid=0f10df2c87854428b06bc6d4890cc869&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQ1NjI3NjM4MzM1MjU1MzUwMA==.3-ccb7-5&oh=00_AYAItUFnAjNf5VFTExXCPYpkXwBTOo66agwlfedIXj-Zng&oe=66EE0951&_nc_sid=10d13b',
			href: 'https://www.instagram.com/p/C_3KRDWTt3N/?img_index=11',
			caption: 'Featured (top left) at Typefest 2024 (Institut Seni Indonesia Surakarta)'
		},
		{
			url: 'https://play-lh.googleusercontent.com/d3gJSs8fMA6GE07clXW8aA5a7M_J5vAoPyqp-mCyW-oB2dd9tFpIecCAMlLGHOPZPg=w5120-h2880',
			href: 'https://play.google.com/store/apps/details?id=org.godotengine.theinktrepid',
			caption: 'Action platformer on Google Play'
		},
		{
			url: 'https://img.itch.zone/aW1hZ2UvMTgzODc4MS8xMDc5Mzk3My5wbmc=/original/ZEdykf.png',
			href: 'https://ciosai.itch.io/scrimblo-mode',
			caption: 'Scrimblo Mode : An arcade platformer with just 2 buttons'
		},
		{
			url: 'https://img.itch.zone/aW1nLzEwNTMzNzk1LnBuZw==/original/lTUl9p.png',
			href: 'https://ciosai.itch.io/caivunfont',
			caption: 'Caivun : A retro display font'
		},
		{
			url: `${base}/img/thumbnails/sss.jpg`,
			href: 'https://github.com/CIOSAI/SequentialSetInstruction',
			caption: 'SSS : Set-based esoteric language'
		},
		{
			url: `${base}/img/thumbnails/walkintherain.jpg`,
			href: 'https://imgur.com/ZDmkLT6',
			caption: 'Procedural animation made with OPENRNDR'
		},
		{
			url: `${base}/img/thumbnails/Sokkasuann.jpg`,
			href: 'https://github.com/CIOSAI/SokkasuannSkeumorphicUI',
			caption: 'Sokkasuann : Experimenting with neumorphic UI'
		},
		{
			url: 'https://user-images.githubusercontent.com/89374056/199880784-d0cd764a-ca37-47c1-af6d-5b1b7b5c4a89.png',
			href: 'https://indeciso-font.vercel.app/',
			caption: 'Indeciso : A monospaced font'
		},
		{
			url: 'https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail1075194@2x.jpg?hash=20210125134041',
			href: 'https://openprocessing.org/sketch/1075194',
			caption: 'Projects on Openprocessing with p5js'
		},
		{
			url: `${base}/img/thumbnails/metaball.png`,
			href: 'https://www.shadertoy.com/view/7dd3Rj',
			caption: 'Projects on Shadertoy'
		}
	];
</script>

<h1 class="text-indigo-950 dark:text-slate-200 text-lg mx-8 italic">Hewwo!</h1>
<p class="text-indigo-950 dark:text-slate-200 text-base">
	This is JY from Taiwan :33 I make videogames, music, conlangs, fonts, and illustrations ^w^
</p>
<p class="text-indigo-950 dark:text-slate-200 text-base">
	My favorite animal is the shoebill, they look scary and dumb -u-
</p>

<div class="h-16" />

<h4 class="text-indigo-950 dark:text-slate-200 text-base">I can speak:</h4>
<p class="text-indigo-950 dark:text-slate-200 text-base mx-8">
	Mandarin and Taigi(Taiwanese Hokkien) natively, English and German fluently, plus Indonesian and
	Spanish
</p>

<h4 class="text-indigo-950 dark:text-slate-200 text-base">I've coded in:</h4>
<p class="text-indigo-950 dark:text-slate-200 text-base mx-8">
	Javascript/Typescript, SQL, Rust, Kotlin, Nim, GLSL, Elixir, Java, C#, Python
</p>

<div class="h-16" />

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
