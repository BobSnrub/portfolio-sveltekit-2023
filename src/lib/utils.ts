import { marked } from "marked";

export function parseMarkdown(markdown: string) {
    return marked.parse(markdown);
}