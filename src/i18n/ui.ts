export type Lang = "en" | "pl";

export const languages: Record<Lang, string> = {
  en: "English",
  pl: "Polski",
};

export const ui = {
  en: {
    "site.description": "Write-ups of retired HTB, TryHackMe and other machines, study notes and cyber news.",
    "nav.blog": "Blog",
    "nav.writeups": "Write-ups",
    "nav.notes": "Notes",
    "nav.news": "News",
    "nav.tags": "Tags",
    "nav.about": "About",
    "theme.toggle": "Toggle theme",
    "lang.switch": "Polski",
    "home.topics": "# offensive labs · write-ups · windows & linux · notes & news",
    "home.lead": "Hands-on walkthroughs of retired HTB, TryHackMe and other machines, and what I learn along the way. Sometimes cyber news and notes.",
    "home.latest": "Latest posts",
    "home.viewAll": "All posts",
    "list.all": "All",
    "list.empty": "Nothing here yet — first posts are on the way.",
    "list.count": "posts",
    "cat.writeups": "Write-ups",
    "cat.notes": "Notes",
    "cat.news": "News",
    "cat.writeups.lead": "Walkthroughs of retired machines from legal training platforms.",
    "cat.notes.lead": "What I learn along the way: tools, concepts, cheat sheets.",
    "cat.news.lead": "Short takes on what is happening in the industry.",
    "tags.title": "Tags",
    "post.minRead": "min read",
    "post.toc": "On this page",
    "post.readIn": "Czytaj po polsku",
    "post.noTranslation": "This post is available in Polish only.",
    "post.back": "Back to blog",
    "post.prev": "Older",
    "post.next": "Newer",
    "post.updated": "Updated",
    "post.draft": "Draft — visible only in local preview",
    "card.platform": "Platform",
    "card.machine": "Machine",
    "card.os": "OS",
    "card.difficulty": "Difficulty",
    "code.copy": "Copy",
    "code.copied": "Copied",
    "footer.tagline": "Educational write-ups of retired machines from legal training platforms.",
    "footer.privacy": "Privacy",
    "footer.cookies": "Cookies",
  },
  pl: {
    "site.description": "Rozwiązania wycofanych maszyn z HTB, TryHackMe i innych platform, notatki z nauki i nowinki z cyber.",
    "nav.blog": "Blog",
    "nav.writeups": "Writeupy",
    "nav.notes": "Notatki",
    "nav.news": "Nowinki",
    "nav.tags": "Tagi",
    "nav.about": "O mnie",
    "theme.toggle": "Zmień motyw",
    "lang.switch": "English",
    "home.topics": "# laby ofensywne · writeupy · windows & linux · notatki i nowinki",
    "home.lead": "Praktyczne rozwiązania wycofanych maszyn z HTB, TryHackMe i innych platform oraz to, czego uczę się po drodze. Czasem nowinki z cyber i notatki.",
    "home.latest": "Najnowsze wpisy",
    "home.viewAll": "Wszystkie wpisy",
    "list.all": "Wszystko",
    "list.empty": "Jeszcze nic tu nie ma — pierwsze wpisy w drodze.",
    "list.count": "wpisów",
    "cat.writeups": "Writeupy",
    "cat.notes": "Notatki",
    "cat.news": "Nowinki",
    "cat.writeups.lead": "Rozwiązania wycofanych maszyn z legalnych platform szkoleniowych.",
    "cat.notes.lead": "To, czego uczę się po drodze: narzędzia, pojęcia, ściągi.",
    "cat.news.lead": "Krótko o tym, co dzieje się w branży.",
    "tags.title": "Tagi",
    "post.minRead": "min czytania",
    "post.toc": "W tym wpisie",
    "post.readIn": "Read in English",
    "post.noTranslation": "Ten wpis jest dostępny tylko po angielsku.",
    "post.back": "Wróć do bloga",
    "post.prev": "Starszy",
    "post.next": "Nowszy",
    "post.updated": "Aktualizacja",
    "post.draft": "Szkic — widoczny tylko w lokalnym podglądzie",
    "card.platform": "Platforma",
    "card.machine": "Maszyna",
    "card.os": "System",
    "card.difficulty": "Poziom",
    "code.copy": "Kopiuj",
    "code.copied": "Skopiowano",
    "footer.tagline": "Edukacyjne opisy wycofanych maszyn z legalnych platform szkoleniowych.",
    "footer.privacy": "Prywatność",
    "footer.cookies": "Cookies",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];

export function t(lang: Lang, key: UIKey) {
  return ui[lang][key];
}

export function langFromPath(pathname: string): Lang {
  return pathname === "/pl" || pathname.startsWith("/pl/") ? "pl" : "en";
}

export function localePath(lang: Lang, path: string) {
  const clean = path === "/" ? "" : path;
  return lang === "pl" ? `/pl${clean}` || "/pl" : clean || "/";
}

export function formatDate(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang === "pl" ? "pl-PL" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
