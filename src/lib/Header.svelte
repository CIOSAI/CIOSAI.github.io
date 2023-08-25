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
</script>

<div class="sticky top-0 p-4 w-full flex">
	<a class="w-24 aspect-square rounded-full border-slate-200 border-2" href="/">
		<img src="/logo.png" alt="CIOSAI logo" />
	</a>
	<div class="w-4" />
	<div class="flex items-center gap-2 dark:bg-indigo-900 bg-slate-200 p-2">
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
	<div class="w-full" />
	<Theme class="w-8 h-8" />
</div>
