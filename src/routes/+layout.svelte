<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-[#262626] min-h-screen">
	{@render children()}
</div>