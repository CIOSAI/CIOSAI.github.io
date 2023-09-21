<script lang="ts">
	let imgSrc = '';
	let caption = '';
	let className = '';
	export { imgSrc, caption, className as class };
</script>

<div class={className + ' '}>
	<img
		data-src={imgSrc}
		alt={caption}
		class="lozad object-contain border-8 border-indigo-900 dark:border-slate-200"
	/>
	<p class="text-sm md:text-base">{caption}</p>
</div>
