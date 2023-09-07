<script lang="ts">
    export let sectionTitle: undefined | string = undefined;
    export let anchorName: undefined | string = undefined;
    export let topDivider: boolean = true;
</script>

<section id={anchorName} class="w-full max-w-full">
    <!-- top section divider -->
    {#if topDivider}
        <div class="divider py-6" />
    {/if}

    <!-- section title -->
    {#if sectionTitle !== undefined && anchorName === undefined}
        <h2 class="text-3xl font-semibold mb-4">{sectionTitle}</h2>
    {:else if sectionTitle !== undefined && anchorName !== undefined}
        <h2 class="text-3xl font-semibold mb-4 flex items-center gap-2">
            <a href={`/#${anchorName}`} class="text-slate-500 hover:text-base-content hover:link">
                <span class="font-mono text-2xl font-normal">#</span>
            </a>
            {sectionTitle}
        </h2>
    {/if}
    
    <slot />
</section>