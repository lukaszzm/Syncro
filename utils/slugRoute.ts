function isSlugProvided(url: string, slug: string) {
  return url.includes(`[:${slug}]`);
}

export function slugRoute(url: string, args: Record<string, string>) {
  for (const [key, value] of Object.entries(args)) {
    if (!isSlugProvided(url, key)) {
      throw new Error("Could not find correct slug to replace");
    }

    url = url.replace(`[:${key}]`, value);
  }

  return url;
}
