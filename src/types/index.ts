import { ReactNode } from "react";
import { UrlObject } from "url";

export type LinkTargetType = "_blank" | "_self" | "_parent" | "_top";

export interface BaseFCType {
  children: ReactNode;
  className?: string;
  rendering?: string;
}

/** BEGIN HYGRAPH TYPES  */
type SlugUrlObject = string | UrlObject;

export type MenuPageItem = {
  slug: SlugUrlObject;
  navigationLabel: string;
};

export type MultiLinkType = {
  label?: string;
  emailLink?: string;
  externalUrl?: string;
  pageLink?: MenuPageItem;
  anchorLink?: string;
  className?: string;
};

export type TextCollectionType = {
  title?: string;
  text?: {
    html: string;
  };
  multiLink?: MultiLinkType;
};

export type MenuSoMe = {
  url: string;
  title: string;
};

export type PageProps = {
  slug: SlugUrlObject;
  navigationLabel: string;
  // highlightColor: {
  //   hex: string | undefined;
  // };
  seo: {
    noIndex: boolean;
    keywords: Array<string>;
    title: string;
    updatedAt: string;
    description: string;
    image: {
      url?: string;
      width?: number;
      caption?: string;
      height?: number;
    };
  };
  renderings: unknown[];
  pageColors?: {
    bodyBackground?: {
      hex: string | undefined;
    };
    bodyTextColor?: {
      hex: string | undefined;
    };
    headerBackground?: {
      hex: string | undefined;
    };
    headerTextColor?: {
      hex: string | undefined;
    };
  };
};

// RENDERINGS FROM HYGRAPH:

export interface HeroProps {
  id: string;
  title: string;
  text?: string;
}

export interface BannerProps {
  id: string;
  title: string;
  text?: {
    html: string;
  };
  pageLink?: PageProps;
}

export type InternalLinkType = {
  slug: SlugUrlObject;
  navigationLabel?: string;
};
export interface HeadlineAndTextAndLinkProps {
  id: string;
  headline: string;
  text?: { html: string };
  link?: {
    label: string;
    internalLink?: InternalLinkType;
  };
}

export interface MediaProps {
  id: string;
  image: {
    url: string;
    fileName: string;
    smallUrl: string;
  };
}

export interface CardListProps {
  id: string;
  heading?: string;
  list?: {
    title?: string;
    text?: string;
  }[];
}

export interface CaseProps {
  id?: string;
  title: string;
  text?: string;
  tags?: string;
  externalLinkLabel?: string;
  externalLink?: string;
  images?: {
    id: string;
    url?: string;
    smallUrl?: string;
    fileName: string;
  }[];
}

export interface CaseListProps {
  id: string;
  cases?: CaseProps[];
}

export interface ImageCardProps {
  id: string;
  imageCardTitle?: string;
  text?: string;
  image?: {
    url?: string;
    fileName: string;
  };
  internalLink?: {
    page: InternalLinkType;
  };
  internalLinkLabel?: string;
}
export interface ImageCardListProps {
  id: string;
  heading?: string;
  images?: ImageCardProps[];
}

export interface JobDescriptionProps {
  id: string;
  hours?: string;
  jobHeader?: string;
  jobDescription?: { html: string };
}

export interface OpenPositionsProps {
  id: string;
  heading?: string;
  text?: string;
  contactEmail?: string;
  contactPageLink?: { slug: SlugUrlObject; navigationLabel?: string };
  jobPages?: {
    slug: SlugUrlObject;
    navigationLabel?: string;
    renderings?: {
      id: string;
      hours?: string;
      jobHeader?: string;
      __typename?: string; // is this a union "JobDescription" ???
    }[];
  }[];
}

export interface PageTitleProps {
  id: string;
  title: string;
  text?: string;
}

export interface TwoColumnListProps {
  id: string;
  heading?: string;
  imageCards?: ImageCardProps[];
}

/**
 * ----------------
 * END HYGRAP TYPES
 */

export type PageHeaderProps = {
  pages: MenuPageItem[];
};

export interface PageFooterProps {
  mainContent: TextCollectionType;
  leftColumn: TextCollectionType;
  centerColumn: TextCollectionType;
  rightColumn: TextCollectionType;
}

export interface HGPageProps {
  page: PageProps;
  siteMenu: PageHeaderProps;
  siteFooter: PageFooterProps;
}
