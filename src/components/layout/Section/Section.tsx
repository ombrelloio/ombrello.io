import cx from "classnames";
import { BaseFCType } from "@types";

interface SectionProps extends BaseFCType {
  flush?: boolean;
}
export const Section = ({
  className,
  children,
  rendering,
  flush,
}: SectionProps) => (
  <section
    className={cx({ "my-xxl": !flush }, className)}
    data-rendering={rendering}
  >
    {children}
  </section>
);
