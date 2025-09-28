<script lang="ts">
	import DropDown from '$lib/DropDown.svelte';
	import Theme from '$lib/Theme.svelte';

	import SocialButton from './SocialButton.svelte';

	import Itch from './icons/itch.svelte';
	import Youtube from './icons/youtube.svelte';
	import Github from './icons/github.svelte';
	import Email from './icons/email.svelte';
	import Twitter from './icons/twitter.svelte';
	import Tumblr from './icons/tumblr.svelte';
	import Discord from './icons/discord.svelte';
	import Instagram from './icons/instagram.svelte';
	import Tiktok from './icons/tiktok.svelte';

	import { base } from '$app/paths';

	let dropDownRoutes = [
		{ text: 'Home', url: base ? base : '/' },
		{ text: 'Demoscene', url: `${base}/demoscene` },
		{ text: 'Shorthair', url: `${base}/shorthair` },
		{ text: 'Illustrations', url: `${base}/illustration` },
		{ text: 'FontsOnWiki', url: `https://CIOSAI.github.io/fonts-on-wiki` },
		{ text: 'Typography', url: `${base}/font` }
	];
</script>

<div class="z-10 sm:sticky top-0 p-4 w-full grid grid-cols-[1fr_1fr_1fr] gap-4">
	<DropDown class="justify-self-start w-12" routes={dropDownRoutes} />
	<div
		class="flex flex-wrap h-min justify-between items-center gap-1 dark:bg-indigo-900 bg-slate-200 p-2"
	>
		<SocialButton href="https://ciosai.itch.io/"><Itch /></SocialButton>
		<SocialButton href="https://youtube.com/@ciosai_tw?si=fzOsuP8yGvObEPPl"
			><Youtube /></SocialButton
		>
		<SocialButton href="https://github.com/CIOSAI"><Github /></SocialButton>
		<SocialButton href="mailto:jyinteractive.tw@gmail.com"><Email /></SocialButton>
		<!-- <SocialButton href="https://twitter.com/CIOSAI_tw"><Twitter /></SocialButton> -->
		<!-- <SocialButton href="https://www.tumblr.com/ciosai-tw"><Tumblr /></SocialButton> -->
		<SocialButton href="https://discord.gg/ctADDDX4zt"><Discord /></SocialButton>
		<SocialButton href="https://www.instagram.com/ciosai/"><Instagram /></SocialButton>
		<!-- <SocialButton href="https://www.tiktok.com/@ciosai_tw?is_from_webapp=1&sender_device=pc"
			><Tiktok /></SocialButton
		> -->
	</div>
	<Theme class="justify-self-end w-12 h-12" />
</div>
