<script lang="ts">

    export let title: string;
    export let slugOrUrl: string;
    export let imgUrl: string;
    export let description: string;
    export let date: string;
    export let newProject: boolean;
    export let tags: string[];

    /*"title":"This is my first project card!",
    "description":"This is a description",
    "date":"July, 2023",
    "imgUrl":"string",
    "newProject": true,
    "tags": [
        "Tag1",
        "Tag2"
    ]*/
    
</script>

<div class="card w-full bg-base-200 shadow-md border border-base-300 rounded-md">
    <!-- <figure><img src={`src/lib/projects/images/${imgUrl}`} alt={title} /></figure> -->
    <figure><img src={`/productImages/${imgUrl}`} alt={title} /></figure>
    <div class="card-body p-4">
        <div class="card-actions justify-end border-b-2 border-base-300 pb-4">
            {#each tags as tag}
                <span class="badge border-base-content">{tag}</span>
            {/each}
        </div>

        <h2 class="text-lg font-bold capitalize">{title}</h2>
        <div>
            <p class="line-clamp-4 md:line-clamp-5">{description}</p>
        </div>
        <div class="flex row justify-between items-end h-full">
            <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <time class="text-sm">{date}</time>

                {#if newProject}
                    <div class="badge badge-secondary">NEW</div>
                {/if}
            </div>
            
            {#if slugOrUrl.substring(0, 4) == 'http'}
                <a href="{slugOrUrl}" target="_blank" class="btn btn-sm btn-primary">
                    Visit
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
            {:else}
                <a href="/projects/{slugOrUrl}" class="btn btn-sm btn-primary">View</a>
            {/if}
        </div>
    </div>
</div>
