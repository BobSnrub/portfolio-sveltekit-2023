<script lang="ts">
    import "../app.css";
	import { Footer, Header } from "../lib/components";
    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'

    onMount(() => {
        themeChange(false)
        // 👆 false parameter is required for svelte
    })
</script>

<div class="bg-base-200 w-full">
    <a class="z-50 fixed btn btn-ghost border-2 border-base-content bottom-8 right-8 p-0 m-0 w-12 h-12" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
    </a>

    <Header />

    <slot />
    <!-- <div class="container max-w-5xl min-h-screen mx-auto bg-base-100 shadow-md p-4">
    </div> -->

    <Footer />
</div>