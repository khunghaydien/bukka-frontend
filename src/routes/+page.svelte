<script lang="ts">
    import { m } from "$lib/paraglide/messages.js";
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
    import Button from "$lib/components/Button.svelte";
</script>

<main class="min-h-screen bg-background text-foreground p-8">
    <section class="max-w-2xl mx-auto">
        <div class="flex justify-between items-center mb-8">
            <h1 class="text-4xl font-bold">{m.app_title()}</h1>
            <ThemeToggle />
        </div>
        <p class="text-muted-foreground mb-6">{m.app_description()}</p>
        <div class="flex gap-4">
            <Button variant="default">Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
        </div>
        <div class="mt-8 p-4 bg-card border border-border rounded-md">
            <p class="text-sm text-muted-foreground">
                Thử chuyển đổi theme bằng nút ở góc trên bên phải! Bạn có thể
                dùng class <code class="bg-muted px-1 rounded">dark:</code> trong
                Tailwind để style cho dark mode.
            </p>
        </div>
    </section>
</main>
