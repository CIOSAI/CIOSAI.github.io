<script lang="ts">
	import FramedImage from '$lib/FramedImage.svelte';
	import { base } from '$app/paths';

	const images = [
		{
			url: `${base}/img/illustrations/birdy 1.png`,
			caption: 'Scrimblo Mode : An arcade platform with just 2 buttons'
		},
		{
			url: `${base}/img/illustrations/choa7.png`,
			caption: 'Caivun : A retro display font'
		},
		{
			url: `${base}/img/illustrations/jelectro1 thumbnail 1.png`,
			caption: 'Caivun : A retro display font'
		},
		{
			url: `${base}/img/illustrations/jelectro1 thumbnail 1.png`,
			caption: 'Caivun : A retro display font'
		},
		{
			url: `${base}/img/illustrations/jelectro1 thumbnail 1.png`,
			caption: 'Caivun : A retro display font'
		},
		{
			url: `${base}/img/illustrations/jelectro1 thumbnail 1.png`,
			caption: 'Caivun : A retro display font'
		},
		{
			url: `${base}/img/illustrations/jelectro1 thumbnail 1.png`,
			caption: 'Caivun : A retro display font'
		}
	];
</script>

<div class="flex flex-wrap justify-center gap-4">
	{#each images as image}
		<FramedImage imgSrc={image.url} caption={image.caption} class="w-96" />
	{/each}
</div>
