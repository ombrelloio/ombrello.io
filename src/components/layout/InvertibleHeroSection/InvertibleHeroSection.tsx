import cx from "classnames";
import { BaseFCType } from "@types";
import { forwardRef } from "react";

interface InvertibleHeroSectionProps extends BaseFCType {
  inverted?: boolean;
}
const InvertibleHeroSection = forwardRef<
  HTMLElement,
  InvertibleHeroSectionProps
  // eslint-disable-next-line react/prop-types
>(({ className, children, rendering, inverted }, ref) => {
  return (
    <section
      className={cx(
        "pt-xxl md:pt-xxxl xl:pt-[208px] pb-xl md:pb-xxxl",
        className
      )}
      data-rendering={rendering}
      data-component-theme={inverted ? "inverted" : null}
      ref={ref}
    >
      {children}
    </section>
  );
});
export { InvertibleHeroSection };
