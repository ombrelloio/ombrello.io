import { FC, useRef, PropsWithChildren } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { Transitionator } from "@layout";

const FadeIntersect: FC<
  PropsWithChildren<{
    rootMargin?: string;
    stagger?: string;
    flex?: boolean;
    method?: "pullup" | "fade" | "zoomIn" | "zoomOut";
  }>
> = ({ children, rootMargin, stagger, flex, method }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    rootMargin: rootMargin || "-120px",
  });

  const isRefVisible = !!entry?.isIntersecting;

  return (
    <Transitionator
      ref={ref}
      isIn={isRefVisible}
      duration="slow"
      stagger={stagger}
      className={flex ? "flex w-full" : ""}
      method={method}
    >
      {children}
    </Transitionator>
  );
};

export { FadeIntersect };
