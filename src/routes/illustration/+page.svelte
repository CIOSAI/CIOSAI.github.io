<script lang="ts">
	import { onMount } from 'svelte';
	import lozad from 'lozad';
	import FramedImage from '$lib/FramedImage.svelte';
	import { base } from '$app/paths';

	onMount(() => {
		const observer = lozad();
		observer.observe();
	});

	const images = [
		{
			url: `${base}/img/illustrations/acid pcwk 3 cyan.png`,
			caption: 'Acid T-shirt design 敗者爲寇 "He who lost will be remembered as the villain."',
			width: 600,
			height: 800
		},
		{
			url: `${base}/img/illustrations/acid pcwk 3 pink.png`,
			caption: 'Pink version of the other one',
			width: 600,
			height: 800
		},
		{
			url: `${base}/img/illustrations/anti microtransaction unjanked.png`,
			caption: 'A badge for members of the hypothetic crew',
			width: 500,
			height: 500
		},
		{
			url: `${base}/img/illustrations/birdy 1.png`,
			caption:
				"鳥語花香 is an idiom describing the lovely spring time. There's a variation -花香鳥語- of the same meaning, so I made all 4 offsets and put them together",
			width: 400,
			height: 400
		},
		{
			url: `${base}/img/illustrations/censimun h8.png`,
			caption: '"天地玄黃，宇宙洪荒", the line of 千字文, in a geometric style',
			width: 300,
			height: 300
		},
		{
			url: `${base}/img/illustrations/choa7.png`,
			caption:
				'蛇, or "chôa" in Taigi. I wrote "côa" here instead because I, at the time, thought "ch" and "chh" both existing but not "c" itself makes the second h redundant. I still think it\'s redudant but I\'ve learn to enjoy the conventions',
			width: 300,
			height: 300
		}
	];
</script>

<div class="flex flex-wrap justify-center gap-4">
	{#each images as image}
		<FramedImage
			imgSrc={image.url}
			caption={image.caption}
			width={image.width}
			height={image.height}
		/>
	{/each}
</div>
