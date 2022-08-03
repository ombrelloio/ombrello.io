import { fixSlug } from "@app/helpers/utils.helpers";
import { Link, RichText } from "@atoms";
import { Container, Section } from "@layout";
import { BannerProps } from "@types";

const Banner = ({ title, text, pageLink }: BannerProps) => {
  return (
    <Section rendering="Banner">
      <Container>
        <div className="bg-white p-8 md:py-32 md:px-16 rounded-lg text-center text-black">
          {title && <h2 className="text-h2 mb-sm">{title}</h2>}
          {text && text.html && (
            <RichText text={text.html} className="max-w-lg m-auto" />
          )}
          {pageLink && pageLink.slug && (
            <p className="mt-8">
              <Link href={fixSlug(pageLink.slug)}>
                {pageLink.navigationLabel}
              </Link>
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
};
export { Banner };
