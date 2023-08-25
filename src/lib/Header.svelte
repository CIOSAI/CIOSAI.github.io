<script lang="ts">
	import Theme from '$lib/Theme.svelte';
	import SocialButton from './SocialButton.svelte';
	import Youtube from './icons/youtube.svelte';
	import Github from './icons/github.svelte';
	import Email from './icons/email.svelte';
	import Twitter from './icons/twitter.svelte';
	import Tumblr from './icons/tumblr.svelte';
	import Discord from './icons/discord.svelte';
	import Instagram from './icons/instagram.svelte';
	import Tiktok from './icons/tiktok.svelte';
	import { base } from '$app/paths';
	let test = `${base}/logo.png`;
</script>

<div class="z-10 sticky top-0 p-4 w-full grid grid-cols-3 gap-4">
	<a class="w-24 aspect-square rounded-full border-slate-200 border-2" href="{base}/">
		<img src={test} alt="CIOSAI logo" />
	</a>
	<div
		class="flex flex-wrap justify-between items-center gap-1 dark:bg-indigo-900 bg-slate-200 p-2"
	>
		<SocialButton href="https://youtube.com/@ciosai_tw?si=fzOsuP8yGvObEPPl"
			><Youtube /></SocialButton
		>
		<SocialButton href="https://github.com/CIOSAI"><Github /></SocialButton>
		<SocialButton href="mailto:jyinteractive.tw@gmail.com"><Email /></SocialButton>
		<SocialButton href="https://twitter.com/CIOSAI_tw"><Twitter /></SocialButton>
		<SocialButton href="https://www.tumblr.com/ciosai-tw"><Tumblr /></SocialButton>
		<SocialButton href="https://discord.gg/ctADDDX4zt"><Discord /></SocialButton>
		<SocialButton href="https://www.instagram.com/ciosai/"><Instagram /></SocialButton>
		<SocialButton href="https://www.tiktok.com/@ciosai_tw?is_from_webapp=1&sender_device=pc"
			><Tiktok /></SocialButton
		>
	</div>
	<Theme class="justify-self-end w-12 h-12" />
</div>
