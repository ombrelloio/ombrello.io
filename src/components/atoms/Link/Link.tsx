import { KeyboardEvent, MouseEvent, ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";
import { fixSlug, isURL } from "@app/helpers/utils.helpers";
import { LinkTargetType } from "@types";
import cx from "classnames";

interface LinkExtProps extends LinkProps {
  children: ReactNode;
  className?: string;
  role?: string;
  ariaLabel?: string;
  target?: LinkTargetType;
  // eslint-disable-next-line no-unused-vars
  clickHandler?: (event: MouseEvent) => void;
  // eslint-disable-next-line no-unused-vars
  keyHandler?: (event: KeyboardEvent<HTMLAnchorElement>) => void;
  noUnderline?: boolean;
  block?: boolean;
}

const Link = ({
  children,
  href,
  role = "link",
  clickHandler,
  keyHandler,
  className,
  target,
  ariaLabel,
  noUnderline,
  block,
  ...props
}: LinkExtProps) => {
  // if (!href) {
  //   console.warn("undefined href in Link", href, children);
  // }
  return href ? (
    <NextLink {...props} href={isURL(href) ? href : fixSlug(href)} passHref>
      <a
        role={role}
        className={cx(className, "", {
          "transition underline underline-offset-2 hover:opacity-100":
            !block && !noUnderline,
          block,
        })}
        rel={isURL(href) ? "noopener" : ""}
        target={target}
        aria-label={ariaLabel}
        /* Handlers applied this way to avoid es-linting errors: */
        {...(clickHandler ? { onClick: clickHandler } : {})}
        {...(keyHandler ? { onkeydown: keyHandler } : {})}
      >
        {children}
      </a>
    </NextLink>
  ) : null;
};
export { Link };
