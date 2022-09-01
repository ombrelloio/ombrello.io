import { FC, useRef, PropsWithChildren } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { Transitionator } from "@layout";
import cx from "classnames";

const FadeIntersect: FC<
  PropsWithChildren<{
    rootMargin?: string;
    stagger?: string;
    method?: "pullup" | "fade" | "zoomIn" | "zoomOut";
    inset?: boolean;
    className?: string;
  }>
> = ({
  children,
  rootMargin = "-200px",
  stagger,
  inset,
  method,
  className,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    rootMargin,
  });

  const isRefVisible = !!entry?.isIntersecting;

  return (
    <Transitionator
      ref={ref}
      isIn={isRefVisible}
      duration="slow"
      stagger={stagger}
      className={cx(
        {
          "absolute inset-0": inset,
        },
        className
      )}
      method={method}
    >
      {children}
    </Transitionator>
  );
};

export { FadeIntersect };
