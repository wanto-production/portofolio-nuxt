import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      type: 'page',
      source: 'blogs/**/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string().or(z.date()),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        thumbnail: z.string().optional(),
        lang: z.enum(['en', 'id'])
      }),
    }),
  },
})
