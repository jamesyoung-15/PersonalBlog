import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
    type: 'content',
    schema: ({ image }) =>
      z.object({
        title: z.string().max(70),
        description: z.string(),
        publishDate: z.string(),
        updatedDate: z
          .string()
          .optional(),
        image: z
            .object({
                src: z.union([image(), z.string()]),
                alt: z.string().optional()
            })
            .optional(),
        tags: z.array(z.string()).default(["others"]),
        draft: z.boolean().default(false),
      })
});

const projects = defineCollection({
    type: 'content',
    schema: ({ image }) =>
      z.object({
        title: z.string().max(70),
        description: z.string(),
        publishDate: z.string(),
        updatedDate: z
          .string()
          .optional(),
        ogImage: z
            .object({
                src: z.union([image(), z.string()]),
                alt: z.string().optional()
            })
            .optional(),
        draft: z.boolean().default(false),
        tags: z.array(z.string()).default(["others"]),
        github: z.string().optional(),
        demo: z.string().optional(),
      })
});
  
export const collections = { 
    posts,
    projects
}