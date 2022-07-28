import { BannerProps } from "@types";

const Banner = ({ title, text, pageLink }: BannerProps) => {
  return (
    <section className="w-full p-16 pt-20 border-b-[1px]">
      <strong>Banner</strong>
      <p>{title}</p>
      <p>{text}</p>
      {pageLink && (
        <p>
          <a className="italic" href={`/${pageLink.slug}`}>
            {pageLink.navigationLabel}
          </a>
        </p>
      )}
    </section>
  );
};

export { Banner };
