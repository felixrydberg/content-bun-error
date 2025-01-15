import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const commonSchema = z.object({
  author: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()),
  section: z.string().optional(),
})

export default defineContentConfig({
  collections: {
    content_de: defineCollection({
      type: 'page',
      source: {
        include: 'de/**',
        prefix: '',
      },
      schema: commonSchema,
    }),
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
      },
      schema: commonSchema,
    }),
    content_es: defineCollection({
      type: 'page',
      source: {
        include: 'es/**',
        prefix: '',
      },
      schema: commonSchema,
    }),
    content_fr: defineCollection({
      type: 'page',
      source: {
        include: 'fr/**',
        prefix: '',
      },
      schema: commonSchema,
    }),
  },
});
