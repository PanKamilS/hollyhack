import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      lang: z.enum(["en", "pl"]).default("en"),
      // Same key on the PL and EN file links the two translations.
      translationKey: z.string().optional(),
      category: z.enum(["writeups", "notes", "news"]).default("notes"),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      showInDev: z.boolean().default(false),
      heroImage: image().optional(),

      // Write-up "machine card"
      platform: z.string().optional(),
      machine: z.string().optional(),
      os: z.string().optional(),
      difficulty: z.string().optional(),
    }),
});

export const collections = { blog };
