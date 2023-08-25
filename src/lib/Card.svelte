<script lang="ts">
	let imgSrc = '';
	let caption = '';
	let href = './';
	let className = '';
	export { imgSrc, caption, href, className as class };
</script>

<div class={className + ' overflow-clip relative'}>
	<a {href} target="_blank" rel="noopener noreferrer">
		<img
			src={imgSrc}
			alt={caption}
			class="absolute w-full h-full object-cover transition-transform ease-out duration-500 hover:scale-110"
		/>
	</a>

	<div
		class="pointer-events-none p-4 h-full relative border-8 bg-gradient-to-b from-transparent to-slate-200 dark:to-indigo-900 border-indigo-900 dark:border-slate-200"
	>
		<p class="text-base absolute bottom-8">{caption}</p>
	</div>
</div>
