<script lang="ts">
    import { theme } from "$lib/stores/theme";
    import { SunIcon, MoonIcon } from "lucide-svelte";
    const toggle = () => ($theme = $theme === "dark" ? "light" : "dark");
</script>

<button type="button" on:click={toggle} aria-label="Toggle theme">
    <svelte:component
        this={$theme === "dark" ? SunIcon : MoonIcon}
        class="h-5 w-5"
    />
</button>
