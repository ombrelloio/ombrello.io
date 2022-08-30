import cx from "classnames";
import { BaseFCType } from "@types";

export interface SectionProps extends BaseFCType {
  flush?: boolean;
}
export const Section = ({
  className,
  children,
  rendering,
  flush,
}: SectionProps) => (
  <section
    className={cx(
      {
        "section-gap-vertical": !flush,
      },
      className
    )}
    data-rendering={rendering}
  >
    {children}
  </section>
);
