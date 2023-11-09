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

const graduatesCollection = defineCollection({
  schema: z.object({
    template: z.boolean(),
    name: z.string(),
    email: z.string(),
    image: z.string(),
    jobHunting: z.boolean(),
    technicalBackground: z.boolean(),
    techStacks: z.array(z.string()),
    hardSkills: z.array(z.string()),
    softSkills: z.array(z.string()),
    locationPreference: z.array(z.string()),
    yearsOfExperience: z.number(),
    yourCoreStrength: z.string(),
    otherStrengths: z.string(),
    cohort: z.number(),
    hobbies: z.array(z.string()).optional(),
    website: z.string().optional(),
    github: z.string().optional(),
    blog: z.string().optional(),
    twitter: z.string().optional(),
    youtube: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  faqs: faqsCollection,
  curriculum: curriculumCollection,
  graduates: graduatesCollection,
};
