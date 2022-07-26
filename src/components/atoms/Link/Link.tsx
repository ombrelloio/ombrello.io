import { FC, ReactNode } from "react";

import NextLink from "next/link";

const Link: FC<{
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
}> = (props) => <NextLink {...props} />;

export { Link };
