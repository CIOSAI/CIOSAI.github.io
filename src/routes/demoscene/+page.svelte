<script lang="ts">
	import Card from '$lib/Card.svelte';
	import { base } from '$app/paths';

	const prods = [
		{
			url: 'https://content.pouet.net/files/screenshots/00097/00097338.png',
			href: 'https://www.pouet.net/prod.php?which=97338',
			caption: 'Demo: 來 → 去'
		},
		{
			url: 'https://content.pouet.net/files/screenshots/00097/00097093.png',
			href: 'https://www.pouet.net/prod.php?which=97093',
			caption: 'Demo: EasingExpoOut'
		},
		
	];

  const livecodes = [
		{
			url: 'https://livecode.demozoo.org/media/2024_07_22_shader_byte_jam_monday_night_bytes/grabber_fieldfx_Ciosai.jpg',
			href: 'https://livecode.demozoo.org/performer/ciosai_tw.html#mc',
			caption: 'Monday Night Bytes 22.07'
		},
		{
			url: 'https://livecode.demozoo.org/media/2024_07_19_shader_jam_bornhack/CIOSAI_tw.jpg',
			href: 'https://livecode.demozoo.org/performer/ciosai_tw.html#mc',
			caption: 'Bornhack 2024'
		},
		{
			url: 'https://livecode.demozoo.org/media/2024_04_22_shader_jam_monday_night_bytes/grabber_fieldfx_ciosai_tw.jpg',
			href: 'https://livecode.demozoo.org/performer/ciosai_tw.html#mc',
			caption: 'Monday Night Bytes 22.04'
		},
		{
			url: 'https://livecode.demozoo.org/media/2024_03_30_shader_jam_revision_2024/grabber_rdpjam2024_ciosai_tw.jpg',
			href: 'https://livecode.demozoo.org/performer/ciosai_tw.html#mc',
			caption: 'Revision 2024'
		},
  ]
</script>

<h4 class="text-indigo-950 dark:text-slate-200 text-base">
  Demoscene is a computer subculture originated in the Nordics in the 80's. 
  You can visit 
  <a class="hover:italic" href="https://github.com/psenough/teach_yourself_demoscene_in_14_days">here</a> 
  to learn more about it.
  <br>
  Modern demoscene is often about sizecoding, livecoding, track music, computer graphics and much more.
  <br>
  Also check out <a class="hover:italic" href="https://demozoo.org/sceners/142051/">my entry on Demozoo</a>.
</h4>

<h4 class="text-indigo-950 dark:text-slate-200 text-base sm:text-lg">Prods:</h4>
<h2
	class="text-indigo-950 dark:text-slate-200 text-lg mx-4 lg:mx-16 my-8 overflow-x-scroll snap-x flex items-center flex-col md:flex-row gap-4 flex-nowrap"
>
	{#each prods as card}
		<Card
			imgSrc={card.url}
			caption={card.caption}
			href={card.href}
			class="snap-center w-48 h-36 sm:w-96 sm:h-64 flex-none"
		/>
	{/each}
</h2>

<h4 class="text-indigo-950 dark:text-slate-200 text-base sm:text-lg">Livecoding:</h4>
<h2
	class="text-indigo-950 dark:text-slate-200 text-lg mx-4 lg:mx-16 my-8 overflow-x-scroll snap-x flex items-center flex-col md:flex-row gap-4 flex-nowrap"
>
	{#each livecodes as card}
		<Card
			imgSrc={card.url}
			caption={card.caption}
			href={card.href}
			class="snap-center w-48 h-36 sm:w-96 sm:h-64 flex-none"
		/>
	{/each}
</h2>

<h4 class="text-indigo-950 dark:text-slate-200 text-base">
  Me and my friends at Revision.
</h4>
<div class="w-full grid">
  <img class="justify-self-center w-1/2" src={`${base}/img/photos/revision_2024.jpg`} alt="CIOSAI_tw(me), Wrighter, mocoo and LJ chatting at Revision Demoparty 2024, surrounded by computers">
</div>

<h4 class="text-indigo-950 dark:text-slate-200 text-small">
  
  Taken by <a class="hover:italic" href="https://demozoo.org/sceners/79080/">Slerpy</a>
</h4>