import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    slug: z.string(),
    excerpt: z.string(),
    thumbnail: z.string(),
    category: z.string(),
  })
});

export const collections = {
  blog: blogCollection,
};
