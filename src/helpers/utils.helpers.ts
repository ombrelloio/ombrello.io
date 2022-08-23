import { MultiLinkType } from "@types";
import { UrlObject } from "url";

export const isURL = (url: string | unknown | undefined) => {
  if (!url) return false;
  if (typeof url === "string") return /http|www|\./.test(url);
  return url;
};

export const fixSlug = (slug: string | UrlObject) => {
  const strSlug = slug as string;
  return strSlug.startsWith("/") || isURL(slug) ? slug : `/${slug}`;
};

/**
 * @isMultiLinkValid
 * checks for these props:
 * emailLink, externalUrl, anchorLink, pageLink.slug
 */
export const isMultiLinkValid = (link: MultiLinkType | undefined) => {
  const { emailLink, externalUrl, anchorLink, pageLink } = link || {};
  return (
    !!emailLink ||
    !!externalUrl ||
    !!anchorLink ||
    (!!pageLink && !!pageLink.slug)
  );
};
