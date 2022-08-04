import { UrlObject } from "url";

export const isURL = (url: string | unknown | undefined) => {
  if (!url) return false;
  if (typeof url === "string") return /http|www|\./.test(url);
  return url;
};

export const fixSlug = (slug: string | UrlObject) => {
  const strSlug = slug as string;
  return strSlug.startsWith("/") ? slug : `/${slug}`;
};
