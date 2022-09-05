import cx from "classnames";
import { BaseFCType } from "@types";

interface InvertibleHeroSectionProps extends BaseFCType {
  inverted?: boolean;
}
const InvertibleHeroSection = ({
  className,
  children,
  rendering,
  inverted,
}: InvertibleHeroSectionProps) => {
  return (
    <section
      className={cx(
        "pt-xxl md:pt-xxxl xl:pt-[208px] pb-xl md:pb-xxxl",
        className
      )}
      data-rendering={rendering}
      data-component-theme={inverted ? "inverted" : null}
    >
      {children}
    </section>
  );
};
export { InvertibleHeroSection };
