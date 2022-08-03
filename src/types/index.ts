import { ReactNode } from "react";

export type LinkTargetType = "_blank" | "_self" | "_parent" | "_top";

export interface BaseFCType {
  children: ReactNode;
  className?: string;
  rendering?: string;
}

export type MenuPageItem = {
  slug: string;
  navigationLabel: string;
};

export type MenuSoMe = {
  url: string;
  title: string;
};

export type menuProps = {
  siteMenu: {
    pages: MenuPageItem[];
  };
  soMes: MenuSoMe[];
  footer: {
    leftColumn: {
      html: string;
    };
    rightColumn: {
      html: string;
    };
  };
};

export type PageProps = {
  slug: string;
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
  slug: string;
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
  contactPageLink?: { slug: string };
  jobPages?: {
    slug: string;
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
