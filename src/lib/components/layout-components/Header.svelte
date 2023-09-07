<script lang="ts">
	import { onDestroy, onMount } from "svelte";

    let bannerVis = true;

	const routes = [
		{
			name: 'About',
			page: '/#about'
		},
		{
			name: 'Projects',
			page: '/#projects'
		},
		{
			name: 'Experience',
			page: '/#experience'
		},
		{
			name: 'Skills',
			page: '/#skills'
		},
		{
			name: 'Contact',
			page: '/#contact'
		}
	];

    let typingSimulation = true;
    let cursorVisible = true;
    let interval: ReturnType<typeof setInterval>;
    
    function toggleVisibility() {
        cursorVisible = !cursorVisible;
    }
    onMount(() => {
        simulateTyping();

        interval = setInterval(toggleVisibility, 500); // 500ms interval
        return () => clearInterval(interval);
    });
    
    onDestroy(() => clearInterval(interval));

let logoName = "rburns.net";
$: typedName = '';

async function simulateTyping() {
    const delayMultiplier = 175; // pause between characters

    for (const char of logoName) {
        await new Promise(resolve => setTimeout(resolve, Math.random() * delayMultiplier + 50));
        typedName += char;
    }

    typingSimulation = false;
}
</script>

<!-- sticky top-0 -->
<div data-theme="dark" class="sticky top-0 navbar shadow-sm shadow-slate-700 z-20 bg-slate-900 bg-opacity-95 backdrop-invert backdrop-blur-sm w-full">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class=" lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
				</svg>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-md rounded-box w-40">
				{#each routes as route}
					<li><a class="uppercase" href={route.page}>{route.name}</a></li>
				{/each}
			</ul>
		</div>
		<a href="/" class="inline-flex items-center pl-4">
			<!-- <svg style="min-height: 28px; min-width: 28px;" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-aperture mr-0 md:mr-2 text-accent"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg> -->
            <span class="bg-slate-300 opacity-80 px-1 rounded-md">
                <!-- <svg class="w-10 text-orange-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg> -->
                <!-- <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg> -->
                <svg class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
            </span>
			<span class="xl:w-fit pl-4 text-2xl font-bold normal-case text-accent font-mono">
                {typedName}
            </span>
            <span class={`cursor-text w-1 h-5 bg-gray-400 ${cursorVisible || typingSimulation ? "block" : "hidden"}`}/>
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0 rounded-md">
			{#each routes as route}
				<li><a class="uppercase" href={route.page}>{route.name}</a></li>
			{/each}
		</ul>
	</div>

	<div class="navbar-end">
		<label class="swap swap-rotate mr-4">
            <input type="checkbox"/>
            <svg data-key="premium-user-theme" data-set-theme="dark" class="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
            <svg data-key="premium-user-theme" data-set-theme="emerald" class="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        </label>
	</div>
</div>

<!-- <div class={`relative w-full bg-warning text-warning-content text-center py-2 px-4 ${bannerVis ? "" : "hidden"}`}>
    <span class="text-md font-semibold font-mono">
        This is my new Portfolio Webite and it is under development! <br /> If you'd like to view my original porfolio (slightly outdated), please go to
		<a class="font-bold underline after:content-['↗']" href="https://original.rburns.net/" target="_blank">original.rburns.net</a>
    </span>
    <span on:click={() => bannerVis = !bannerVis} class="absolute font-sans right-0 top-1/2 -translate-y-1/2 text-2xl font-semibold text-red-500 cursor-pointer m-1 border-2 border-red-500 rounded-full">
        <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10.657 12.071L5 6.414L6.414 5l5.657 5.657L17.728 5l1.414 1.414l-5.657 5.657l5.657 5.657l-1.414 1.414l-5.657-5.657l-5.657 5.657L5 17.728z"/></svg>
    </span>
</div> -->

<style>
    .cursor-text {
        width: 2px; 
        margin-left: 2px;
    }
</style>