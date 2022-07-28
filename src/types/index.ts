import { url } from "inspector";

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
  renderings: any;
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
  title: string;
  text?: string;
}

export interface BannerProps {
  title: string;
  text?: string;
  pageLink?: PageProps;
}

export interface HeadlineAndTextAndLinkProps {
  headline: string;
  text?: string;
  pageLink?: PageProps;
}

export interface MediaProps {
  image: {
    url: string;
  };
}

export interface CardListProps {
  list?: {
    title?: string;
    text?: string;
  }[];
}

export interface CaseListProps {
  cases?: {
    title: string;
    text?: string;
    tags?: string;
    externalLinkLabel?: string;
    externalLink?: string;
    images?: {
      url?: string;
    }[];
  }[];
}

export interface ImageCardProps {
  id: string;
  title?: string;
  text?: string;
  image?: {
    url?: string;
  };
}
export interface ImageCardListProps {
  images?: ImageCardProps[];
}

export interface JobDescriptionProps {
  id: string;
  hours?: string;
  jobHeader?: string;
  jobDescription?: { html: string };
}

export interface OpenPositionsProps {
  title?: string;
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
  title: string;
  text?: string;
}

export interface TwoColumnListProps {
  imageCards?: ImageCardProps[];
}
