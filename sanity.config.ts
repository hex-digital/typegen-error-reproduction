import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { page } from "./schema/page";

export default defineConfig({
    name: 'default',
    title: 'Typegen Test',

    projectId: 'la03atnp',
    dataset: 'development',

    plugins: [
        structureTool({
            name: 'content',
            title: 'Content',
        }),
    ],

    schema: {
        types: [page],
    },
});
