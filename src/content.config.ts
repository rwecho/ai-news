import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './content/news' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    status: z.string().optional(),
    author: z.string().default('百法难治'),
    platforms: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    cover: z.string().url().optional(),
    coverDriveId: z.string().optional(),
    coverType: z.enum(['image', 'video']).default('image'),
    coverAlt: z.string().optional(),
    evidence: z.object({
      primary_source: z.string().optional(),
      confidence: z.string().optional(),
      note: z.string().optional()
    }).optional()
  })
});

export const collections = { news };
