/* eslint-disable no-underscore-dangle */
import { OpenPositionsProps } from "@types";

const OpenPositions = ({
  title,
  text,
  contactEmail,
  contactPageLink,
  jobPages,
}: OpenPositionsProps) => {
  return (
    <section
      className="w-full p-16 pt-20 border-b-[1px]"
      data-rendering="OpenPositions"
    >
      <p className="font-bold mb-10">OpenPositions</p>
      <p>{title}</p>
      <p>{text}</p>
      <p>contactEmail: {contactEmail}</p>
      <p>contactPage slug: {contactPageLink?.slug}</p>
      <br />
      {jobPages &&
        jobPages.length &&
        jobPages.map(({ slug, renderings }, index) => {
          if (!renderings) return null;
          // return first instance of a JobDescription components data on on the page
          const position = renderings?.filter(
            (component) => component.__typename === "JobDescription"
          )[0];
          return (
            !!position &&
            slug && (
              <a href={`/${slug}`} key={index} className="mb-10 block">
                <p className="font-bold">{position.jobHeader}</p>
                <p>{position.hours}</p>
              </a>
            )
          );
        })}
    </section>
  );
};

export { OpenPositions };
