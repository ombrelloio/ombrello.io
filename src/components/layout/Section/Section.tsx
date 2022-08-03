import cx from "classnames";
import { BaseFCType } from "@types";

export const Section = ({ className, children, rendering }: BaseFCType) => (
  <section
    className={cx("my-32 md:my-64", className)}
    data-rendering={rendering}
  >
    {children}
  </section>
);
