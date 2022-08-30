import cx from "classnames";
import { BaseFCType } from "@types";
import { useEffect } from "react";

interface InvertibleHeroSectionProps extends BaseFCType {
  inverted?: boolean;
}
const InvertibleHeroSection = ({
  className,
  children,
  rendering,
  inverted,
}: InvertibleHeroSectionProps) => {
  useEffect(() => {
    if (inverted) document.body.classList.add("inverted");
    else document.body.classList.remove("inverted");
  });
  return (
    <section
      className={cx(
        "pt-xxl md:pt-xxxl xl:pt-[208px] pb-xl md:pb-xxxl",
        className
      )}
      data-rendering={rendering}
    >
      {children}
    </section>
  );
};
export { InvertibleHeroSection };
