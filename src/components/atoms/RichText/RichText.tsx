import { FC, ReactNode } from "react";
import classNames from "classnames";

const RichText: FC<{
  className?: string;
  text: string;
  children?: ReactNode;
  styled?: boolean;
}> = ({ children, text, styled = false, className }) => (
  <div
    className={classNames("richtext", className, {
      styled,
    })}
    dangerouslySetInnerHTML={{ __html: text }}
  >
    {children}
  </div>
);

export { RichText };
