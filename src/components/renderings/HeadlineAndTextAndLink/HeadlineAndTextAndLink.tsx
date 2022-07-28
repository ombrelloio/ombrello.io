import { HeadlineAndTextAndLinkProps } from "@types";

const HeadlineAndTextAndLink = ({
  headline,
  text,
  pageLink,
}: HeadlineAndTextAndLinkProps) => {
  return (
    <section className="w-full p-16 pt-20 border-b-[1px]">
      <strong>HeadlineAndTextAndLink</strong>
      <p>{headline}</p>
      <p>{text}</p>
      <p>link: {pageLink?.slug}</p>
    </section>
  );
};

export { HeadlineAndTextAndLink };
