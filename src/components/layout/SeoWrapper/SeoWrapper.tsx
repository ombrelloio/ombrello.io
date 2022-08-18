import { SeoProps } from "@types";
import { NextSeo } from "next-seo";

interface SeoWrapperProps {
  data: SeoProps;
}

const SeoWrapper = ({ data: seo }: SeoWrapperProps) => {
  return (
    <NextSeo
      title={seo.title}
      description={seo.description}
      openGraph={{
        title: seo.title,
        description: seo.description,
        images: [
          {
            url: seo.image?.url || "",
            width: seo.image?.width,
            height: seo.image?.height,
            alt: seo.image?.caption,
          },
        ],
      }}
      noindex={seo.noIndex}
    />
  );
};

export { SeoWrapper };
