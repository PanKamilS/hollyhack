import rss from "@astrojs/rss";
import { t } from "../../i18n/ui";
import { getPosts, postUrl } from "../../lib/posts";

export async function GET(context) {
  const posts = await getPosts("pl");
  return rss({
    title: "HollyHack",
    description: t("pl", "site.description"),
    site: context.site,
    customData: "<language>pl</language>",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: [post.data.category, ...post.data.tags],
      link: postUrl(post),
    })),
  });
}
