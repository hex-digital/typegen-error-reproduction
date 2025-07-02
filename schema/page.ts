import { defineType, defineField } from 'sanity';

export const page = defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'content',
            title: 'Text',
            type: 'text'
        }),
    ],
});