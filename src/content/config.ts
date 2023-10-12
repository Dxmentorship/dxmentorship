import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

const faqsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    weight: z.number(),
  }),
});

const curriculumCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    weight: z.number(),
  }),
});

export const collections = {
  posts: postsCollection,
  faqs: faqsCollection,
  curriculum: curriculumCollection,
};
