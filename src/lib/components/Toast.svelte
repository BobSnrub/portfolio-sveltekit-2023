<script lang="ts">
	import { fade, fly } from "svelte/transition";

	// import { fly, fade } from "svelte/transition";
    export let color: string; //alert-success, alert-error, etc...
    export let statusIcon: string;
    export let message: string;
    export let showToast: boolean;
</script>

{#if showToast}
    <div in:fly={{ y: 100, duration: 1500}} out:fade={{delay: 3000, duration: 500}} on:introend={() => showToast = false} class="toast toast-top toast-center mt-24 w-full md:w-1/2">
        <div class={`alert ${color}`}>
            <div>
                {#if statusIcon === 'success'}
                    <!-- success icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {:else if statusIcon === 'error'}
                    <!-- error icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {:else}
                    <!-- info icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {/if}
                <span>{message}</span>
            </div>
        </div>
    </div>
{/if}
