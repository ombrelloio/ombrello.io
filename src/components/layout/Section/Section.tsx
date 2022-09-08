import cx from "classnames";
import { BaseFCType } from "@types";
import { forwardRef } from "react";

export interface SectionProps extends BaseFCType {
  flush?: boolean;
}
export const Section = forwardRef<HTMLElement, SectionProps>(
  // eslint-disable-next-line react/prop-types
  ({ className, children, rendering, flush }, ref) => (
    <section
      className={cx(
        {
          "section-gap-vertical": !flush,
        },
        className
      )}
      data-rendering={rendering}
      ref={ref}
    >
      {children}
    </section>
  )
);
