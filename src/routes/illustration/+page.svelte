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
			url: `${base}/img/illustrations/choa7.png`,
			caption:
				'蛇, or "chôa" in Taigi. I wrote "côa" here instead because I, at the time, thought "ch" and "chh" both existing but not "c" itself makes the second h redundant. I still think it\'s redudant but I\'ve learn to enjoy the conventions',
			width: 300,
			height: 300
		},
		{
			url: `${base}/img/illustrations/liong2.png`,
			caption: '龍, or "liông" in Taigi. "Chinese dragon"',
			width: 400,
			height: 400
		},
		{
			url: `${base}/img/illustrations/tamsui2.png`,
			caption: '淡水 Tamsui my beloved hometown',
			width: 400,
			height: 400
		},
		{
			url: `${base}/img/illustrations/censimun h8.png`,
			caption: '"天地玄黃，宇宙洪荒", the line of 千字文, in a geometric style',
			width: 400,
			height: 400
		},
		{
			url: `${base}/img/illustrations/font idea cjk huadanxiaren 2.png`,
			caption: '滑蛋蝦仁 "prawn with silky egg", some Chinese typography presented tastefully',
			width: 600,
			height: 600
		},
		{
			url: `${base}/img/illustrations/forgive it all.png`,
			caption: 'Some sort of... ? dashboard?? diagram?? aesthetics?',
			width: 400,
			height: 400
		},
		{
			url: `${base}/img/illustrations/gc ampersand.png`,
			caption: 'Ampersand',
			width: 300,
			height: 300
		},
		{
			url: `${base}/img/illustrations/gc freedom.png`,
			caption: 'الحرية "freedom" in Arabic. I think. I don\'t speak Arabic',
			width: 400,
			height: 400
		},
		{
			url: `${base}/img/illustrations/gc pen.png`,
			caption: '筆 "pen, quill, brush"',
			width: 400,
			height: 400
		},
		{
			url: `${base}/img/illustrations/gca liquid.png`,
			caption:
				'Ambigram of "liquid". Notice how it reads the same rotated? That\'t called "ambigram"',
			width: 500,
			height: 400
		},
		{
			url: `${base}/img/illustrations/huabisanjia.png`,
			caption: '貨比三家 "weigh your options before you spend"',
			width: 540,
			height: 420
		},
		{
			url: `${base}/img/illustrations/imaginery letter thingy ver1.png`,
			caption: 'An album cover in a fictional writing',
			width: 600,
			height: 600
		},
		{
			url: `${base}/img/illustrations/jelectro1 thumbnail 1.png`,
			caption:
				'Cover of a song called Hyper Confusion, you can listen to it here: www.youtube.com/watch?v=BPKGZQkuVgs',
			width: 640,
			height: 360
		},
		{
			url: `${base}/img/illustrations/supernova.png`,
			caption: "I don't know what this aesthetic is called tbh",
			width: 600,
			height: 600
		},
		{
			url: `${base}/img/illustrations/truth machiene.png`,
			caption:
				"I should catch up with graphics design words... I also don't know the name of this aesthetic",
			width: 600,
			height: 600
		},
		{
			url: `${base}/img/illustrations/trying out some fonts.png`,
			caption:
				'This is just to try out some fonts I downloaded back then: Atkinson Hyperlegible, Iosevka, OCR-A',
			width: 600,
			height: 600
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
