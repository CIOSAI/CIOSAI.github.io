<script lang="ts">
	let imgSrc = '';
	let width = 0;
	let height = 0;
	let caption = '';
	let className = '';
	export { imgSrc, width, height, caption, className as class };
</script>

<figure class={className + ' table h-min'}>
	<img
		data-src={imgSrc}
		alt={caption}
		{width}
		{height}
		class="lozad border-8 border-indigo-900 dark:border-slate-200"
	/>
	<figcaption
		class="table-caption caption-bottom text-indigo-950 dark:text-slate-200 text-sm md:text-base"
	>
		{caption}
	</figcaption>
</figure>
