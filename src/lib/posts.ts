import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "../i18n/ui";

export type Post = CollectionEntry<"blog">;
export type Category = Post["data"]["category"];

export const CATEGORIES: Category[] = ["writeups", "notes", "news"];

// Drafts never build; `showInDev` drafts are visible on the local dev server only.
const visible = (p: Post) => !p.data.draft || (import.meta.env.DEV && p.data.showInDev);

export async function getPosts(lang: Lang, category?: Category) {
  return (await getCollection("blog"))
    .filter(visible)
    .filter((p) => p.data.lang === lang)
    .filter((p) => !category || p.data.category === category)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function postUrl(p: Post) {
  return p.data.lang === "pl" ? `/pl/blog/${p.id}` : `/blog/${p.id}`;
}

export async function getTranslation(p: Post) {
  if (!p.data.translationKey) return undefined;
  const other: Lang = p.data.lang === "pl" ? "en" : "pl";
  return (await getPosts(other)).find((o) => o.data.translationKey === p.data.translationKey);
}

export function readingMinutes(body: string) {
  const words = body.replace(/```[\s\S]*?```/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function tagSlug(tag: string) {
  return tag.toLowerCase().trim().replace(/\s+/g, "-");
}

// Frontmatter tags plus the machine card fields (platform, OS, difficulty), deduplicated by slug.
export function postTags(p: Post) {
  const { tags, platform, os, difficulty } = p.data;
  const seen = new Set<string>();
  return [platform, os, difficulty, ...tags].filter((tag): tag is string => {
    if (!tag) return false;
    const slug = tagSlug(tag);
    if (seen.has(slug)) return false;
    seen.add(slug);
    return true;
  });
}
