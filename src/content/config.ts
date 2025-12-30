// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const archiveCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        order: z.number().default(0),
        // 나중에 특정 폴더에서만 쓸 필드는 .optional()로 추가하면 됩니다.
        image: z.string().optional(), 
    }),
});

export const collections = {
    'archive': archiveCollection,
};