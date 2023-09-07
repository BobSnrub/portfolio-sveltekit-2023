<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

    export let data: PageData;
  
    let markdownContent = data.mdContent;
</script>


{#if markdownContent}
<div class="max-w-5xl mx-auto min-h-screen py-16">
        <!-- <div class="grid grid-cols-2">
            <img class="max-w-sm" src="http://localhost:5173/images/Robert_Burns_Headshot-1.jpg"/>
            <img class="max-w-sm" src="http://localhost:5173/images/Robert_Burns_Headshot-1.jpg"/>
        </div> -->
        <div class="prose max-w-4xl mx-auto" on:click|preventDefault>
            {@html markdownContent}
        </div>
    </div>
{:else}
    <div class="flex justify-center items-center min-h-screen">
        <h1 class="text-2xl text-center">Loading...</h1>
    </div>
{/if}
  