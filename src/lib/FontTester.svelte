<script lang="ts">
	let name = '';
	let fontSource = '';
	let href = '';
	export { name, fontSource, href };
</script>

<div class={`font-[${fontSource}]`}>
	<h1 class="text-lg">{name}</h1>
	<p>a slider for fontsize</p>
	<p>The quick brown fox jumps over a lazy dog.</p>
	<a class="hover:italic" {href} target="_blank" rel="noopener noreferrer">Download from here</a>
</div>
