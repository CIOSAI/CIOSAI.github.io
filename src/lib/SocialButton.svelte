<script lang="ts">
	let href = './';
	let className = '';
	export { href, className as class };
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class={className + ' text-indigo-900 dark:text-slate-200 w-8 aspect-square'}
>
	<slot />
</a>
