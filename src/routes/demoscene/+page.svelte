<script lang="ts">
	import Card from '$lib/Card.svelte';
	import { base } from '$app/paths';

	const prods = [
		{
			url: 'https://content.pouet.net/files/screenshots/00105/00105423.png',
			href: 'https://www.pouet.net/prod.php?which=105423',
			caption: 'Demo: 到遐著知到矣'
		},
		{
			url: 'https://content.pouet.net/files/screenshots/00104/00104006.png',
			href: 'https://www.pouet.net/prod.php?which=104006',
			caption: 'Demo: chuliau(資料)'
		},
		{
			url: 'https://content.pouet.net/files/screenshots/00104/00104016.png',
			href: 'https://www.pouet.net/prod.php?which=104016',
			caption: 'Exegfx: grimothea planipes /with Wrighter'
		},
		{
			url: 'https://content.pouet.net/files/screenshots/00101/00101968.jpg',
			href: 'https://www.pouet.net/prod.php?which=101968',
			caption: 'Demo: it\'s magnetic !'
		},
		{
			url: 'https://content.pouet.net/files/screenshots/00101/00101164.png',
			href: 'https://www.pouet.net/prod.php?which=101164',
			caption: 'Demo: bruh i ain\'t naming things /with Wrighter | Meteoriks 2024 Winner!'
		},
		{
			url: 'https://content.pouet.net/files/screenshots/00102/00102194.png',
			href: 'https://www.pouet.net/prod.php?which=102194',
			caption: 'Demo: 座標轉移'
		},
		{
			url: 'https://content.pouet.net/files/screenshots/00098/00098278.png',
			href: 'https://www.pouet.net/prod.php?which=98278',
			caption: 'Demo: el papel y el autor'
		},
		{
			url: 'https://content.pouet.net/files/screenshots/00097/00097513.png',
			href: 'https://www.pouet.net/prod.php?which=97513',
			caption: 'Exegfx: summon_cat.glsl /with Wrighter'
		},
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
			url: 'https://livecode.demozoo.org/media/2025_12_13_shader_jam_sessions/grabber_sessions_CIOSAI_tw.jpg',
			href: 'https://livecode.demozoo.org/performer/ciosai_tw.html#mc',
			caption: 'Sessions 2025'
		},
		{
			url: 'https://livecode.demozoo.org/media/2025_12_06_shader_jam_inercia/grabber_inercia2025_CIOSAI_tw.jpg',
			href: 'https://livecode.demozoo.org/performer/ciosai_tw.html#mc',
			caption: 'Inercia 2025'
		},
		{
			url: 'https://livecode.demozoo.org/media/2025_04_20_shader_jam_revision_2025/grabber_revision_2025_shaderjam_ciosai_tw.jpg',
			href: 'https://livecode.demozoo.org/performer/ciosai_tw.html#mc',
			caption: 'Revision 2025'
		},
		{
			url: 'https://livecode.demozoo.org/media/2024_12_06_shader_jam_inercia/grabber_inerciajam2024_ciosai_tw.jpg',
			href: 'https://livecode.demozoo.org/performer/ciosai_tw.html#mc',
			caption: 'Inercia 2024'
		},
		{
			url: 'https://livecode.demozoo.org/media/2024_11_16_shader_jam_sessions/grabber_sessions_ciosai_tw.jpg',
			href: 'https://livecode.demozoo.org/performer/ciosai_tw.html#mc',
			caption: 'Sessions 2024'
		},
		{
			url: 'https://livecode.demozoo.org/media/2024_09_02_shader_jam_monday_night_bytes/grabber_mondaynightbytes_CIOSAI_tw.jpg',
			href: 'https://livecode.demozoo.org/performer/ciosai_tw.html#mc',
			caption: 'Monday Night Bytes 02.09'
		},
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
  You can 
  <a class="hover:italic text-pink-700 dark:text-orange-400" href="https://github.com/psenough/teach_yourself_demoscene_in_14_days">visit here to learn more</a> 
  about it.
  <br>
  Modern demoscene is often about sizecoding, livecoding, track music, computer graphics and much more.
  <br>
  Also <a class="hover:italic text-pink-700 dark:text-orange-400" href="https://demozoo.org/sceners/142051/">check out my entry on Demozoo</a>.
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
  
  Taken by <a class="hover:italic text-pink-700 dark:text-orange-400" href="https://slerpy.xyz">Slerpy</a>
</h4>
