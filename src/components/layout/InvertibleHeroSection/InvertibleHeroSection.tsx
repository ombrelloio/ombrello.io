import cx from "classnames";
import { BaseFCType } from "@types";

const InvertibleHeroSection = ({
  className,
  children,
  rendering,
}: BaseFCType) => {
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
