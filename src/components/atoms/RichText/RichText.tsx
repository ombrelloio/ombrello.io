/* eslint-disable react/no-danger */
import { FC, ReactNode } from "react";
import classNames from "classnames";

const RichText: FC<{
  className?: string;
  text: string;
  children?: ReactNode;
}> = ({ children, text, className }) => (
  <div
    className={classNames("richtext", className)}
    dangerouslySetInnerHTML={{ __html: text }}
  >
    {children}
  </div>
);

export { RichText };
