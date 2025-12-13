<script lang="ts">
	import { page } from "$app/state";
	import { locales, localizeHref } from "$lib/paraglide/runtime";
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import { m } from "$lib/paraglide/messages.js";
	import { theme } from "$lib/stores/theme";
	let { children } = $props();
	const TITLE = m.app_title();
	const DESCRIPTION = m.app_description();
	$effect(() => {
		$theme;
	});
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={DESCRIPTION} />
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>
