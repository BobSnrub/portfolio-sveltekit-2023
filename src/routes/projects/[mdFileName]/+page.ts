import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { parseMarkdown } from '$lib/utils';

export const load = ( async ({ fetch, params }) => {
    const slugFileName = params.mdFileName;
    const mdUrl = `/markdown/${slugFileName}`;

    const res = await fetch(mdUrl);

    if (res.status == 200) {
        const markdownContent = await res.text();
        const parsedMarkdown = parseMarkdown(markdownContent);

        return {
            mdContent: parsedMarkdown
        };
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;