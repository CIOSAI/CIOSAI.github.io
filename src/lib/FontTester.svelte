<script lang="ts">
	let name = '';
	let href = '';

	let fontSize = 48;

	export { name, href };
</script>

<div class="p-4 border-2 border-indigo-900 dark:border-slate-200">
	<h1 class="text-[6rem]">{name}</h1>

	<div class="py-4 flex items-center gap-2">
		<input
			class="transparent h-[4px] w-1/3 cursor-pointer appearance-none border-transparent bg-indigo-200 dark:bg-slate-500 accent-indigo-900 dark:accent-slate-200"
			type="range"
			min="12"
			max="72"
			bind:value={fontSize}
		/>
		<p style={`font-size: ${fontSize}px;`}>{fontSize} px</p>
	</div>

	<p contenteditable="true" spellcheck="false" style={`font-size: ${fontSize}px;`}>
		THE QUICK BROWN FOX JUMPS OVER A LAZY DOG <br /> the quick brown fox jumps over a lazy dog
		<br /> 0123456789 <br />
		?!,."':;@#$%& <br />
		`~^*_-+=\|/&lt;([&#123;
	</p>
	<br />
	<a
		style={`font-size: ${fontSize}px;`}
		class="hover:italic"
		{href}
		target="_blank"
		rel="noopener noreferrer">Download from here</a
	>
</div>
