<script lang="ts">
	import Card from '$lib/Card.svelte';
	import { base } from '$app/paths';

  const highlights = [
		{
			url: 'https://play-lh.googleusercontent.com/d3gJSs8fMA6GE07clXW8aA5a7M_J5vAoPyqp-mCyW-oB2dd9tFpIecCAMlLGHOPZPg=w5120-h2880',
			href: 'https://ciosaitw.substack.com/p/the-inktrepid-post-mortem',
			caption: 'Mobile game (Google Play only)',
			tags: 'gamedev',
		},
		{
			url: `${base}/img/thumbnails/TypefestSurakarta2024.jpg`,
			href: 'https://www.instagram.com/p/C_3KRDWTt3N/?img_index=11',
			caption: 'Featured (top left) at Typefest 2024 (Institut Seni Indonesia Surakarta)',
			tags: 'typo,exhib',
		},
		{
		        url: `${base}/img/thumbnails/youtube.jpg`,
			href: 'https://www.youtube.com/watch?v=VS4FzPN5rwg',
			caption: 'Godot tutorials on Youtube',
			tags: 'gamedev,code',
		},
		{
			url: `${base}/img/thumbnails/sss.jpg`,
			href: 'https://github.com/CIOSAI/SequentialSetInstruction',
			caption: 'SSS : Set-based esoteric language',
			tags: 'code',
		},
		{
			url: 'https://img.itch.zone/aW1nLzEwNTMzNzk1LnBuZw==/original/lTUl9p.png',
			href: `${base}/font`,
			caption: 'Font design',
			tags: 'typo',
		},
		{
			url: `${base}/img/thumbnails/fontsonwiki.png`,
			href: "https://ciosai.github.io/fonts-on-wiki",
			caption: 'FontsOnWiki - Wikimedia query tool',
			tags: 'typo,code',
		},
		{
			url: `${base}/img/thumbnails/Sokkasuann.jpg`,
			href: 'http://sokkasuann-skeumorphic-ui.vercel.app/',
			caption: 'Sokkasuann : Experimenting with neumorphic UI',
			tags: 'graphics,code',
		},
		{
			url: 'https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail1075194@2x.jpg?hash=20210125134041',
			href: 'https://openprocessing.org/sketch/1075194',
			caption: 'Projects on Openprocessing',
			tags: 'techart',
		},
		{
			url: 'https://content.pouet.net/files/screenshots/00105/00105423.png',
			href: 'https://www.youtube.com/watch?v=NWRL7RxFCvM',
			caption: '到遐就知到矣 - operator digitalfest invitation demo',
			tags: 'techart,graphics,audio',
		},
		{
			url: 'https://content.pouet.net/files/screenshots/00104/00104006.png',
			href: 'https://www.youtube.com/watch?v=2aPDAQBrLUU',
			caption: 'Demo: chu liau',
			tags: 'techart,graphics,audio',
		},
		{
			url: 'https://content.pouet.net/files/screenshots/00102/00102194.png',
			href: 'https://www.youtube.com/watch?v=HTfGUZV_iOE',
			caption: 'Demo: 座標轉移',
			tags: 'techart,graphics,audio',
		},
		{
			url: 'https://content.pouet.net/files/screenshots/00097/00097093.png',
			href: 'https://www.youtube.com/watch?v=_7G3lQJLYVU',
			caption: 'Demo: EasingExpoOut',
			tags: 'techart,graphics,audio',
		},
		{
			url: `${base}/img/illustrations/jelectro1%20thumbnail%201.png`,
			href: 'https://www.youtube.com/watch?v=BPKGZQkuVgs',
			caption: 'Hyper.confusion();',
			tags: 'audio',
		},
		{
			url: `${base}/img/thumbnails/shaderfont2026.jpg`,
			href: 'https://www.shadertoy.com/view/sfBXWh',
			caption: 'Procedural font (2026)',
			tags: 'techart,typo',
		},
		{
			url: `${base}/img/thumbnails/shaderfont2024.jpg`,
			href: 'https://www.shadertoy.com/view/fc2XRz',
			caption: 'Procedural font (2024)',
			tags: 'techart,typo',
		},
		{
			url: `${base}/img/thumbnails/revis-26-perf.jpg`,
			href: 'https://youtu.be/383f8xnUHrw?t=17',
			caption: 'Performance at Revision algorave (2026)',
			tags: 'techart,audio,perf',
		},
		{
			url: `${base}/img/thumbnails/sofiaforms-26-perf.jpg`,
			href: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDkyODMzMzYxMjIxODE5?story_media_id=3901049291322201512_24079162777',
			caption: 'Performance at Sofia Forms (2026)',
			tags: 'techart,audio,perf',
		},
	];

  const tags = [
    {
      title: 'demoscene/tech art',
      id: 'techart',
    },
    {
      title: 'game dev',
      id: 'gamedev',
    },
    {
      title: 'typography',
      id: 'typo',
    },
    {
      title: 'exhibition',
      id: 'exhib',
    },
    {
      title: 'performance',
      id: 'perf',
    },
    {
      title: 'graphics design',
      id: 'graphics',
    },
    {
      title: 'music',
      id: 'audio',
    },
    {
      title: 'programming',
      id: 'code',
    },
  ];

  const refilter = (event) => {
    let highlightCards = document.getElementById("highlight-cards");
    let checkboxes = document.getElementsByClassName("tag");
    let checked = event.target.checked;
    let element = event.target.parentNode;

    if (checked) {
      element.classList.add("checked");
    }
    else {
      element.classList.remove("checked");
    }

    let cardMap = {};
    for (let i of highlightCards.children) {
      i.classList.add("hidden");

      for (let tag of i.dataset["tags"].split(",")) {
	if (Object.hasOwn(cardMap, tag)) { cardMap[tag].push(i); }
	else { cardMap[tag] = [i]; }
      }
    }
    for (let checkbox of checkboxes) {
      if (!checkbox.children[0].checked) continue;
      for (let card of cardMap[checkbox.dataset.tagname]) {
	card.classList.remove("hidden");
      }
    }
  };
</script>

<h1 class="text-lg mx-8 italic">Hewwo!</h1>
<p>
	This is JY or CIOSAI(石獅) :33 I'm a programmer from Taiwan, I also make videogames, music, conlangs, fonts, and illustrations ^w^
</p>
<p>
	Commissions welcome <a class="interactive" href="mailto:jyinteractive.tw@gmail.com">→email me←</a>
</p>
<a class="interactive" href="https://ciosaitw.substack.com/" target="_blank">my blog :p</a>

<div class="h-8" />

<div id="stargaze-webring"> </div>

<h4 class="text-base">I can speak:</h4>
<p class="mx-8">
	Mandarin and Taigi(Taiwanese Hokkien) natively, English and German fluently, plus Indonesian and
	Spanish
</p>
<a title="do you not trust me? 🥺" class="interactive text-sm" href="https://github.com/CIOSAI/CIOSAI.github.io/releases/tag/documents" target="_blank">See my language certification documents here</a>

<h4 class="text-base">Experience:</h4>
<p class="mx-8">
    <a class="interactive" href="https://www.ragic.com" target="_blank">Ragic</a> as a Software Engineer, I maintained BBCode and the text editor<br>
    <a class="interactive" href="https://ciosai.github.io/operator-digitalfest/en/" target="_blank">Operator Digitalfest(Shorthair)</a> as the leader, to foster a demoscene community in Taiwan<br>
</p>

<div class="h-8" />

<h4 class="text-base sm:text-lg">Works:</h4>

<div class="flex flex-wrap">
  <p>filter: </p>
  {#each tags as tag}
    <div class="tag" data-tagname={tag.id}>
      <input id="tag-{tag.id}" type="checkbox" checked on:change={refilter}>
      <label for="tag-{tag.id}">{tag.title}</label>
    </div>
  {/each}
</div>

<h2
        id="highlight-cards"
	class="text-lg w-full my-8 flex flex-wrap gap-8 justify-center"
>
	{#each highlights as card}
		<Card
			class="snap-center w-48 h-36 sm:w-96 sm:h-64 flex-none"
			imgSrc={card.url}
			caption={card.caption}
			href={card.href}
			tags={card.tags}
		/>
	{/each}
</h2>

<div class="h-16" />

<h4 class="text-base">
	Photo credits: typefest surakarta - DKVACT, revision algorave - Matthieu Totet, sofiaforms - Viktoria Nikolay
</h4>

<div class="h-16" />

<h4 class="text-base">
	This page is made with Svelte + Tailwind
</h4>
