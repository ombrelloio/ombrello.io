import { ButtonHTMLAttributes, FC } from "react";
import cx from "classnames";
import { Link } from "@atoms";
import { LinkTargetType } from "@types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: { href: string; target?: LinkTargetType };
  pType?: "primary" | "secondary";
}
const Button: FC<ButtonProps> = ({
  children,
  link,
  className,
  pType = "primary",
  ...rest
}) => {
  // BUTTON
  return !link ? (
    <button className={className} {...rest}>
      {children}
    </button>
  ) : (
    // BUTTON BUT AS A LINK
    <div className="space-x-8">
      <Link
        href={link.href}
        target={link.target}
        className={cx(
          "btn",
          {
            "btn-prim": pType === "primary",
          },
          className
        )}
        noUnderline
      >
        {children}
      </Link>
    </div>
  );
};
export { Button };
